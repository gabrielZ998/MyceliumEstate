const CART_KEY = 'mycelial_cart';

function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function addToCart(product) {
  const items = getCart();
  const existing = items.find(i => i.name === product.name && i.unit === product.unit);
  if (existing) {
    existing.qty += product.qty || 1;
  } else {
    items.push({
      name: product.name,
      price: product.price,
      unit: product.unit || '',
      qty: product.qty || 1,
      url: product.url || '#',
      image: product.image || ''
    });
  }
  saveCart(items);
  updateCartCount();
}

function removeFromCart(index) {
  const items = getCart();
  items.splice(index, 1);
  saveCart(items);
  renderCart();
  updateCartCount();
}

function updateQty(index, qty) {
  const items = getCart();
  if (qty < 1) { removeFromCart(index); return; }
  items[index].qty = qty;
  saveCart(items);
  renderCart();
  updateCartCount();
}

function clearCart() {
  saveCart([]);
  renderCart();
  updateCartCount();
}

function cartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const count = cartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'none';
  });
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const summaryEl = document.getElementById('cart-summary');
  if (!container) return;

  const items = getCart();

  if (items.length === 0) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (summaryEl) summaryEl.style.display = 'block';

  container.innerHTML = items.map((item, i) => `
    <div class="cart-row">
      <div class="cart-row-info">
        ${item.image ? `<img class="cart-row-img" src="${item.image}" alt="${item.name}" />` : `<div class="cart-row-placeholder">${item.name.charAt(0)}</div>`}
        <div>
          <a class="cart-row-name" href="${item.url}">${item.name}</a>
          <p class="cart-row-unit">${item.unit}</p>
        </div>
      </div>
      <div class="cart-row-price">$${item.price.toFixed(2)}</div>
      <div class="cart-row-qty">
        <button class="qty-btn" onclick="updateQty(${i}, ${item.qty - 1})">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${i}, ${item.qty + 1})">+</button>
      </div>
      <div class="cart-row-total">$${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-row-remove" onclick="removeFromCart(${i})">×</button>
    </div>
  `).join('');

  document.getElementById('cart-subtotal').textContent = `$${cartTotal().toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartCount();
});

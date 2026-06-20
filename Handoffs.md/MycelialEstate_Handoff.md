# Mycelial Estate — Session Handoff

---

## Handoff Instructions
Read this fully before responding. Follow the project rules in AGENTS.md (project root). Do not implement unless Gabe explicitly says to.

---

## Project Status

**Project:** Mycelial Estate — a boutique fungi farm/lab website built in plain HTML/CSS.
**Goal:** Sell products, collect inquiries, build trust.
**Phase 1:** Lightweight. No custom checkout, accounts, or backend.
**Phase 2:** Square integration for checkout (not started).

---

## File Structure
```
MycelialEstate/
├── index.html              ← Homepage (oyster-only focus; Shop Strip removed)
├── sections-removed-for-later.html ← Backup of Shop Strip for future re-add
├── AGENTS.md               ← Project rules for AI
├── shop.html               ← Built (hero + 5-category grid)
├── fresh-harvest.html      ← Built (slideshow hero + variety links)
├── grain-spawn.html        ← Built (product page w/ specs, strains, FAQ)
├── substrate-kits.html     ← Built (product page w/ sizes, FAQ)
├── liquid-cultures.html    ← Built (product page w/ strains, FAQ)
├── csa-share.html          ← Built (CSA page w/ plans, FAQs)
├── black-pearl-oyster.html ← Built (product page)
├── golden-oyster.html      ← Built (product page)
├── blue-oyster.html        ← Built (product page w/ FAQ, details)
├── our-methods.html        ← Built (full page — culture through compost)
├── about.html              ← Built (brand story + values)
├── contact.html            ← Built (form + contact info)
├── wholesale.html          ← Built (pricing tiers + perks)
├── coming-soon.html        ← Built (3 upcoming varieties + waitlist)
├── journal.html            ← Built (article listing page)
├── article-straw-substrate.html   ← Built (full article)
├── article-contamination.html     ← Built (full article)
├── article-lot-performance.html   ← Built (full article)
├── privacy.html            ← Built
├── shipping-policy.html    ← Built
├── refund-policy.html      ← Built
├── css/
│   └── styles.css          ← Shared base styles (variables, nav, footer)
└── assets/
    ├── images/
    │   ├── BlackO.png
    │   ├── BlueO.png
    │   └── GoldO.png
    └── fonts/
```

---

## What Has Been Implemented

### Homepage (index.html)
- All nav links wired
- Hero buttons, oyster trio, coming soon, journal all wired
- Shop Strip (grain spawn, substrate kits, CSA share) removed and saved to sections-removed-for-later.html
- Our Methods image replaced with asset file ref (base64 removed)
- CSS variables, animations, scroll reveal, responsive

### css/styles.css
- Shared base styles — nav, footer, CSS variables, responsive breakpoints

### Product Pages
- **fresh-harvest.html** — Slideshow hero, variety list w/ pricing, educational section, FAQ
- **blue-oyster.html, black-pearl-oyster.html, golden-oyster.html** — Specimen-feature split layout, specs table, Add to Cart, details/cultivation/FAQ/related sections

### Category/Shop Pages
- **shop.html** — 5-category grid (Fresh Harvest, Grain Spawn, Substrate Kits, Liquid Cultures, CSA Share)
- **grain-spawn.html** — Specs, process details, strains grid, FAQ
- **substrate-kits.html** — Sustainability details, size/pricing grid, FAQ
- **liquid-cultures.html** — Lab protocol details, strains grid, FAQ
- **csa-share.html** — How It Works, pricing plans (weekly/monthly), FAQ

### Informational Pages
- **our-methods.html** — 4-phase process (Culture → Substrate → Fruiting → Compost), full process step list
- **about.html** — Brand story, values grid
- **contact.html** — Form with subject dropdown, contact details (mailto for Phase 1)
- **wholesale.html** — 3 pricing tiers (Starter/Standard/Premier), farm-direct advantage perks
- **coming-soon.html** — 3 upcoming varieties (Lion's Mane, Shiitake, Reishi) with status and notify links

### Journal
- **journal.html** — Article listing with dates, excerpts, tags, read links
- **article-straw-substrate.html** — Full article: two-year substrate trial results
- **article-contamination.html** — Full article: contaminant guide w/ microscopy and quarantine protocol
- **article-lot-performance.html** — Full article: lot tracking system and data insights

### Legal/Policy Pages
- **privacy.html**, **shipping-policy.html**, **refund-policy.html** — Standard policies adapted for the estate

---

## Key Decisions
- Fresh only for Phase 1 product variants
- Add to Cart links to cart.html (stub for Phase 2)
- Product pages use specimen-feature split layout
- Shared base CSS extracted to styles.css
- Category/product pages without images use circular text-only placeholders
- CSA page uses unique layout (plans/pricing grid)
- Contact form uses mailto: for Phase 1 (no backend)
- Article pages follow consistent long-form template with pullquotes

---

## Known Issues
- No cart functionality yet (Phase 2)
- Product pages for spawn/substrate/cultures use text-only placeholder circles instead of actual product photos
- Coming Soon images on index.html still use placeholder (Ourprocess.png) — need actual product photos
- Contact form uses mailto (functional but not ideal UX)

---

## Next Steps (Prioritized)
1. **Phase 2** — Square integration, cart.html, checkout
2. **Product photography** — Replace text-only placeholders and Coming Soon images with actual product photos
3. **Contact form** — Upgrade from mailto to a proper form handler

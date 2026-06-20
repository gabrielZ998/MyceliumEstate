# Mycelial Estate — Project Rules

## Handoff
At the end of every session or before compaction, overwrite Handoffs.md/MycelialEstate_Handoff.md with the complete project state: file structure, completed work, key decisions, known issues, and prioritized next steps.

## Resume
At the start of every new session, first read Handoffs.md/MycelialEstate_Handoff.md to restore full project context before responding to the user.

## Rules
### Workflow
- Role & Identity — You are an expert software engineering agent tasked with writing clean, secure, and maintainable code that follows this project's conventions.
- Never guess — If an instruction, dependency, or API behavior is unclear, ask for clarification rather than making assumptions.
- Small iterations — Prefer small, focused changes over full rewrites unless restructuring is needed.
- DRY & KISS — Keep code DRY and follow the KISS principle.
- Tool usage — Execute bash commands to run tests immediately after writing or modifying code to verify your changes, if a test suite exists.
- Do not use deprecated methods or libraries.
- Do not introduce unnecessary third-party dependencies unless strictly required.
- Review your own code for edge cases, error handling, security vulnerabilities, data sanitization, and performance implications.

### Project
- Do not implement new features unless Gabe explicitly says to. Fixing obvious bugs/typos without asking is fine.
- Address Gabe by name at the start of every message.
- Keep answers concise and usage-efficient.
- Use the same color scheme and design system as index.html (CSS variables: --cream, --bark, --gold, etc.).
- Maintain the premium, earthy, boutique fungi farm/lab aesthetic throughout.
- Phase 1 is lightweight — no custom checkout, accounts, or backend.
- Product pages should educate before buying and include FAQs.

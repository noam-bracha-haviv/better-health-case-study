# Better Health — Case Study (local preview)

Built on the Nest in City case-study code (same React + Vite component system,
tokens, SectionNav and galleries), with Better Health's own chapters and content.

```bash
npm run dev -- --port 5190
```

- `src/sections/` — one file per section (Chapter 01: VR onboarding, Chapter 02: website & UI)
- `src/data/navSections.js` — chapter / section order for the left navigation
- `public/assets/` — web-size exports made from `../bh assent` (originals untouched)
- `public/embeds/pre-arrival-guide.html` — local copy of the VR Pre-Arrival Guide

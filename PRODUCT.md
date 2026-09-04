# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted roughly equally:

- **Local business owners** (law firms, clinics, small/corporate businesses) evaluating Matheus as a freelancer to build or improve their web presence.
- **Recruiters and companies** evaluating Matheus for a full-time front-end role — the portfolio also functions as a resume.

Both should come away able to judge his front-end craft and reach him easily; neither pitch should be favored over the other in copy or structure.

## Product Purpose

A personal portfolio site for Matheus P. Mufato, a front-end developer / web designer based in Araraquara, São Paulo, Brazil. It exists to demonstrate front-end craft (React, Three.js, Framer Motion, interactive UI) and convert a visitor — freelance client or employer — into a contact.

## Positioning

A front-end developer who combines freelance experience serving local businesses (law firms, clinics, corporate clients) with interactive, component-driven web work (React + Three.js + Framer Motion) — not a generic template-based freelancer or a purely corporate-agency portfolio.

## Operating Context

Single-page app with sidebar navigation between sections (Hero, About, Services, Portfolio, Contact), switched via `AnimatePresence` rather than routing. Dark-first theme with a light-mode toggle (no flash of light theme on load). Content is authored as static data modules (`src/data/*.js`) consumed by section/UI components — editing site content means editing those data files, not the components.

## Capabilities and Constraints

- Built with React 19 + Vite + Framer Motion (see `package.json`); typed.js is a dependency (likely for the hero typing effect).
- No routing library — section switching is state-driven, not URL-driven, by prior decision (per README "Pendências").
- No theme persistence in `localStorage` yet — resets to dark on reload, by prior decision.
- Animations respect `prefers-reduced-motion` (hero drag chips do not render when reduced motion is requested).
- Contact form (`ContactForm`) exists in the UI; its submission backend/integration status is unconfirmed — do not assume it sends email without checking the component.

## Brand Commitments

None fixed beyond what's already in code. Name (Matheus P Mufato), stated domain (MatheusMufatoDev.com.br), dark navy theme, and Space Grotesk / IBM Plex Sans+Mono typography are the current starting point, not a locked identity — future visual work may evolve them.

## Evidence on Hand

- Real: name, profession list, location (Araraquara, SP, Brazil), contact email (mmufato@gmail.com), phone, education history (Uniara, Computer Engineering, 2021–2025), GitHub (`https://github.com/MatheusMufato`), three real project links with live URLs (Nike Store, Mundo Invertido, RM Veículos clones/builds).
- **Known placeholders/inaccurate — do not treat as confirmed facts:**
  - Skill percentages in `src/data/skills.js` (e.g. JS 27%, PHP 56%) are placeholder values, not accurate self-assessment.
  - The "Motus Marketing" experience entry in `src/data/experience.js` has generic filler text (README flags this explicitly).
  - Project screenshots are missing (`public/imagens/` has no real images yet — only its own README); the three portfolio cards need real imagery.
  - LinkedIn and Behance links are unset placeholders (`"#"`).
- Freelancer availability is stated as "Available" in `profile.js` — treat as current status, not a fact to invent changes to.

## Product Principles

1. Serve both audiences (freelance clients and employers) without the design tipping into either a purely corporate-agency tone or a purely playful freelancer-for-hire tone.
2. Let interactive, component-driven craft (the draggable hero chips, animated nav, Three.js background) demonstrate skill directly rather than only claiming it in copy.
3. Keep content edits data-driven: real project imagery, accurate skills, and rewritten experience text are known follow-ups, not settled facts to build further copy on top of.
4. Preserve the dark-first, terminal/dev-identity voice (`~/matheus $ whoami`-style navigation, monospace accents) as the current expressive throughline unless a future redesign deliberately replaces it.

## Accessibility & Inclusion

No project-specific requirement established beyond the existing `prefers-reduced-motion` handling already in code.

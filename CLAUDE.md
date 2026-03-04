# AJ23 Barbershop Website

## Project
Production website for AJ23 Barbershop (Gainesville, FL). Rebuilt from a static HTML prototype into a Next.js app.

## Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Deployed on Vercel

## Architecture
- **Single-page scroll** — all sections render on `/`, navbar uses anchor links
- **Content** lives in `src/data/` (services, barbers, reviews, translations, site-config) — never hardcode strings in components
- **EN/ES language toggle** via React Context (`src/context/LanguageContext.tsx`) + localStorage
- **Prototype reference**: `index.html` at repo root — the visual source of truth

## Commands
- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint

## Design Tokens
- Colors: bg `#0A0A0A`, card `#141414`, text `#FFFFFF`, muted `#888888`, gold `#D4AF37`
- Fonts: Bebas Neue (headings, uppercase), Outfit (body)
- Dark theme only
- Section spacing: 100px desktop, 64px mobile (`.section-padding` utility)
- Border radius: 16px cards, 9999px buttons
- Container max-width: 1200px

## Conventions
- Use `next/image` for all images (not `<img>`)
- Use `next/font/google` for fonts (not CDN links)
- Client components only when needed (interactivity, language context, scroll listeners)
- Match the prototype (`index.html`) visually — same colors, spacing, layout
- Always commit and push at end of session

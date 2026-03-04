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
- Colors: bg `#0B0B0B`, card `#111111`, text `#F2F0EB`, muted `#807E78`, gold `#C9A96E`
- Fonts: Playfair Display (headings), Outfit (body)
- Dark theme only

## Conventions
- Use `next/image` for all images (not `<img>`)
- Use `next/font/google` for fonts (not CDN links)
- Client components only when needed (interactivity, language context, scroll listeners)
- Match the prototype (`index.html`) visually — same colors, spacing, layout
- Always commit and push at end of session

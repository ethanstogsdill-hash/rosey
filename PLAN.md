# PLAN: 2Krushal Cuts Barbershop Website

## Overview

Build a single-page, mobile-first barbershop website for **2Krushal Cuts**, a local barbershop in Gainesville, FL. This is a client prototype meant to impress the business owner during an in-person sales pitch.

## Design Direction

- **Vibe:** Clean, modern, minimal — dark theme with warm gold accents
- **Inspiration:** Scissors & Scotch (dark confidence, bold copy, reviews carousel) + Fort Worth Barbershop (elegant simplicity, clean service menu, big hero)
- **Fonts:** Playfair Display (headings, serif/italic accents) + Outfit (body, sans-serif)
- **Colors:**
  - Background: `#0B0B0B`
  - Card: `#111111`
  - Text: `#F2F0EB`
  - Muted: `#807E78`
  - Accent gold: `#C9A96E`
- No frameworks — pure HTML/CSS/JS in a single file
- Must look great on mobile (most barber shop clients browse on phones)

## Page Structure (Single Scrolling Page)

### 1. Fixed Navigation

- Logo: "2KRUSHAL CUTS" with "CUTS" in gold
- Links: About, Services, Barbers, Reviews, Find Us
- "Book Now" button (gold pill shape) → links to https://booksy.com/en-us/1131515_2krushal-cuts_barber-shop_15596_gainesville
- Transparent on top, blurred dark background on scroll
- Hamburger menu on mobile with full-screen overlay

### 2. Hero Section (100vh)

- Badge: "★ 4.8 Stars · 330+ Google Reviews"
- Headline: Where Every Cut Is a *Masterpiece* (italic word in gold)
- Subtext: "Gainesville's detail-driven barbershop. Precision fades, sharp lineups, and a vibe that keeps you coming back."
- Two CTAs: "Book Your Cut" (gold) + "View Services" (outline)
- Subtle scroll indicator at bottom
- Radial gradient glow behind content for depth
- Fade-up entrance animations

### 3. The Vibe (About)

- Section label: "THE VIBE"
- Heading: "Artistry Meets Precision"
- Body text about their detail-first approach, the experience, and what sets them apart
- Centered layout, max-width ~620px

### 4. Services & Pricing

- Section label: "THE MENU"
- Heading: "Services & Pricing"
- Grid layout (2 columns desktop, 1 column mobile)
- Each service card: name, description, price (gold, Playfair)
- Services:
  - Precision Haircut — $35
  - Haircut + Beard — $50
  - Beard Trim & Shape — $20
  - Kids Cut — $25
  - Lineup / Edge Up — $15
  - Razor Shave — $30
- Dark elevated cards with subtle border, hover effect
- Note: prices are estimates — owner will confirm exact pricing

### 5. Meet Your Barbers

- Section label: "THE TEAM"
- Heading: "Meet Your Barbers"
- 3 barber cards in a row (stacked on mobile)
- Each card: placeholder photo area with large initials, name, role, specialty description
- Barbers (pulled from real Google reviews):
  - **Bax** — Lead Barber — "Known for artistic flair and razor-sharp fades"
  - **Bryan** — Senior Barber — "Precision in his DNA, consistently clean cuts"
  - **Joey** — Barber — "Master of classic and modern blend"
- Photo placeholders say "Photo coming soon" — owner provides real photos later
- Cards have hover lift effect

### 6. Reviews

- Section label: "THE PEOPLE HAVE SPOKEN"
- Heading: "What Clients Are Saying"
- Star rating display: ★★★★★ 4.8/5 · 330+ Google Reviews
- 3 review cards (grid, stacked on mobile)
- Real reviews from Google/Booksy:
  1. "This is the best barber shop in Gainesville. He expertly fades and styles my son's hair..."
  2. "From the moment I stepped in, I knew I was in for a treat. The ambiance was a perfect blend of classic and modern..."
  3. "Good vibe, great cut. Gives honest opinions and suggestions..."
- Each card: stars, italic quote text, "Verified Client", "Google Review"

### 7. CTA Banner

- Heading: Ready to Look *Krushal?* (italic gold)
- Subtext: "Walk-ins welcome. Appointments recommended for guaranteed seating."
- Book Now button
- Subtle radial glow background

### 8. Find Us (Contact/Location)

- Two-column layout (info left, map right; stacks on mobile)
- Section label: "FIND US"
- Heading: "Come Through"
- Info blocks with gold labels:
  - Location: 1606 NW 13th St, Gainesville, FL 32609
  - Hours: Tue-Fri 9AM-7PM, Sat 9AM-5PM, Sun-Mon Closed
  - Contact: (352) 225-3242 + @2krushalcuts Instagram link
- "Get Directions" button → Google Maps link
- Embedded Google Maps iframe (dark/inverted filter to match theme)

### 9. Footer

- Simple bar: copyright left, social links right (Instagram, Booksy)
- Thin top border

## Technical Details

### Animations

- Hero elements: staggered fadeUp on load
- All sections: scroll-triggered reveal (IntersectionObserver)
- Navbar: smooth transition from transparent to blurred dark on scroll
- Buttons: translateY(-2px) + gold shadow on hover
- Cards: subtle lift on hover
- Scroll indicator: pulsing line animation

### Responsive Breakpoints

- Desktop: 3-column grids for barbers and reviews
- Tablet (~900px): single column grids
- Mobile (~768px): hide nav links, show hamburger, reduce padding, stack everything

### Performance

- Single HTML file, no external dependencies except Google Fonts
- CSS-only animations where possible
- Lazy-load the map iframe
- Minimal JS: nav scroll handler + IntersectionObserver for reveals + mobile menu toggle

## Files

- `index.html` — The entire site (HTML + CSS + JS in one file)

## Success Criteria

- Looks professional enough that the barbershop owner says "wow" when he sees it on a phone
- Every button/link works (Booksy, phone, directions, Instagram)
- Loads fast, scrolls smooth, looks sharp on mobile
- Could realistically go live as-is with just photo swaps and price confirmation

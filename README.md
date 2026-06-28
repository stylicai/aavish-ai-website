# Aavish AI Lab — Frontend

Marketing site for **Aavish AI Lab**, a global AI systems engineering studio. Built to feel like an engineering lab notebook crossed with an editorial magazine — production-grade, calm, technical.

## Stack

- Next.js 14 (App Router) · TypeScript (strict)
- Tailwind CSS 3.4 with CSS variables
- Framer Motion (LazyMotion + `m.*`)
- `react-hook-form` + `zod`
- `lucide-react` icons
- `next/font/google` for Instrument Serif, Inter, JetBrains Mono

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

```bash
npm run dev      # local dev
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Project structure

```
app/                        # Next.js App Router routes
  page.tsx                  # Home
  about/
  services/                 # index + [slug]
  work/                     # index + [slug]
  blog/                     # index + [slug]
  contact/
  products/stylic-ai/
  layout.tsx
  globals.css
  sitemap.ts · robots.ts · not-found.tsx
components/
  layout/                   # Navbar, Footer, Logo
  ui/                       # primitives (Button, Card, Eyebrow, Section, …)
  ui/animation/             # Reveal, Stagger
  sections/                 # marketing sections used across pages
  visuals/                  # animated dashboards, terminals, diagrams
  blog/                     # blog-specific helpers
  seo/                      # JSON-LD schema
lib/                        # data + utils (services, work, blog, site)
```

## Design tokens

All colors, fonts, and spacing flow from CSS variables in `app/globals.css` and the Tailwind theme in `tailwind.config.ts`.

- **Cream `#FAF6EF`** is the default canvas.
- **Orange `#FF7000`** is reserved for accents, single CTAs, and one-word emphasis.
- **`#111111`** is for trust surfaces (CTAs, dashboards, footer).
- Typography: `Instrument Serif` for display, `Inter` for body, `JetBrains Mono` for code.
- Motion: ~300ms with `cubic-bezier(0.22, 1, 0.36, 1)`; everything respects `prefers-reduced-motion`.

## Notes

- All animations are wrapped in `LazyMotion` + `m.*` to keep the bundle small.
- The contact form, newsletter form, and analytics integrations are intentionally placeholder endpoints (`/api/newsletter`). Wire them up before launch.
- Replace placeholder client wordmarks in `LogoCloud` with monochrome SVGs when available.

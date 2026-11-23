# RVM Consulting — landing page

A single-page marketing site for RVM Consulting (Pty) Ltd, an independent corporate finance
and consulting practice based in Kimberley, Northern Cape.

## Stack

- React 19 + TypeScript (Vite 7)
- Tailwind CSS 3 with a shadcn/ui component set
- Fraunces (display serif) + Manrope (sans) via Google Fonts
- lucide-react icons

## Structure

```
src/
  pages/Home.tsx        Page composition
  sections/             Header, Hero, Services, Approach, Results, About, Contact, Footer
  hooks/useReveal.tsx   IntersectionObserver-based scroll reveal
  components/ui/        shadcn/ui primitives
  assets/rvm-logo.ts    Brand logo inlined as a data URI (keeps the repo text-only)
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to dist/
```

The built site is fully static and can be hosted on any static host
(e.g. GitHub Pages, or any web server pointed at `dist/`).

## Notes

- The contact form is client-side only (validation + confirmation state); wire it to an
  email/API endpoint before production use.
- Figures and testimonial shown are illustrative placeholders.
- Company details: RVM Consulting (Pty) Ltd, CIPC reg. no. 2013/100264/07,
  registered office Kimberley, Northern Cape.

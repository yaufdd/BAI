# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BAI (Business AI) is a Russian-language landing page for an AI business automation company. Single-page React app deployed to GitHub Pages at `/BAI/`.

## Commands

- `npm run dev` — local dev server with HMR
- `npm run build` — type-check (`tsc -b`) then Vite build to `dist/`
- `npm run lint` — ESLint
- `npm run preview` — preview production build locally

No test framework is configured.

## Deployment

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml` (GitHub Pages). Vite `base` is set to `/BAI/`.

## Architecture

**Stack:** React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Framer Motion, Vite 7.

**App structure:** `App.tsx` renders a fixed set of landing page sections in order: Navbar, Hero, Problems, Solution, HowItWorks, Cases, Pricing, FAQ, CTAForm, Footer. All sections except Hero and layout components are lazy-loaded with `React.lazy` + `Suspense`.

**Key directories:**
- `src/components/sections/` — page sections, each a self-contained component
- `src/components/layout/` — Navbar, Footer
- `src/components/ui/` — reusable UI primitives (Button, Badge, SectionHeader)
- `src/components/effects/` — visual effects (GlowOrb, GridBackground)
- `src/hooks/` — `useInView` (IntersectionObserver, fires once) and `useAnimatedCounter` (number count-up animation)
- `src/lib/constants.ts` — all copy, pricing data, FAQ items, nav links
- `src/lib/emailjs.ts` — lead form submission via EmailJS (service ID, template ID, public key hardcoded)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Design System

Defined in `src/index.css` via Tailwind `@theme`:
- **Colors:** `bg-base` (#080B14), `bg-surface` (#0F1420), `bg-elevated` (#151C2E), `accent-primary` (#6C63FF), `accent-secondary` (#00D4FF), `text-primary` (#F0F4FF), `text-muted` (#6B7A99)
- **Fonts:** Inter (body), Space Grotesk (display headings)
- **Utility classes:** `.gradient-text`, `.gradient-bg`, `.glow-primary`, `.glow-secondary`, `.border-gradient`, `.animate-float`, `.animate-pulse-glow`

## Conventions

- All user-facing text is in Russian
- Content/copy lives in `src/lib/constants.ts`, not inline in components
- Icons from `lucide-react`
- Animations via Framer Motion; scroll-triggered via `useInView` hook
- No state management library; local state only

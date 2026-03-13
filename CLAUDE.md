# 69hockey — Project Instructions

## Project Overview

Multi-page Next.js website for a hockey products ecosystem.
Site name: **69hockey**
Do NOT describe it as a "hockey ecosystem" in any copy or UI text.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript (strict mode, no `any`)
- Tailwind CSS (utility classes only, no custom CSS files)
- No separate CSS files — all styling via Tailwind

## Project Structure

```
/app
  /page.tsx              — Home page (Hero + sections)
  /tournaments
    /page.tsx            — Tournaments list
    /[slug]/page.tsx     — Individual tournament landing
  /camps
    /page.tsx            — Camps page (coming soon)
  /partnership
    /page.tsx            — Partnership page (coming soon)
/components
  /layout
    Header.tsx           — Site header with navigation
    Footer.tsx           — Site footer
  /ui                    — Reusable UI primitives
  /sections              — Page sections (Hero, TournamentCard, etc.)
/lib                     — Utilities, data fetching helpers
/public                  — Static assets (images, icons, logo)
```

## Code Conventions

- Components: PascalCase filenames and exports
- Server Components by default; add `"use client"` only when hooks or events are needed
- All text content in Russian
- No inline styles
- No `any` in TypeScript
- Use `next/image` instead of `<img>`
- Use `next/link` instead of `<a>` for internal links

## Design System

### Color Palette (from reference screenshot — leningradets.ru style)

- Background (page): `#0f1b2d` — very dark navy blue
- Background (sections/cards): `#162236` — slightly lighter navy
- Accent: `#c8102e` — hockey red
- Text primary: `#ffffff`
- Text secondary: `#8a9bb0` — muted blue-grey
- Border/divider: `#1e3050`
- Star decorative element: `#1a3a5c` (dark blue stars in background)

### Typography

- Headings: bold, uppercase, wide tracking — similar to impact/condensed sports style
- Font stack: `font-sans` (Inter or system-ui)
- Hero headline: very large, bold, uppercase (`text-5xl font-black uppercase`)
- Section titles: large, bold, uppercase (`text-3xl font-bold uppercase`)

### Visual Style

- Dark navy background throughout (NOT black, NOT grey)
- Large full-width hero with background photo/video + dark overlay
- Bold uppercase headings — aggressive sports aesthetic
- Red accent for CTAs, active states, highlights
- Star (★) decorative separators between nav items
- Cards with rounded corners (`rounded-xl`), subtle border, dark background
- Buttons: filled red (`bg-red-700`) or outlined white

### Header

- Dark navy background, full width
- Logo on the left
- Navigation links centered, separated by ★ star icons
- CTA button on the right (e.g. "Записаться" or primary action)
- Sticky on scroll

### Hero Section

- Full-width, min-height `100vh` or `80vh`
- Background: dark photo with dark overlay (`bg-black/50` or gradient)
- Headline: huge, white, bold, uppercase, left-aligned
- Subtitle: smaller, muted, left-aligned
- Optional CTA button(s) below subtitle

## Navigation (Header Menu)

Links:

1. Турниры → `/tournaments`
2. Кэмпы → `/camps`
3. Партнёрство → `/partnership`

## Pages to Build (Phase 1)

1. **Home** — Hero section + intro
2. **Tournaments list** — Grid of tournament cards
3. **Tournament landing** — Individual page per tournament (`/tournaments/[slug]`)

## Визуальная проверка

После создания или изменения UI-компонентов:

1. Убедись что `npm run dev` запускается без ошибок
2. Сделай скриншот через Playwright: `npx playwright screenshot http://localhost:3000 screenshot.png`
3. Посмотри на скриншот и оцени результат перед тем как считать задачу выполненной

## What NOT to Do

- Do NOT use Pages Router (`/pages` directory)
- Do NOT use `<img>` — always `next/image`
- Do NOT write inline styles
- Do NOT add unnecessary dependencies
- Do NOT describe the site as a "хоккейная экосистема" in UI

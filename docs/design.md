# 69hockey — Design & UI Documentation

## Visual Reference
Base style inspired by: leningradets.ru
Dark navy sports website with bold uppercase typography and red accents.

---

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `bg-page` | `#0f1b2d` | Page background |
| `bg-card` | `#162236` | Cards, sections |
| `bg-header` | `#0d1926` | Header |
| `accent-red` | `#c8102e` | CTAs, active nav, highlights |
| `text-primary` | `#ffffff` | Main text |
| `text-muted` | `#8a9bb0` | Subtitles, secondary |
| `border` | `#1e3050` | Card borders, dividers |
| `star-deco` | `#1a3a5c` | Background star decorations |

In Tailwind config extend colors with these tokens or use closest defaults:
- `bg-[#0f1b2d]`, `bg-[#162236]`, `text-[#8a9bb0]` etc.

---

## Typography Scale

| Element | Classes |
|---|---|
| Hero headline | `text-5xl md:text-7xl font-black uppercase tracking-tight leading-none` |
| Section title | `text-3xl md:text-4xl font-bold uppercase tracking-wide` |
| Card title | `text-xl font-bold uppercase` |
| Body text | `text-base font-normal` |
| Muted / label | `text-sm text-[#8a9bb0]` |

---

## Components

### Header
```
[Logo]    ТУРНИРЫ ★ КЭМПЫ ★ ПАРТНЁРСТВО    [Кнопка CTA]
```
- `sticky top-0 z-50`
- Background: `bg-[#0d1926]`
- Nav items separated by `★` (`text-[#c8102e] text-xs`)
- Active link: `text-white font-semibold border-b-2 border-[#c8102e]`
- Inactive link: `text-[#8a9bb0] hover:text-white transition`

### Hero Section
- `min-h-[80vh] relative flex items-end`
- Background image + overlay: `after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#0f1b2d] after:via-[#0f1b2d]/60 after:to-transparent`
- Content: bottom-left aligned, `pb-16 pl-8 md:pl-16`
- Headline: white, uppercase, font-black
- Subtitle: muted color, max-width `max-w-lg`

### Tournament Card
- `bg-[#162236] rounded-xl border border-[#1e3050] overflow-hidden`
- Hover: `hover:border-[#c8102e] hover:scale-[1.02] transition-all`
- Image on top (16:9 ratio)
- Content: `p-5`
- Badge (dates): `text-xs bg-[#c8102e] text-white px-2 py-1 rounded`
- Title: bold uppercase
- CTA link: `text-[#c8102e] text-sm font-semibold hover:underline`

### Button — Primary (Red)
```
bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold uppercase px-6 py-3 rounded-lg transition
```

### Button — Outlined (White)
```
border border-white text-white hover:bg-white hover:text-[#0f1b2d] font-bold uppercase px-6 py-3 rounded-lg transition
```

---

## Page Layouts

### Home Page
1. `<Header />`
2. `<HeroSection />` — full-width with background image
3. `<TournamentsPreview />` — 3 latest tournaments, link to /tournaments
4. `<Footer />`

### Tournaments List (`/tournaments`)
1. `<Header />`
2. Page title section — dark bg, headline "ТУРНИРЫ"
3. Tournaments grid — `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
4. `<Footer />`

### Tournament Landing (`/tournaments/[slug]`)
1. `<Header />`
2. Hero section — specific to this tournament (image, title, dates)
3. Tournament details — description, format, prizes, schedule
4. Registration CTA block
5. `<Footer />`

---

## Decorative Elements
- Background stars: large `★` characters, `opacity-5`, scattered or in rows, `text-[#c8102e]` or `text-[#1a3a5c]`
- Section dividers: thin `border-t border-[#1e3050]`
- Red underline accent under section titles: `w-16 h-1 bg-[#c8102e] mt-2`

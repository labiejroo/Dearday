# Dearday — Next.js 14 (App Router)

Codzienna afirmacja + 3 pytania do refleksji. Subskrypcyjny landing page.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript**
- **styled-components** (z włączonym SWC `compiler.styledComponents`)
- Google Fonts: Cormorant Garamond, Caveat, Manrope (ładowane przez `<link>`)
- Font Awesome (CDN)

## Struktura

```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, GlobalStyles, Registry
│   ├── page.tsx             # Strona główna — komponuje sekcje
│   ├── registry.tsx         # styled-components SSR registry
│   └── sukces/page.tsx      # Strona sukcesu po zapisie
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Counters.tsx          # 'use client' — animacja liczników
│   ├── HowItWorks.tsx
│   ├── Affirmations.tsx
│   ├── Plans.tsx
│   ├── Delivery.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx               # 'use client' — accordion
│   ├── CtaBanner.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx            # 'use client' — IntersectionObserver
│   ├── shared.ts             # wspólne styled-components (Btn, Section, …)
│   └── painted/              # malowane SVG dekoracje
└── styles/
    ├── tokens.ts             # kolory, spacing, fonty
    ├── theme.ts              # ThemeProvider theme
    └── GlobalStyles.tsx      # globalne resety + CSS vars
```

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy na Netlify

`netlify.toml` jest skonfigurowany. Po stronie Netlify dodaj plugin
`@netlify/plugin-nextjs` (zazwyczaj instaluje się automatycznie).

```bash
# w UI Netlify lub CLI:
netlify deploy --build
```

## Skrypty

- `npm run dev` — tryb deweloperski
- `npm run build` — produkcja
- `npm run start` — uruchomienie po buildzie
- `npm run lint` — ESLint
- `npm run format` — Prettier

'use client'
Styled-components używa React Context i API przeglądarki w czasie renderowania, więc każdy plik który importuje styled musi być komponentem klienckim. Gdybym używał CSS Modules lub Tailwind, większość komponentów mogłaby być Server Components co dawałoby nam SSR ale dla takiego landingu testowego nie ma to sensu.

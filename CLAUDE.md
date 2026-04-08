# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Koru - Consulting & Development** corporate website built with Next.js 15 and Static Site Generation (SSG).

- **Domain**: https://korucode.com
- **Purpose**: Corporate site for a software consulting and development company
- **Hosting**: Static files (HTML/CSS/JS) on Apache hosting

## Commands

- **Dev server**: `npm run dev` - Start Next.js dev server with Turbopack
- **Build**: `npm run build` - Build static site to `out/` folder
- **Start**: `npm start` - Start production server (not used for static hosting)
- **Lint**: `npm run lint` - Run ESLint

## Tech Stack

- **Next.js 15** with App Router and Static Site Generation (`output: 'export'`)
- **React 19** with TypeScript
- **Tailwind CSS v4** (using `@tailwindcss/postcss` plugin)
- **HeroUI** (`@heroui/react`) - UI component library
- **Framer Motion** (`motion/react`) - Animation library

## Architecture

### Project Structure

```
app/
├── layout.tsx              # Root layout (HeroUIProvider)
├── page.tsx                # Root redirect (client-side language detection)
├── globals.css             # Tailwind v4 styles
└── [lang]/                 # Dynamic language route
    ├── layout.tsx          # Language layout (Navbar, Footer, DictionaryProvider)
    ├── page.tsx            # Home page
    ├── about/
    ├── services/
    ├── portfolio/
    ├── contact/
    └── blog/
        ├── page.tsx
        └── [slug]/

components/
├── layout/                 # Navbar, Footer
├── sections/               # Hero, Services, About, CTA, Testimonials
├── ui/                     # ServiceCard, ProjectCard, BlogCard, TeamMember, LanguageSwitcher
└── providers/              # HeroUIProviderWrapper, DictionaryProvider

lib/i18n/
├── config.ts               # Locale configuration
├── get-dictionary.ts       # Dictionary loader
└── dictionaries/           # en.json, es.json

data/                       # Static data (services, projects, team, testimonials, blog)
hooks/                      # useTranslation, useLocalizedPath
```

### Key Patterns

#### Static Site Generation (SSG)
Every page uses `generateStaticParams()` to pre-render all language variants:

```typescript
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
```

#### Page Structure
Pages are split into server and client components:
- `page.tsx` - Server component with `generateMetadata()` and `generateStaticParams()`
- `PageClient.tsx` - Client component with HeroUI and Framer Motion

#### Internationalization (i18n)
- Dictionary-based system (not i18next)
- Translations in `lib/i18n/dictionaries/{en,es}.json`
- Access via `useTranslation()` hook with dot-notation keys: `t('home.hero.title')`
- Supports interpolation: `t('key', { name: 'value' })`

#### Client Components
Components using HeroUI or Framer Motion must have `'use client'` directive:

```typescript
'use client';
import { Button } from '@heroui/react';
import { motion } from 'motion/react';
```

### Tailwind CSS v4 Configuration

Configured in `app/globals.css`:
```css
@import "tailwindcss";
@plugin "../hero.ts";
@source "../node_modules/@heroui/theme/dist/**/*.js";
```

HeroUI theme in `hero.ts` with primary color `#243e85`.

## Multilanguage

- **Supported languages**: English (en), Spanish (es - Latin American/Colombia)
- **Default**: English
- **URL structure**: `/{lang}/page` (e.g., `/en/about`, `/es/about`)
- **Language detection**: Client-side via `navigator.language`

## Build Output

Static export generates `out/` folder:
```
out/
├── index.html          # Language redirect
├── en/                 # English pages
├── es/                 # Spanish pages
├── _next/static/       # JS/CSS bundles
└── assets/             # Static assets (logos)
```

## Important Notes

- **No server-side features**: Cannot use `headers()`, `cookies()`, or dynamic routes
- **Images**: Use `unoptimized: true` in config (no Next.js Image Optimization for static export)
- **Forms**: Contact form is client-side only (no backend)
- **External images**: Unsplash images work without configuration

## Adding New Pages

1. Create folder in `app/[lang]/newpage/`
2. Create `page.tsx` with `generateStaticParams()` and `generateMetadata()`
3. Create `NewPageClient.tsx` with `'use client'` directive
4. Add translations to both `en.json` and `es.json`
5. Add navigation link in `Navbar.tsx`

## Adding Translations

1. Add keys to `lib/i18n/dictionaries/en.json`
2. Add same keys with Spanish translations to `lib/i18n/dictionaries/es.json`
3. Use in components: `const { t } = useTranslation(); t('new.key')`

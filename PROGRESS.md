# PROGRESS.md

Development progress and changelog for the Koru website.

## Migration: React + Vite to Next.js 15 (January 2026)

### Completed Phases

#### Phase 1: Project Initialization
- [x] Created Next.js 15 project structure
- [x] Configured `next.config.ts` with `output: 'export'` for SSG
- [x] Set up TypeScript configuration
- [x] Configured Tailwind CSS v4 with PostCSS
- [x] Set up HeroUI theme (`hero.ts`) with brand colors

#### Phase 2: Internationalization System
- [x] Created `lib/i18n/config.ts` with locale configuration
- [x] Created `lib/i18n/get-dictionary.ts` for async dictionary loading
- [x] Consolidated all translations into `dictionaries/en.json` and `dictionaries/es.json`
- [x] Created `DictionaryProvider` context
- [x] Created `useTranslation` hook with dot-notation access and interpolation
- [x] Created `useLocalizedPath` hook for localized navigation

#### Phase 3: Providers and Layouts
- [x] Created `HeroUIProviderWrapper` (client component)
- [x] Created root `app/layout.tsx`
- [x] Created `app/page.tsx` with client-side language redirect
- [x] Created `app/[lang]/layout.tsx` with Navbar, Footer, and DictionaryProvider

#### Phase 4: Component Migration
- [x] Migrated layout components:
  - `Navbar.tsx` - Navigation with language switcher
  - `Footer.tsx` - Site footer with links and social icons
- [x] Migrated section components:
  - `Hero.tsx` - Home page hero section
  - `Services.tsx` - Services overview
  - `About.tsx` - About preview section
  - `CTA.tsx` - Call-to-action section
  - `Testimonials.tsx` - Client testimonials carousel
- [x] Migrated UI components:
  - `LanguageSwitcher.tsx` - Language dropdown
  - `ServiceCard.tsx` - Service card with features
  - `ProjectCard.tsx` - Portfolio project card
  - `BlogCard.tsx` - Blog post card
  - `TeamMember.tsx` - Team member card

#### Phase 5: Page Creation
- [x] Home page (`app/[lang]/page.tsx`)
- [x] About page (`app/[lang]/about/`)
- [x] Services page (`app/[lang]/services/`)
- [x] Portfolio page (`app/[lang]/portfolio/`)
- [x] Contact page (`app/[lang]/contact/`)
- [x] Blog listing page (`app/[lang]/blog/`)
- [x] Blog post page (`app/[lang]/blog/[slug]/`)

Each page includes:
- `page.tsx` - Server component with `generateStaticParams()` and `generateMetadata()`
- `PageClient.tsx` - Client component with UI and animations

#### Phase 6: Assets
- [x] Copied logo assets to `public/assets/`
  - `logo.svg`
  - `logo_blue_yellow.svg`
  - `logo_blue_rose_variation.svg`
  - `logo_isotipo_blue.svg`
  - `logo_isotipo_yellow.png`

#### Phase 7: Build Verification
- [x] Installed all dependencies
- [x] Added `"type": "module"` to package.json
- [x] Fixed root page to use client-side language detection (SSG compatible)
- [x] Successfully built static site
- [x] Verified 21 HTML pages generated in `out/` folder

### Build Output Summary

```
Route (app)                              Size     First Load JS
○ /                                      610 B    102 kB
○ /_not-found                            977 B    102 kB
● /[lang]                                8.21 kB  210 kB
● /[lang]/about                          6.94 kB  209 kB
● /[lang]/blog                           2.87 kB  208 kB
● /[lang]/blog/[slug]                    1.95 kB  203 kB
● /[lang]/contact                        12.1 kB  211 kB
● /[lang]/portfolio                      6.16 kB  208 kB
● /[lang]/services                       5.11 kB  207 kB

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML
```

### Generated Pages

**Root:**
- `/index.html` - Language redirect

**English (`/en/`):**
- Home, About, Services, Portfolio, Contact
- Blog listing + 3 blog posts

**Spanish (`/es/`):**
- Home, About, Services, Portfolio, Contact
- Blog listing + 3 blog posts

---

## Updates: January 24, 2026

### Data Internationalization
- [x] Added `lang` property to all data interfaces (Service, Project, Testimonial, TeamMember, BlogPost)
- [x] Created Spanish translations for all data files:
  - `data/services.ts` - 4 services in EN/ES
  - `data/projects.ts` - 6 projects in EN/ES
  - `data/testimonials.ts` - 3 testimonials in EN/ES
  - `data/team.ts` - 4 team members in EN/ES
  - `data/blog.ts` - 3 blog posts in EN/ES (with localized slugs)
- [x] Added helper functions to filter data by language:
  - `getServices(lang)`, `getServiceById(id, lang)`
  - `getProjects(lang)`, `getProjectById(id, lang)`
  - `getTestimonials(lang)`
  - `getTeam(lang)`, `getTeamMemberById(id, lang)`
  - `getBlogPosts(lang)`, `getBlogPostBySlug(slug, lang)`, `getAllBlogSlugs()`
- [x] Updated components to use language-filtered data:
  - `Testimonials.tsx` - uses `getTestimonials(lang)`
  - `PortfolioPageClient.tsx` - uses `getProjects(lang)` with localized category filters
  - `BlogPageClient.tsx` - uses `getBlogPosts(lang)`
  - `AboutPageClient.tsx` - uses `getTeam(lang)`
  - `BlogPostPageClient.tsx` - uses `getBlogPosts(lang)` for related posts
  - `blog/[slug]/page.tsx` - uses `getBlogPostBySlug()` and `getAllBlogSlugs()`

### Legal Pages (Privacy & Terms)
- [x] Created `app/[lang]/privacy/page.tsx` and `PrivacyPageClient.tsx`
- [x] Created `app/[lang]/terms/page.tsx` and `TermsPageClient.tsx`
- [x] Added comprehensive translations for both pages in EN/ES
- [x] Added metadata translations for privacy and terms pages
- [x] Pages include: numbered sections, expandable content, contact information
- [x] US-friendly legal language with Colombian law compliance

### Hydration Fix
- [x] Fixed LanguageSwitcher hydration error by deferring Dropdown render until client mount
- [x] Component now renders a placeholder button during SSR

### Language Persistence Feature
- [x] Added `LOCALE_STORAGE_KEY` constant in `lib/i18n/config.ts`
- [x] Updated `app/page.tsx` to check localStorage before browser language detection
- [x] Updated `LanguageSwitcher.tsx` to save language preference to localStorage
- **Flow**: First visit detects browser language → User changes language → Saved to localStorage → Future visits use saved preference

### Bug Fixes
- [x] Fixed duplicate React keys in `Footer.tsx` (changed from `key={link.path}` to `key={link.labelKey}`)
- [x] Fixed hydration error: removed duplicate `<html>` and `<body>` tags from `app/[lang]/layout.tsx`
  - Root layout (`app/layout.tsx`) now solely responsible for HTML structure
  - Language layout only renders content within `<DictionaryProvider>`

---

## Pending / Future Work

### High Priority
- [ ] Deploy to production hosting
- [ ] Configure Apache `.htaccess` for clean URLs
- [ ] Set up proper 404 handling on Apache
- [ ] Test all pages in production environment
- [ ] Add dynamic `lang` attribute to `<html>` tag (currently static)

### Medium Priority
- [ ] Add more blog posts content
- [ ] Implement contact form backend (email service)
- [ ] Add Google Analytics or similar tracking
- [ ] Add sitemap.xml generation
- [ ] Add robots.txt

### Low Priority / Enhancements
- [ ] Add more team members to data
- [ ] Add more portfolio projects
- [ ] Implement blog search/filtering
- [ ] Add dark mode support
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Add structured data (JSON-LD) for SEO
- [ ] Add Open Graph images for social sharing

---

## Technical Decisions

### Why Next.js SSG over Vite?
- **SEO**: Vite outputs empty `<div id="root">` - search engines see no content
- **SSG**: Next.js pre-renders full HTML with content visible to crawlers
- **Static hosting**: `output: 'export'` generates pure HTML/CSS/JS compatible with Apache

### Why dictionary-based i18n over i18next?
- Simpler for static generation
- No runtime loading of translation files
- Better tree-shaking
- Native Next.js pattern

### Why client-side language detection?
- SSG doesn't support `headers()` for server-side detection
- Browser `navigator.language` provides same functionality
- Instant redirect with loading indicator
- localStorage persistence respects user's manual language choice over browser settings

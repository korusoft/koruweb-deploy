# Koru - Consulting & Development

Corporate website for Koru, a software consulting and development company.

**Live Site**: https://korucode.com

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: HeroUI
- **Animations**: Framer Motion
- **Build**: Static Site Generation (SSG)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static site
npm run build

# Output will be in the 'out/' folder
```

### Preview Production Build

```bash
# Serve the static output locally
npx serve out
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── [lang]/            # Localized pages (en, es)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/i18n/              # Internationalization
│   └── dictionaries/      # Translation files
├── data/                  # Static data
├── hooks/                 # Custom React hooks
├── public/assets/         # Static assets (logos)
└── out/                   # Build output (static files)
```

## Features

- **Multilingual**: English and Spanish support
- **Static Export**: Pre-rendered HTML for SEO
- **Responsive**: Mobile-first design
- **Animations**: Smooth page transitions and scroll animations
- **Accessible**: Semantic HTML and ARIA labels

## Pages

| Page | English | Spanish |
|------|---------|---------|
| Home | `/en/` | `/es/` |
| About | `/en/about/` | `/es/about/` |
| Services | `/en/services/` | `/es/services/` |
| Portfolio | `/en/portfolio/` | `/es/portfolio/` |
| Contact | `/en/contact/` | `/es/contact/` |
| Blog | `/en/blog/` | `/es/blog/` |

## Deployment

The build output (`out/` folder) contains static HTML, CSS, and JavaScript files that can be deployed to any static hosting:

- Apache/Nginx web server
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Apache Configuration

For clean URLs on Apache, add this `.htaccess` to the `out/` folder:

```apache
RewriteEngine On

# Remove trailing slash for files
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Handle directory indexes
DirectoryIndex index.html
```

## Environment

No environment variables required for the static build.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static site |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run build` to verify the build
4. Submit a pull request

## License

Proprietary - All rights reserved.

---

Built with Next.js by Koru - Consulting & Development

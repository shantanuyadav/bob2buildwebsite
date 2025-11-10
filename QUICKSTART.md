# Quick Start Guide

Get Apex Web Studios website running in 2 minutes!

## Option 1: Docker (Recommended)

The fastest way to get started:

```bash
# 1. Start the application
docker compose up

# 2. Open your browser
http://localhost:6000
```

That's it! The website is now running with hot reload enabled.

### Docker Commands

```bash
# Stop the application
docker compose down

# Rebuild and start (after major changes)
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f
```

## Option 2: Local Development

If you prefer running without Docker:

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open your browser
http://localhost:3000
```

## Making Changes

Both methods support hot reload - your changes will automatically reflect in the browser!

### Customize Content

- **Portfolio Projects**: Edit `/lib/portfolio-data.ts`
- **Services**: Edit `/lib/services-data.ts`
- **Team Members**: Edit `/lib/team-data.ts`
- **Styles**: Edit `/app/globals.css` or `/tailwind.config.ts`

### Add New Pages

Create new files in the `/app` directory following Next.js 14 App Router conventions.

## Environment Variables

The `.env.local` file is already configured. Update it if needed:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:6000
NEXT_PUBLIC_SITE_NAME=Apex Web Studios
```

## Production Build

Test the production build locally:

```bash
# Build
npm run build

# Start production server
npm start
```

## Need Help?

- Check the [README.md](README.md) for detailed documentation
- All pages are fully functional out of the box
- Contact form logs to console (integrate with your email service)

## What's Included

- Homepage with hero, services, portfolio, and process sections
- Services page with 4 detailed service offerings
- Portfolio with 6 case studies and filtering
- About page with team profiles and company info
- Contact page with validated form
- Fully responsive mobile-first design
- SEO optimized with proper meta tags
- Accessible (WCAG AA compliant)

Enjoy building with Apex Web Studios!

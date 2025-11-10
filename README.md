# Apex Web Studios - Portfolio Website

A modern, professional web agency portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases web development services, portfolio projects, team information, and includes a fully functional contact form.

![Apex Web Studios](https://placehold.co/1200x630/2563eb/ffffff?text=Apex+Web+Studios)

## Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works beautifully on all devices (320px to 1920px+)
- **SEO Optimized**: Unique meta tags, Open Graph tags, proper heading hierarchy, and semantic HTML
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **Accessible**: WCAG AA compliant with proper ARIA labels, keyboard navigation, and color contrast
- **Docker Support**: Easy deployment with Docker Compose on port 6000
- **Hot Reload**: Development environment with instant updates

## Pages

1. **Homepage** - Hero section, value propositions, services overview, featured portfolio, process section, and CTAs
2. **Services** - Detailed information about 4 core services with features, use cases, and pricing
3. **Portfolio** - Filterable project grid with 6 case studies
4. **Portfolio Case Studies** - Individual detailed case study pages with challenges, solutions, results, and testimonials
5. **About** - Company story, team profiles, core values, and detailed process
6. **Contact** - Fully validated contact form with alternative contact methods and FAQ

## Quick Start

### Prerequisites

- Docker and Docker Compose installed on your system
- OR Node.js 18+ and npm

### Running with Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Start the application:
```bash
docker-compose up
```

3. Open your browser and visit:
```
http://localhost:6000
```

The application will start with hot reload enabled. Any changes you make to the code will automatically refresh in the browser.

### Running Locally (Without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── portfolio/                # Portfolio pages
│   │   ├── [slug]/              # Dynamic case study pages
│   │   └── page.tsx             # Portfolio grid with filtering
│   ├── services/                # Services page
│   ├── layout.tsx               # Root layout with navigation & footer
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles and Tailwind imports
├── components/                   # Reusable React components
│   ├── Navigation.tsx           # Sticky navigation with mobile menu
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section component
│   ├── ServiceCard.tsx          # Service card component
│   ├── PortfolioCard.tsx        # Portfolio project card
│   ├── ContactForm.tsx          # Contact form with validation
│   ├── TeamMember.tsx           # Team member profile card
│   ├── ProcessStep.tsx          # Process step component
│   └── CTA.tsx                  # Call-to-action component
├── lib/                         # Data and utilities
│   ├── portfolio-data.ts        # Portfolio case studies data
│   ├── services-data.ts         # Services data
│   └── team-data.ts             # Team members and company info
├── public/                      # Static assets
│   └── images/                  # Image files
├── docker-compose.yml           # Docker Compose configuration
├── Dockerfile                   # Production Dockerfile
├── Dockerfile.dev               # Development Dockerfile
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Docker Commands

```bash
# Start services
docker-compose up

# Start services in detached mode (background)
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build
```

## Environment Variables

Create a `.env.local` file in the root directory (already included):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:6000
NEXT_PUBLIC_SITE_NAME=Apex Web Studios

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=

# Contact Form (Optional - for future email integration)
CONTACT_EMAIL=hello@apexwebstudios.com
```

## Key Features

### Services

1. **Custom Website Development** - Unique, professionally designed websites
2. **eCommerce Solutions** - Complete online store solutions
3. **Web Applications** - Custom web apps and SaaS platforms
4. **Website Redesign** - Transform outdated websites

### Portfolio

6 diverse case studies across different industries:
- TechFlow SaaS Platform (65% conversion increase)
- ShopEase eCommerce Store ($50k+ monthly revenue)
- LocalMed Medical Clinic (40+ patient inquiries/month)
- FinTrack Financial Dashboard (5,000+ active users)
- GreenLeaf Landscaping (85% lead increase)
- EduTech Learning Platform (3,200+ students enrolled)

### Contact Form

Fully validated form with the following fields:
- Name (required)
- Email (required, validated)
- Phone (optional)
- Company (optional)
- Project Type (dropdown, required)
- Budget Range (dropdown, required)
- Timeline (dropdown, required)
- Message (required, min 20 characters)

## Team

- **Daksh Bhatia** - CEO & Founder
- **Shantanu Kumar** - Head of Business Development
- **Eklavaya Singh Shekhawat** - Marketing Manager

## Design System

### Colors

- **Primary**: Blue shades (#2563eb to #1e3a8a)
- **Secondary**: Slate shades (#f8fafc to #0f172a)
- **Accent**: Purple (#8b5cf6 to #7c3aed)

### Typography

- **Body Font**: Inter
- **Display Font**: Space Grotesk

### Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

## Performance Targets

- Lighthouse Performance: 85+
- Lighthouse Accessibility: 95+
- Largest Contentful Paint (LCP): < 3 seconds
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Docker Deployment

The application is containerized and ready for deployment:

```bash
# Build production image
docker build -t apex-web-studios .

# Run production container
docker run -p 6000:3000 apex-web-studios
```

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

This Next.js application can be deployed to:
- Netlify
- AWS (ECS, Fargate, EC2)
- DigitalOcean App Platform
- Railway
- Render

## Customization

### Adding Portfolio Projects

Edit `/lib/portfolio-data.ts` to add new case studies:

```typescript
{
  id: '7',
  slug: 'your-project-slug',
  title: 'Your Project Title',
  client: 'Client Name',
  industry: 'Industry',
  projectType: 'Project Type',
  // ... rest of the data
}
```

### Modifying Services

Edit `/lib/services-data.ts` to update or add services.

### Updating Team Members

Edit `/lib/team-data.ts` to modify team information.

### Styling Changes

All styles are in Tailwind CSS. Update:
- Global styles: `/app/globals.css`
- Theme configuration: `/tailwind.config.ts`

## Contact Form Integration

The contact form currently logs submissions to the console. To integrate with an email service:

1. Create an API route at `/app/api/contact/route.ts`
2. Integrate with your preferred email service (SendGrid, Resend, etc.)
3. Update the form submission handler in `/components/ContactForm.tsx`

Example:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## Troubleshooting

### Docker Issues

**Port already in use:**
```bash
# Change the port in docker-compose.yml
ports:
  - "6001:3000"  # Use a different host port
```

**Hot reload not working:**
Ensure `WATCHPACK_POLLING=true` is set in docker-compose.yml.

### Build Issues

**Module not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## License

This project is proprietary and confidential.

## Support

For questions or issues, please contact:
- Email: hello@apexwebstudios.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Apex Web Studios

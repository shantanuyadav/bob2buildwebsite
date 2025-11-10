# bob2build Website Documentation

Welcome to the bob2build website documentation. This directory contains comprehensive guides for maintaining and extending the website.

---

## Available Documentation

### 1. Dark Mode Implementation

**[DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)** - Comprehensive Guide

A complete guide covering:
- Dark mode color system and palette
- Component-by-component implementation details
- Best practices and patterns
- Accessibility considerations
- Testing guidelines
- Maintenance procedures
- Future enhancements

**Who should read this:**
- Developers implementing new features
- Team members maintaining existing components
- Anyone needing to understand the dark mode architecture

---

### 2. Dark Mode Quick Reference

**[DARK_MODE_QUICK_GUIDE.md](./DARK_MODE_QUICK_GUIDE.md)** - Quick Start Guide

A condensed reference for:
- Essential color patterns
- Common component templates
- Quick lookup tables
- Common mistakes to avoid

**Who should read this:**
- Developers needing quick reference while coding
- Team members familiar with the system who need reminders
- Anyone wanting a quick overview before diving into details

---

## Quick Links

### Getting Started
1. New to the project? Start with [DARK_MODE_QUICK_GUIDE.md](./DARK_MODE_QUICK_GUIDE.md)
2. Need detailed information? See [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)

### Common Tasks

**Adding a new component:**
1. Review the common patterns in [DARK_MODE_QUICK_GUIDE.md](./DARK_MODE_QUICK_GUIDE.md)
2. Reference similar components in [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)
3. Follow the testing checklist before committing

**Updating existing components:**
1. Check the component section in [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)
2. Verify contrast ratios using the guidelines
3. Test in actual dark mode

**Troubleshooting dark mode issues:**
1. Check the "Common Mistakes" section in [DARK_MODE_QUICK_GUIDE.md](./DARK_MODE_QUICK_GUIDE.md)
2. Review the "Best Practices" in [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)
3. Use the testing checklist

---

## Project Overview

### Website Structure

```
bob2build/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page (Phone: +91 8949752854)
│   ├── portfolio/         # Portfolio page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ContactForm.tsx
│   ├── PortfolioCard.tsx
│   ├── ProcessStep.tsx
│   └── TeamMember.tsx
├── docs/                  # Documentation (you are here)
│   ├── README.md
│   ├── DARK_MODE_IMPLEMENTATION.md
│   └── DARK_MODE_QUICK_GUIDE.md
└── tailwind.config.ts     # Theme configuration
```

### Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom dark mode
- **Language:** TypeScript
- **Forms:** React Hook Form + Zod validation

---

## Key Features

### Dark Mode System
- Class-based dark mode (`dark:` prefix)
- Custom color palette with semantic naming
- WCAG AA compliant contrast ratios
- Comprehensive component coverage
- Smooth transitions and animations

### Color System
- **Backgrounds:** 3-tier system (primary, secondary, tertiary)
- **Text:** 3 levels of hierarchy (primary, secondary, tertiary)
- **Borders:** Unified dark border color
- **Accents:** Brand colors optimized for both modes

### Components
- All components fully support dark mode
- Consistent styling patterns
- Accessible focus states
- Proper hover interactions

---

## Recent Updates

### November 10, 2025

**Dark Mode Improvements**
- Enhanced all page headers with dark mode gradients
- Updated all components with proper dark mode styling
- Improved icon background opacity (30% to 20%)
- Added comprehensive form dark mode support
- Enhanced card components with proper shadows and borders

**Contact Information Update**
- Updated phone number to: **+91 8949752854**
- Location: `/app/contact/page.tsx`

**Documentation**
- Created comprehensive dark mode documentation
- Added quick reference guide
- Documented all patterns and best practices

---

## Contributing

### Before Making Changes

1. **Read the relevant documentation**
   - Quick changes? See [DARK_MODE_QUICK_GUIDE.md](./DARK_MODE_QUICK_GUIDE.md)
   - Major changes? Read [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)

2. **Follow established patterns**
   - Use semantic color names from theme
   - Include dark mode variants for all visible elements
   - Maintain accessibility standards

3. **Test thoroughly**
   - Test in actual dark mode
   - Verify contrast ratios
   - Check responsive behavior
   - Test interactive states

### Code Review Checklist

Before submitting changes:

- [ ] All text has dark mode colors
- [ ] All backgrounds have dark variants
- [ ] Borders include dark:border-dark-border
- [ ] Shadows use reduced opacity in dark mode
- [ ] Focus states work in both modes
- [ ] Hover states work in both modes
- [ ] Contrast ratios meet WCAG AA
- [ ] Components follow established patterns
- [ ] Documentation updated if needed

---

## Support

### Contact Information

- **Email:** hello@bob2build.com
- **Phone:** +91 8949752854

### Resources

- [Tailwind CSS Dark Mode Docs](https://tailwindcss.com/docs/dark-mode)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Next.js Documentation](https://nextjs.org/docs)

---

## License

Copyright 2025 bob2build. All rights reserved.

---

*Documentation maintained by the bob2build development team*
*Last updated: November 10, 2025*

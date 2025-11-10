# bob2build Website - Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 20.x or later
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Dark Mode Features

### How to Use Dark Mode

1. **Toggle Button**: Click the sun/moon icon in the navigation bar
2. **Automatic Detection**: The site automatically detects your system preference
3. **Persistent**: Your theme choice is saved in localStorage

### Testing Dark Mode

- **Toggle**: Click the theme toggle button in the top navigation
- **System Preference**: Change your OS dark mode settings
- **Direct URL**: Both themes work on all pages

---

## Key URLs

- **Home**: `/`
- **Services**: `/services`
- **Portfolio**: `/portfolio`
- **About**: `/about`
- **Contact**: `/contact`

---

## Customization

### Changing Colors

Edit `/tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  dark: {
    bg: {
      primary: '#0a0e1a',  // Main dark background
      // ... other dark colors
    }
  }
}
```

### Adjusting Theme Behavior

Edit `/lib/ThemeContext.tsx` to modify:
- Default theme
- Storage method
- Transition timing

---

## File Structure

```
bob2buildwebsite/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx     # Header with theme toggle
│   ├── Footer.tsx         # Footer
│   ├── ThemeToggle.tsx    # Theme switcher button
│   └── ...               # Other components
├── lib/                   # Utilities and data
│   ├── ThemeContext.tsx   # Theme state management
│   └── services-data.ts   # Service pricing data
└── tailwind.config.ts     # Tailwind + dark mode config
```

---

## Troubleshooting

### Theme Not Persisting
- Check browser localStorage permissions
- Clear localStorage and reload

### Dark Mode Not Working
- Ensure JavaScript is enabled
- Check that the `dark` class is applied to `<html>`
- Verify Tailwind config has `darkMode: 'class'`

### Styling Issues
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind CSS is properly configured

---

## Support

For questions or issues:
- Email: hello@bob2build.com
- Check `/IMPLEMENTATION_REPORT.md` for detailed documentation

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Deploy the .next directory and public folder
```

---

**Last Updated:** November 10, 2025

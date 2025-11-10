# Dark Mode Quick Reference Guide

This is a quick-start guide for developers working with dark mode on the bob2build website. For comprehensive documentation, see [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md).

---

## Quick Start

### 1. The Essential Pattern

Every visible element needs dark mode variants:

```tsx
<div className="bg-white dark:bg-dark-bg-primary text-secondary-900 dark:text-dark-text-primary">
  {/* Content */}
</div>
```

### 2. Core Colors You'll Use 90% of the Time

#### Backgrounds
```tsx
bg-white dark:bg-dark-bg-primary       // Main page background
bg-secondary-50 dark:bg-dark-bg-secondary  // Alternating sections
bg-white dark:bg-dark-bg-tertiary      // Cards and elevated elements
```

#### Text
```tsx
text-secondary-900 dark:text-dark-text-primary    // Headings
text-secondary-600 dark:text-dark-text-secondary  // Body text
text-secondary-500 dark:text-dark-text-tertiary   // Metadata
```

#### Borders
```tsx
border-secondary-100 dark:border-dark-border
```

---

## Common Component Patterns

### Page Section
```tsx
<section className="section-padding bg-white dark:bg-dark-bg-primary">
  <div className="container-custom">
    <h2 className="heading-lg text-secondary-900 dark:text-dark-text-primary mb-4">
      Section Title
    </h2>
    <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
      Section description
    </p>
  </div>
</section>
```

### Card
```tsx
<div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg dark:shadow-primary-900/10 border border-secondary-100 dark:border-dark-border">
  <h3 className="text-xl font-bold text-secondary-900 dark:text-dark-text-primary mb-2">
    Card Title
  </h3>
  <p className="text-body text-secondary-600 dark:text-dark-text-secondary">
    Card content
  </p>
</div>
```

### Form Input
```tsx
<input
  className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
  placeholder="Enter text"
/>
```

### Button
```tsx
<button className="btn-primary">
  {/* Button styling includes dark mode by default */}
  Click Me
</button>
```

### Link
```tsx
<a className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
  Click Here
</a>
```

### Icon with Background
```tsx
<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400">
    {/* Icon */}
  </svg>
</div>
```

---

## Color Cheat Sheet

### Background Colors
| Usage | Light | Dark |
|-------|-------|------|
| Main page | `bg-white` | `dark:bg-dark-bg-primary` |
| Alt section | `bg-secondary-50` | `dark:bg-dark-bg-secondary` |
| Cards | `bg-white` | `dark:bg-dark-bg-tertiary` |
| Form inputs | `bg-white` | `dark:bg-dark-bg-secondary` |

### Text Colors
| Usage | Light | Dark |
|-------|-------|------|
| Headings | `text-secondary-900` | `dark:text-dark-text-primary` |
| Body | `text-secondary-600` | `dark:text-dark-text-secondary` |
| Metadata | `text-secondary-500` | `dark:text-dark-text-tertiary` |
| Links | `text-primary-600` | `dark:text-primary-400` |

### Accent Colors (Icons, Highlights)
| Color | Light | Dark |
|-------|-------|------|
| Primary | `text-primary-600`, `bg-primary-100` | `dark:text-primary-400`, `dark:bg-primary-900/20` |
| Accent | `text-accent-600`, `bg-accent-100` | `dark:text-accent-400`, `dark:bg-accent-900/20` |
| Green | `text-green-600`, `bg-green-100` | `dark:text-green-400`, `dark:bg-green-900/20` |

### Border & Shadows
```tsx
border border-secondary-100 dark:border-dark-border
shadow-lg dark:shadow-primary-900/10
hover:shadow-xl dark:hover:shadow-primary-900/20
```

---

## Gradients

### Page Header Gradient
```tsx
className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary"
```

### Special Section Gradient
```tsx
className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-tertiary"
```

### Gradient Circle (Process Steps)
```tsx
className="bg-gradient-to-br from-primary-500 to-accent-500 dark:from-primary-600 dark:to-accent-600"
```

---

## Focus States

Always include focus states for accessibility:

```tsx
focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent
```

---

## Status Messages

### Success
```tsx
<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400 px-4 py-3 rounded-lg">
  Success message
</div>
```

### Error
```tsx
<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-400 px-4 py-3 rounded-lg">
  Error message
</div>
```

### Error Input Border
```tsx
border-red-500 dark:border-red-400
```

---

## Testing Checklist

Quick checks before committing:

- [ ] All text is readable in dark mode
- [ ] All backgrounds have dark variants
- [ ] All borders have dark variants
- [ ] Shadows use reduced opacity (`/10` or `/20`)
- [ ] Links have hover states in both modes
- [ ] Form inputs have focus states in both modes
- [ ] Icon backgrounds use 20% opacity (`/20`)

---

## Common Mistakes to Avoid

### ❌ DON'T: Forget dark mode variants
```tsx
<div className="bg-white text-secondary-900">
```

### ✅ DO: Always include dark mode
```tsx
<div className="bg-white dark:bg-dark-bg-primary text-secondary-900 dark:text-dark-text-primary">
```

---

### ❌ DON'T: Use same shadow intensity
```tsx
<div className="shadow-lg">
```

### ✅ DO: Reduce opacity for dark mode
```tsx
<div className="shadow-lg dark:shadow-primary-900/10">
```

---

### ❌ DON'T: Use higher opacity for icon backgrounds
```tsx
<div className="bg-primary-100 dark:bg-primary-900/30">
```

### ✅ DO: Use 20% opacity
```tsx
<div className="bg-primary-100 dark:bg-primary-900/20">
```

---

### ❌ DON'T: Forget hover states
```tsx
<a className="text-primary-600 hover:text-primary-700">
```

### ✅ DO: Include dark hover states
```tsx
<a className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
```

---

## Need More Info?

See the comprehensive documentation: [DARK_MODE_IMPLEMENTATION.md](./DARK_MODE_IMPLEMENTATION.md)

---

## Contact

- **Email:** hello@bob2build.com
- **Phone:** +91 8949752854

---

*Last updated: November 10, 2025*

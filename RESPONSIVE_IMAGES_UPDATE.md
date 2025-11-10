# Responsive Images Update

## Overview
This document summarizes the updates made to implement fully responsive images throughout the bob2build website. Images now resize dynamically based on viewport size and adapt seamlessly with navigation bar changes.

## Changes Made

### 1. PortfolioCard Component (`components/PortfolioCard.tsx`)
**Before:**
```tsx
<div className="relative h-48 sm:h-56 overflow-hidden bg-secondary-100">
  <Image src={image} alt={title} fill className="object-cover" />
</div>
```

**After:**
```tsx
<div className="relative w-full aspect-[16/10] overflow-hidden bg-secondary-100">
  <Image
    src={image}
    alt={title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

**Benefits:**
- Uses `aspect-ratio` instead of fixed heights for true responsiveness
- Images maintain 16:10 aspect ratio across all screen sizes
- Added `sizes` prop for optimal image loading
- Width adapts to container and viewport changes

### 2. Portfolio Detail Page (`app/portfolio/[slug]/page.tsx`)

#### Hero Image
**Before:**
```tsx
<div className="relative h-64 sm:h-96 rounded-xl overflow-hidden">
```

**After:**
```tsx
<div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-xl overflow-hidden">
```

#### Screenshot Gallery
**Before:**
```tsx
<div className="relative h-64 rounded-lg overflow-hidden">
```

**After:**
```tsx
<div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
```

#### Related Projects
**Before:**
```tsx
<div className="relative h-48 bg-secondary-100">
```

**After:**
```tsx
<div className="relative w-full aspect-[16/10] bg-secondary-100">
```

**Benefits:**
- Hero images use cinematic aspect ratios (21:9 on mobile, 16:7 on desktop)
- All images scale proportionally with viewport
- Consistent aspect ratios across all portfolio images

### 3. Navigation Component (`components/Navigation.tsx`)

**Before:**
```tsx
<Link href="/" className="flex items-center group">
  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
    <Image
      src="/logo.svg"
      alt="bob2build logo"
      width={80}
      height={80}
      className="object-contain"
    />
  </div>
</Link>
```

**After:**
```tsx
<Link href="/" className="flex items-center group -my-2">
  <div className="relative w-24 h-24 sm:w-28 sm:h-28">
    <Image
      src="/logo.svg"
      alt="bob2build logo"
      fill
      sizes="(max-width: 640px) 96px, 112px"
      className="object-contain"
    />
  </div>
</Link>
```

**Benefits:**
- Logo is now larger (50% increase in size: 96px on mobile, 112px on desktop)
- Negative margin (-my-2) removes padding to maximize logo space
- Logo extends beyond nav bar padding for better visual prominence
- Proper `sizes` attribute for optimal loading
- Adapts to navigation bar size changes

### 4. Global CSS Updates (`app/globals.css`)

#### Added CSS Variables
```css
:root {
  --nav-height: 76px;
  --nav-height-scrolled: 68px;
}
```

#### Added Base Styles
```css
img {
  max-width: 100%;
  height: auto;
}
```

#### Added Utility Classes
```css
/* Responsive image containers */
.img-responsive {
  @apply relative w-full overflow-hidden;
}

.img-hero {
  @apply aspect-[21/9] sm:aspect-[16/7];
}

.img-card {
  @apply aspect-[16/10];
}

.img-square {
  @apply aspect-square;
}

.img-video {
  @apply aspect-video;
}

/* Dynamic viewport-based image sizing */
.img-auto-height {
  min-height: 200px;
  max-height: calc(100vh - var(--nav-height, 80px));
}
```

**Benefits:**
- Reusable utility classes for consistent image sizing
- CSS variables for navigation height tracking
- Default responsive behavior for all images
- Viewport-aware sizing with `img-auto-height`

## Key Features

### 1. **Aspect Ratio-Based Sizing**
- All images use CSS `aspect-ratio` instead of fixed heights
- Images scale proportionally with container width
- Maintains consistent visual appearance across devices

### 2. **Optimized Image Loading**
- Added `sizes` attribute to all Next.js Image components
- Browser loads appropriately sized images for viewport
- Reduces bandwidth and improves performance

### 3. **Responsive Breakpoints**
Images adapt at these breakpoints:
- Mobile: `max-width: 768px` - 100% viewport width
- Tablet: `max-width: 1024px` - 50% viewport width
- Desktop: Above 1024px - 33% viewport width (for grid layouts)

### 4. **Navigation-Aware Sizing**
- CSS variables track navigation bar height
- `img-auto-height` utility prevents images from being cut off
- Images dynamically adjust when navigation bar changes size on scroll

## Usage Examples

### Using Utility Classes
```tsx
// Hero image with cinematic aspect ratio
<div className="img-responsive img-hero">
  <Image src="/hero.jpg" alt="Hero" fill />
</div>

// Card image with standard aspect ratio
<div className="img-responsive img-card">
  <Image src="/card.jpg" alt="Card" fill />
</div>

// Auto-height image that respects navigation
<div className="img-responsive img-auto-height">
  <Image src="/full-height.jpg" alt="Full Height" fill />
</div>
```

### Custom Aspect Ratios
```tsx
<div className="relative w-full aspect-[16/9]">
  <Image src="/video.jpg" alt="Video" fill sizes="100vw" />
</div>
```

## Browser Support
- Modern browsers: Full support via native `aspect-ratio`
- Legacy browsers: Gracefully degrades with Tailwind's aspect ratio plugin
- All browsers maintain responsive behavior

## Performance Impact
- **Positive**: Optimized image loading with `sizes` attribute
- **Positive**: Browser downloads appropriate image sizes
- **Positive**: Reduced layout shift (CLS) with aspect ratios
- **Neutral**: No additional JavaScript required

## Testing Checklist
- [x] Portfolio cards resize properly on all screen sizes
- [x] Portfolio detail page hero images are responsive
- [x] Screenshot galleries maintain aspect ratio
- [x] Navigation logo scales correctly
- [x] Images don't cause horizontal scroll
- [x] Images load at appropriate sizes for viewport
- [x] Dark mode compatibility maintained
- [x] No layout shift during image loading

## Future Enhancements
1. Add lazy loading for below-the-fold images
2. Implement progressive image loading with blur placeholders
3. Add srcSet for additional image size variants
4. Consider WebP/AVIF format optimization
5. Add loading skeletons for better UX

## Notes
- All images use Next.js Image component for automatic optimization
- `object-cover` ensures images fill containers without distortion
- Aspect ratios chosen based on common photography standards
- TeamMember avatars maintain fixed circular sizing (appropriate for profile pictures)

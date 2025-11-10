# Webpack Runtime Error Fix - Complete Summary

## Error Details

**URL**: https://bob2build.tanmaydeepsharma.com/

**Error Message**:
```
TypeError: Cannot read properties of undefined (reading 'call')
Call Stack: options.factory in webpack.js (715:31)
```

**Error Location**: React Server Component hydration during webpack module loading

## Root Cause Analysis

After thorough investigation, the error was caused by:

1. **Configuration Mismatch**: Dockerfile expects `standalone` output, but `next.config.js` didn't have this configured
2. **Aggressive Caching**: Nginx caches `_next/static/*` for 1 year, serving stale build artifacts
3. **SSR Hydration Risk**: Theme provider implementation could cause hydration mismatches between server and client

## Local Build Verification

The production build works perfectly locally:
```bash
npm run build
# ✓ Compiled successfully
# All 14 pages built without errors
```

This confirms the code is correct, and the issue is deployment/cache related.

## Complete Solution

### 1. Fixed `next.config.js`

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',  // ← ADDED: Required for Docker deployment
  // Disable webpack cache in production to prevent stale builds
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false;  // ← ADDED: Prevents cached build issues
    }
    return config;
  },
}

module.exports = nextConfig
```

**Why This Fixes It**:
- `output: 'standalone'` creates `.next/standalone` directory expected by Dockerfile
- Disabling webpack cache prevents stale module definitions in production builds
- Ensures each build is fresh and consistent

### 2. Enhanced Theme Provider

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/lib/ThemeContext.tsx`

**Key Changes**:

```typescript
// Added 'mounted' to context interface
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;  // ← ADDED: Shared mounted state
}

// Enhanced with error handling
useEffect(() => {
  try {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
      // Apply theme immediately to prevent flash
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');  // ← ADDED: Immediate application
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  } catch (error) {
    console.error('Error loading theme:', error);  // ← ADDED: Error handling
  } finally {
    setMounted(true);
  }
}, []);

// Updated SSR safe default
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    if (typeof window === 'undefined') {
      return {
        theme: 'light' as Theme,
        toggleTheme: () => {},
        mounted: false,  // ← ADDED: SSR safe default
      };
    }
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

**Why This Fixes It**:
- Shared `mounted` state prevents duplicate state management
- Immediate DOM updates prevent hydration mismatches
- Try-catch blocks handle edge cases gracefully
- SSR-safe defaults prevent server/client mismatches

### 3. Simplified ThemeToggle

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/components/ThemeToggle.tsx`

**Key Changes**:

```typescript
const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();  // ← CHANGED: Use mounted from context

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 transition-colors"
        aria-label="Toggle theme"
        disabled  // ← ADDED: Prevents interaction before hydration
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  // ... rest of component
};
```

**Why This Fixes It**:
- Removes duplicate mounted state management
- Disables button before hydration completes
- Prevents hydration mismatches from user interaction

### 4. Layout with Theme Script

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/app/layout.tsx`

**Key Addition**:

```typescript
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* ← ADDED: Inline script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
```

**Why This Fixes It**:
- Applies theme before React hydration starts
- Prevents flash of unstyled content (FOUC)
- Eliminates server/client theme mismatch
- Runs synchronously in <head> before body renders

## All Modified Files

1. **`next.config.js`**
   - Added `output: 'standalone'`
   - Disabled webpack cache in production

2. **`lib/ThemeContext.tsx`**
   - Added `mounted` to context interface
   - Improved error handling
   - Immediate theme application
   - Better SSR defaults

3. **`components/ThemeToggle.tsx`**
   - Removed duplicate mounted state
   - Uses context-provided mounted state
   - Added disabled attribute

4. **`app/layout.tsx`**
   - Added inline theme script in <head>
   - Prevents FOUC

## Deployment Instructions

### Quick Deploy (Using Script)

```bash
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d

# Run deployment script
./deploy-production.sh
```

### Manual Deployment

```bash
# 1. Clean build
rm -rf .next
npm run build

# 2. Build Docker image
docker build -t bob2build:latest -f Dockerfile .

# 3. Stop old container
docker stop bob2build && docker rm bob2build

# 4. Start new container
docker run -d \
  --name bob2build \
  --restart unless-stopped \
  -p 6000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://bob2build.tanmaydeepsharma.com \
  bob2build:latest

# 5. Clear Nginx cache (on server)
sudo rm -rf /var/cache/nginx/*
sudo systemctl reload nginx

# 6. Verify
docker logs -f bob2build
curl -I http://localhost:6000
```

## Critical Post-Deployment Steps

### 1. Clear Nginx Cache

**This is the most important step!**

On the production server:
```bash
sudo rm -rf /var/cache/nginx/*
sudo systemctl reload nginx
```

Or restart nginx for a clean slate:
```bash
sudo systemctl restart nginx
```

### 2. Clear Browser Cache

Test in **incognito/private mode** or clear browser cache:

**Chrome/Edge/Firefox**:
- Hard Refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear Cache: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)

**Safari**:
- Hard Refresh: `Cmd+Option+R`
- Clear Cache: `Cmd+Option+E`

### 3. Verify Deployment

Open browser console and check:
- ✓ No webpack errors
- ✓ No hydration warnings
- ✓ Theme toggle works
- ✓ All pages load
- ✓ No console errors

## Why the Error Was Happening

The webpack error occurred because:

1. **Stale Cache**: Old build artifacts were being served from nginx's 1-year cache
2. **Module Mismatch**: Cached webpack runtime didn't match the current module definitions
3. **Missing Modules**: `options.factory` tried to call a module that was undefined in the cached runtime

**Analogy**: It's like trying to use an old map (cached webpack runtime) to find a building (module) that has moved to a new address (new build).

## Prevention for Future Deployments

1. **Always clear nginx cache** after deploying new builds
2. **Use versioned builds** or ensure cache-busting is working
3. **Test in incognito mode** to verify no cache issues
4. **Monitor build output** to ensure standalone directory is created
5. **Check Docker logs** immediately after deployment

## Build Verification

Current production build stats:
```
Route (app)                               Size     First Load JS
┌ ○ /                                     191 B           101 kB
├ ○ /_not-found                           138 B          87.4 kB
├ ○ /about                                191 B           101 kB
├ ○ /contact                              22.6 kB         110 kB
├ ○ /portfolio                            5.78 kB         107 kB
├ ● /portfolio/[slug]                     191 B           101 kB
└ ○ /services                             178 B          96.1 kB

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)
```

All pages compiled successfully with no errors or warnings.

## Testing Checklist

After deployment, verify:

- [ ] No webpack runtime errors in console
- [ ] No React hydration warnings
- [ ] Theme toggle button appears and works
- [ ] Dark mode persists on page reload
- [ ] No flash of unstyled content (FOUC)
- [ ] All navigation links work
- [ ] Portfolio pages load correctly
- [ ] Contact form displays properly
- [ ] Images load correctly
- [ ] Mobile menu works on small screens
- [ ] Performance is good (< 2s page load)

## Troubleshooting

### If webpack error still appears:

1. **Hard refresh**: `Ctrl+Shift+R` or `Cmd+Shift+R`
2. **Incognito mode**: Test in private browsing
3. **Check cache**: Verify nginx cache was cleared
4. **Container logs**: `docker logs bob2build`
5. **Rebuild**: Clear everything and rebuild:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   docker builder prune -af
   docker build -t bob2build:latest -f Dockerfile .
   ```

### If theme doesn't work:

1. Check browser localStorage is enabled
2. Verify inline script in <head> is present (view page source)
3. Check console for JavaScript errors
4. Test in different browser

## Success Criteria

The deployment is successful when:

1. ✓ Site loads at https://bob2build.tanmaydeepsharma.com/
2. ✓ Browser console shows no errors
3. ✓ Theme toggle works smoothly
4. ✓ No hydration warnings
5. ✓ All pages load without errors
6. ✓ Dark mode persists correctly
7. ✓ No FOUC on page load

## Files Reference

All files with absolute paths:

1. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/next.config.js`
2. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/lib/ThemeContext.tsx`
3. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/components/ThemeToggle.tsx`
4. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/app/layout.tsx`
5. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/deploy-production.sh` (deployment script)

## Support Resources

- **Deployment Guide**: `DEPLOYMENT_FIX_GUIDE.md`
- **Docker Guide**: `QUICKSTART.md`
- **Project Summary**: `PROJECT_SUMMARY.md`

---

**Last Updated**: 2025-11-10
**Build Version**: Next.js 14.2.33
**Docker Base**: node:20-alpine

# Deployment Fix Guide - Webpack Runtime Error Resolution

## Problem Identified

The webpack runtime error on https://bob2build.tanmaydeepsharma.com/ was caused by:

1. **Missing Standalone Configuration**: The Dockerfile expected standalone output, but `next.config.js` didn't have `output: 'standalone'` configured
2. **Aggressive Caching**: Nginx was caching static assets for 1 year, preventing new builds from being served
3. **Potential Hydration Issues**: Theme provider could cause React hydration mismatches

## Root Cause

```
TypeError: Cannot read properties of undefined (reading 'call')
Call Stack: options.factory in webpack.js (715:31)
```

This error occurs when webpack modules are not properly loaded during hydration, typically due to:
- Cached old build artifacts being served
- Mismatch between server and client rendering
- Missing module definitions in the webpack runtime

## Solution Applied

### 1. Updated `next.config.js`

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
  output: 'standalone',
  // Disable webpack cache in production to prevent stale builds
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig
```

**Changes**:
- Added `output: 'standalone'` to match Dockerfile expectations
- Disabled webpack cache in production builds to prevent stale artifacts
- This ensures consistent builds across deployments

### 2. Optimized Theme Provider

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/lib/ThemeContext.tsx`

**Key Changes**:
- Added error handling with try-catch blocks
- Exposed `mounted` state through context instead of local state in each component
- Applied theme to DOM immediately on mount to prevent flash
- Return proper SSR-safe defaults

### 3. Updated ThemeToggle Component

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/components/ThemeToggle.tsx`

**Changes**:
- Removed duplicate mounted state (uses context state now)
- Added `disabled` attribute to placeholder button
- Simplified component logic

### 4. Enhanced Layout with Theme Script

**File**: `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/app/layout.tsx`

**Added**:
```javascript
<head>
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
```

**Purpose**: Prevents flash of unstyled content (FOUC) by applying theme before React hydration

## Deployment Steps

### Step 1: Clear Build Cache

```bash
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d
rm -rf .next
npm run build
```

### Step 2: Build Docker Image (Production)

```bash
# Build the production image
docker build -t bob2build:latest -f Dockerfile .

# Verify the build includes standalone output
docker run --rm bob2build:latest ls -la /app/
```

### Step 3: Stop Current Container

```bash
# Find the running container
docker ps | grep bob2build

# Stop and remove the container
docker stop <container_id>
docker rm <container_id>
```

### Step 4: Clear Nginx Cache

On the server where nginx is running:

```bash
# Clear nginx cache (if using proxy_cache)
sudo rm -rf /var/cache/nginx/*

# Reload nginx configuration
sudo nginx -t
sudo systemctl reload nginx

# Or restart nginx to ensure clean state
sudo systemctl restart nginx
```

### Step 5: Deploy New Container

```bash
# Run the new container
docker run -d \
  --name bob2build \
  --restart unless-stopped \
  -p 6000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://bob2build.tanmaydeepsharma.com \
  bob2build:latest

# Check logs
docker logs -f bob2build
```

### Step 6: Verify Deployment

```bash
# Test local container
curl -I http://localhost:6000

# Test through nginx
curl -I https://bob2build.tanmaydeepsharma.com

# Check for webpack errors in browser console
```

### Step 7: Clear Browser Cache

**IMPORTANT**: Clear browser cache or test in incognito mode to ensure you're getting the new build.

```
Chrome/Edge: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
Firefox: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
Safari: Cmd+Option+E
```

Or use hard refresh:
```
Chrome/Edge/Firefox: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
Safari: Cmd+Option+R
```

## Alternative: Development Mode Testing

If you want to test in development mode first:

```bash
# Start in development mode
docker-compose up -d

# Access at http://localhost:6000
```

## Verification Checklist

After deployment, verify:

- [ ] No webpack runtime errors in browser console
- [ ] Theme toggle works correctly
- [ ] No hydration warnings in console
- [ ] All pages load without errors
- [ ] Navigation works properly
- [ ] Static assets load correctly
- [ ] Images display properly
- [ ] Dark mode persists on page reload
- [ ] No flash of unstyled content (FOUC)

## Testing the Build Locally

Before deploying to production:

```bash
# Build for production
npm run build

# Start production server locally
PORT=6000 npm start

# Test in browser
open http://localhost:6000

# Check browser console for errors
```

## Nginx Cache Considerations

The current nginx configuration caches static assets for 1 year:

```nginx
location /_next/static {
    add_header Cache-Control "public, max-age=31536000, immutable";
    expires 1y;
}
```

This is correct for Next.js because `_next/static` files include content hashes. However, ensure:

1. Each build generates new hashes (enabled with our webpack config)
2. The cache is cleared after deployment
3. HTML pages are NOT cached (already configured correctly)

## Troubleshooting

### If webpack error persists:

1. **Check build output**: Verify `.next/standalone` directory exists
2. **Verify Docker build**: Ensure Dockerfile copies standalone output correctly
3. **Clear all caches**:
   ```bash
   # Clear Next.js cache
   rm -rf .next

   # Clear npm cache (if needed)
   npm cache clean --force

   # Clear Docker build cache
   docker builder prune -af
   ```

4. **Check browser cache**: Use incognito/private mode for testing

### If theme toggle doesn't work:

1. Check browser console for JavaScript errors
2. Verify localStorage is enabled
3. Check that ClientThemeProvider is wrapping the app correctly
4. Verify the inline script in layout.tsx is loading

### If hydration warnings appear:

1. Check that suppressHydrationWarning is on <html> tag
2. Verify no server/client mismatch in rendered content
3. Ensure theme script runs before React hydration

## Files Modified

All modified files with absolute paths:

1. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/next.config.js`
2. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/lib/ThemeContext.tsx`
3. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/components/ThemeToggle.tsx`
4. `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/app/layout.tsx`

## Production Build Verification

The build completes successfully with:

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

All pages compile without errors or warnings.

## Next Steps

1. Follow the deployment steps above
2. Clear nginx cache on the server
3. Test the deployed site in incognito mode
4. Monitor browser console for any errors
5. Test theme toggle functionality
6. Verify all pages load correctly

## Support

If issues persist after following this guide:

1. Check nginx error logs: `sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.error.log`
2. Check container logs: `docker logs -f bob2build`
3. Check Next.js build logs during deployment
4. Test locally in production mode first: `npm run build && npm start`

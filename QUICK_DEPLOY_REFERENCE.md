# Quick Deployment Reference Card

## The Problem
```
TypeError: Cannot read properties of undefined (reading 'call')
in webpack.js (715:31)
```

## The Fix (3 Steps)

### 1. Deploy New Build
```bash
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d
./deploy-production.sh
```

### 2. Clear Nginx Cache (CRITICAL!)
```bash
sudo rm -rf /var/cache/nginx/*
sudo systemctl reload nginx
```

### 3. Test in Incognito Mode
```
Open: https://bob2build.tanmaydeepsharma.com/
Check: Browser console for errors
```

## What Changed

### next.config.js
```javascript
output: 'standalone',        // ← Added for Docker
webpack: (config, { dev }) => {
  if (!dev) config.cache = false;  // ← Prevents stale builds
  return config;
}
```

### lib/ThemeContext.tsx
- Added error handling
- Immediate theme application
- Shared mounted state

### components/ThemeToggle.tsx
- Simplified to use context mounted state
- Added disabled attribute

### app/layout.tsx
- Added inline theme script to prevent FOUC
- Applies theme before React hydration

## Why It Happened

1. Nginx cached old build artifacts for 1 year
2. Webpack runtime couldn't find modules from new build
3. Theme provider needed hydration optimization

## Verification Checklist

- [ ] No webpack errors in console
- [ ] Theme toggle works
- [ ] No hydration warnings
- [ ] All pages load correctly
- [ ] Dark mode persists on reload

## Quick Troubleshooting

**Still seeing error?**
1. Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
2. Try incognito mode
3. Check: `docker logs bob2build`
4. Verify nginx cache was cleared

**Theme not working?**
1. Check console for JS errors
2. View page source - verify inline script exists
3. Test localStorage: `localStorage.getItem('theme')`

## Files Modified

1. `/root/.../next.config.js` - Added standalone output, disabled cache
2. `/root/.../lib/ThemeContext.tsx` - Enhanced error handling
3. `/root/.../components/ThemeToggle.tsx` - Simplified state
4. `/root/.../app/layout.tsx` - Added theme script

## One-Liner Deploy

```bash
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d && ./deploy-production.sh && echo "Now clear nginx cache!"
```

## Docker Commands

```bash
# View logs
docker logs -f bob2build

# Restart container
docker restart bob2build

# Check status
docker ps | grep bob2build

# Shell into container
docker exec -it bob2build sh
```

## Success Indicators

Local build output:
```
✓ Compiled successfully
✓ Generating static pages (14/14)
○ (Static) prerendered as static content
```

Container running:
```bash
$ docker ps
CONTAINER ID   IMAGE              STATUS         PORTS
abc123def456   bob2build:latest   Up 2 minutes   0.0.0.0:6000->3000/tcp
```

Site loads without errors in browser console.

---

For detailed information, see:
- `WEBPACK_ERROR_FIX_SUMMARY.md` - Complete technical details
- `DEPLOYMENT_FIX_GUIDE.md` - Step-by-step deployment guide
- `deploy-production.sh` - Automated deployment script

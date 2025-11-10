# Docker Setup Guide

This project uses a unified Dockerfile with hot reload support enabled by default.

## Quick Start

To run the application with hot reloading:

```bash
# Build and start the container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

**Features:**
- Hot reload enabled by default - changes to your code will automatically refresh
- Source code is mounted as volumes
- Runs on `http://localhost:3000`
- Node modules are preserved in the container

## Docker Commands Reference

### Start the application
```bash
# With logs
docker-compose up

# In background (detached mode)
docker-compose up -d

# Rebuild and start
docker-compose up --build
```

### Stop the application
```bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### View logs
```bash
# Follow logs
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100
```

### Rebuild from scratch
```bash
docker-compose build --no-cache
docker-compose up
```

### Access container shell
```bash
docker exec -it bob2build sh
```

### Restart the container
```bash
docker-compose restart
```

## Production Build

To build for production, modify the docker-compose.yml:

1. Change `target: development` to `target: production`
2. Remove or comment out the `volumes` section
3. Update environment variables:
   ```yaml
   environment:
     - NODE_ENV=production
     - NEXT_PUBLIC_SITE_URL=https://bob2build.tanmaydeepsharma.com
   ```
4. Update port mapping if needed:
   ```yaml
   ports:
     - "6000:3000"
   ```

Then build and run:
```bash
docker-compose up --build
```

## Dockerfile Stages

The Dockerfile contains multiple stages:

1. **base** - Base Node.js image
2. **deps** - Installs dependencies
3. **development** - Development mode with hot reload support (default)
4. **builder** - Builds the production application
5. **production** - Optimized production runtime

## Environment Variables

### Development (Default)
- `NODE_ENV=development`
- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

### Production
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://bob2build.tanmaydeepsharma.com`

## Hot Reload

Hot reload is enabled through volume mounts. The following directories are mounted:
- `/app` - Application code
- `/components` - React components
- `/lib` - Library functions
- `/public` - Static assets
- `/styles` - CSS/styling files
- `/data` - Data files
- Configuration files (next.config.js, tailwind.config.ts, etc.)

Changes to any of these files will automatically trigger a reload in the development server.

## Troubleshooting

### Hot reload not working
1. Ensure volumes are properly mounted in docker-compose.yml
2. Check that the container is running: `docker ps`
3. Try rebuilding: `docker-compose up --build`
4. Check logs: `docker-compose logs -f`

### Port already in use
```bash
# Check what's using the port
lsof -i :3000

# Kill the process or use different port in docker-compose.yml
ports:
  - "3001:3000"  # Use 3001 instead
```

### Permission issues
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

### Container won't start
```bash
# Remove all containers and volumes
docker-compose down -v

# Rebuild from scratch
docker-compose build --no-cache
docker-compose up
```

### Changes not reflecting
1. Check if file is mounted: `docker exec -it bob2build ls -la /app`
2. Restart the container: `docker-compose restart`
3. Check Next.js cache: Remove `.next` folder and restart

## Best Practices

1. **Development**: Use the default configuration with hot reload
2. **Production**: Switch to production target and remove volumes
3. **Clean builds**: Use `--no-cache` when dependencies change
4. **Logs**: Always check logs when troubleshooting: `docker-compose logs -f`
5. **Resources**: Monitor Docker resource usage if performance is slow

# Docker Setup Guide

This project uses a unified Dockerfile that supports both development (with hot reload) and production modes.

## Development Mode (with Hot Reload)

To run the application in development mode with hot reloading:

```bash
# Build and start the development container
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d --build

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop the container
docker-compose -f docker-compose.dev.yml down
```

**Features:**
- Hot reload enabled - changes to your code will automatically refresh
- Source code is mounted as volumes
- Runs on `http://localhost:3000`
- Node modules are preserved in the container

## Production Mode

To run the application in production mode:

```bash
# Build and start the production container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

**Features:**
- Optimized production build
- Smaller image size using multi-stage builds
- Runs on port 6000 (mapped to container's 3000)
- Static file generation for better performance

## Docker Commands Reference

### Build only (without starting)
```bash
# Development
docker-compose -f docker-compose.dev.yml build

# Production
docker-compose build
```

### Rebuild from scratch
```bash
# Development
docker-compose -f docker-compose.dev.yml build --no-cache

# Production
docker-compose build --no-cache
```

### Access container shell
```bash
# Development
docker exec -it bob2build-dev sh

# Production
docker exec -it bob2build sh
```

### Remove containers and volumes
```bash
# Development
docker-compose -f docker-compose.dev.yml down -v

# Production
docker-compose down -v
```

## Dockerfile Stages

The Dockerfile contains three main stages:

1. **deps** - Installs dependencies
2. **development** - Development mode with hot reload support
3. **builder** - Builds the production application
4. **production** - Optimized production runtime

## Environment Variables

### Development
- `NODE_ENV=development`
- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

### Production
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://bob2build.tanmaydeepsharma.com`

## Troubleshooting

### Hot reload not working
1. Ensure you're using `docker-compose.dev.yml`
2. Check that volumes are properly mounted
3. Try rebuilding: `docker-compose -f docker-compose.dev.yml up --build`

### Port already in use
```bash
# Check what's using the port
lsof -i :3000  # or :6000 for production

# Use different port in docker-compose file
ports:
  - "3001:3000"  # Use 3001 instead
```

### Permission issues
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

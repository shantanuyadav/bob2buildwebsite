#!/bin/bash

# Production Deployment Script for bob2build
# This script deploys the Next.js application with proper cache clearing

set -e  # Exit on error

echo "=========================================="
echo "bob2build Production Deployment"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
CONTAINER_NAME="bob2build"
IMAGE_NAME="bob2build:latest"
PORT="6000"
SITE_URL="https://bob2build.tanmaydeepsharma.com"

echo -e "${YELLOW}Step 1: Cleaning build cache...${NC}"
rm -rf .next
echo -e "${GREEN}✓ Build cache cleared${NC}"
echo ""

echo -e "${YELLOW}Step 2: Building production bundle...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Production build completed${NC}"
echo ""

echo -e "${YELLOW}Step 3: Building Docker image...${NC}"
docker build -t $IMAGE_NAME -f Dockerfile .
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Docker build failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker image built${NC}"
echo ""

echo -e "${YELLOW}Step 4: Stopping existing container...${NC}"
if docker ps -a | grep -q $CONTAINER_NAME; then
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    echo -e "${GREEN}✓ Existing container stopped and removed${NC}"
else
    echo -e "${GREEN}✓ No existing container found${NC}"
fi
echo ""

echo -e "${YELLOW}Step 5: Starting new container...${NC}"
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=$SITE_URL \
  $IMAGE_NAME

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Failed to start container!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Container started successfully${NC}"
echo ""

echo -e "${YELLOW}Step 6: Waiting for container to be ready...${NC}"
sleep 5

# Check if container is running
if docker ps | grep -q $CONTAINER_NAME; then
    echo -e "${GREEN}✓ Container is running${NC}"
else
    echo -e "${RED}✗ Container failed to start!${NC}"
    echo "Container logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi
echo ""

echo -e "${YELLOW}Step 7: Testing local endpoint...${NC}"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT)
if [ $HTTP_CODE -eq 200 ]; then
    echo -e "${GREEN}✓ Local endpoint responding (HTTP $HTTP_CODE)${NC}"
else
    echo -e "${RED}✗ Local endpoint not responding properly (HTTP $HTTP_CODE)${NC}"
    echo "Container logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi
echo ""

echo "=========================================="
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo "=========================================="
echo ""
echo "Container: $CONTAINER_NAME"
echo "Image: $IMAGE_NAME"
echo "Port: $PORT"
echo "Site URL: $SITE_URL"
echo ""
echo "Next steps:"
echo "1. Clear Nginx cache on server:"
echo "   sudo rm -rf /var/cache/nginx/*"
echo "   sudo systemctl reload nginx"
echo ""
echo "2. Test the site in incognito mode:"
echo "   $SITE_URL"
echo ""
echo "3. Monitor container logs:"
echo "   docker logs -f $CONTAINER_NAME"
echo ""
echo "4. Check container status:"
echo "   docker ps | grep $CONTAINER_NAME"
echo ""

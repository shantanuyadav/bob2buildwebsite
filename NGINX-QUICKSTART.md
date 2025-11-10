# Nginx Quick Start Guide
## bob2build.tanmaydeepsharma.com

### Prerequisites Check
```bash
# Verify Next.js is running on port 6000
curl http://localhost:6000

# Check Docker container
docker ps | grep apex-web-studios
```

---

## 1. Install Nginx and Certbot

```bash
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx -y
```

---

## 2. Deploy Configuration

```bash
# Copy configuration file
sudo cp /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/nginx.conf \
  /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com

# Enable site
sudo ln -s /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com \
  /etc/nginx/sites-enabled/

# Create directories
sudo mkdir -p /var/www/certbot
sudo chown -R www-data:www-data /var/www/certbot
```

---

## 3. Temporary HTTP Configuration (for SSL setup)

```bash
# Create temporary config
sudo tee /etc/nginx/sites-available/bob2build-temp.conf > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name bob2build.tanmaydeepsharma.com www.bob2build.tanmaydeepsharma.com;

    location ^~ /.well-known/acme-challenge/ {
        default_type "text/plain";
        root /var/www/certbot;
        allow all;
    }

    location / {
        proxy_pass http://localhost:6000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

# Enable temp config
sudo ln -s /etc/nginx/sites-available/bob2build-temp.conf \
  /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t && sudo systemctl reload nginx
```

---

## 4. Obtain SSL Certificate

```bash
# Replace your-email@example.com with your actual email
sudo certbot certonly --nginx \
  -d bob2build.tanmaydeepsharma.com \
  -d www.bob2build.tanmaydeepsharma.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email

# Verify certificate
sudo ls -la /etc/letsencrypt/live/bob2build.tanmaydeepsharma.com/
```

---

## 5. Enable Full HTTPS Configuration

```bash
# Remove temporary config
sudo rm /etc/nginx/sites-enabled/bob2build-temp.conf

# Enable full config
sudo ln -s /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com \
  /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t && sudo systemctl reload nginx
```

---

## 6. Verify Everything Works

```bash
# Test HTTP redirect
curl -I http://bob2build.tanmaydeepsharma.com

# Test HTTPS
curl -I https://bob2build.tanmaydeepsharma.com

# Check SSL grade (optional)
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=bob2build.tanmaydeepsharma.com
```

---

## Common Commands

```bash
# Reload Nginx (after config changes)
sudo nginx -t && sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# View logs
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.access.log
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.error.log

# Renew SSL certificate (manual)
sudo certbot renew

# Test auto-renewal
sudo certbot renew --dry-run
```

---

## Troubleshooting

### 502 Bad Gateway
```bash
# Check if Next.js is running
curl http://localhost:6000

# Restart Docker container
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d
docker-compose restart
```

### Configuration Errors
```bash
# Test configuration
sudo nginx -t

# View full configuration
sudo nginx -T | less
```

### SSL Issues
```bash
# Check certificate
sudo certbot certificates

# Regenerate if needed
sudo certbot certonly --nginx -d bob2build.tanmaydeepsharma.com --force-renewal
```

---

## Done!

Your site should now be accessible at:
- https://bob2build.tanmaydeepsharma.com
- https://www.bob2build.tanmaydeepsharma.com

For detailed information, see: `nginx-setup-guide.md`

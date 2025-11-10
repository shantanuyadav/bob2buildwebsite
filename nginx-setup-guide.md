# Nginx Configuration Setup Guide for bob2build.tanmaydeepsharma.com

## Overview
This guide provides complete instructions for deploying the Nginx configuration for the bob2build.tanmaydeepsharma.com website, a Next.js application running on port 6000.

## Architecture
- **Application**: Next.js 14.2.0
- **Backend Port**: 6000 (Docker container port 3000 mapped to host port 6000)
- **Web Server**: Nginx (reverse proxy with caching)
- **SSL**: Let's Encrypt via Certbot
- **Domain**: bob2build.tanmaydeepsharma.com

---

## Prerequisites

### 1. Install Nginx
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install nginx -y

# Verify installation
nginx -v
```

### 2. Install Certbot
```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx -y

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx -y

# Verify installation
certbot --version
```

### 3. Ensure Next.js Application is Running
```bash
# Verify application is running on port 6000
curl http://localhost:6000

# Or check with docker-compose
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d
docker-compose ps
```

---

## Installation Steps

### Step 1: Deploy Nginx Configuration

```bash
# Create backup of default configuration
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup

# Copy the configuration file
sudo cp /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/nginx.conf /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com

# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default
```

### Step 2: Create Required Directories

```bash
# Create directory for Let's Encrypt challenges
sudo mkdir -p /var/www/certbot

# Create log directory if not exists
sudo mkdir -p /var/log/nginx

# Set proper permissions
sudo chown -R www-data:www-data /var/www/certbot
sudo chmod -R 755 /var/www/certbot
```

### Step 3: Test Nginx Configuration

```bash
# Test configuration syntax
sudo nginx -t

# Expected output:
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### Step 4: Temporarily Enable HTTP for SSL Certificate Generation

```bash
# Edit the nginx.conf to comment out SSL server block temporarily
# Keep only the HTTP server block active for initial SSL certificate generation

# Or use this temporary configuration
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

# Enable temporary configuration
sudo rm /etc/nginx/sites-enabled/bob2build.tanmaydeepsharma.com
sudo ln -s /etc/nginx/sites-available/bob2build-temp.conf /etc/nginx/sites-enabled/bob2build-temp.conf

# Reload Nginx
sudo systemctl reload nginx
```

### Step 5: Obtain SSL Certificate

```bash
# Generate SSL certificate using Certbot
sudo certbot certonly --nginx \
  -d bob2build.tanmaydeepsharma.com \
  -d www.bob2build.tanmaydeepsharma.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  --staple-ocsp \
  --preferred-challenges http

# Alternative: Using webroot plugin
sudo certbot certonly --webroot \
  -w /var/www/certbot \
  -d bob2build.tanmaydeepsharma.com \
  -d www.bob2build.tanmaydeepsharma.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  --staple-ocsp

# Verify certificate was created
sudo ls -la /etc/letsencrypt/live/bob2build.tanmaydeepsharma.com/
```

Expected output:
```
total 12
drwxr-xr-x 2 root root 4096 Nov 10 08:30 .
drwx------ 3 root root 4096 Nov 10 08:30 ..
lrwxrwxrwx 1 root root   49 Nov 10 08:30 cert.pem -> ../../archive/bob2build.tanmaydeepsharma.com/cert1.pem
lrwxrwxrwx 1 root root   50 Nov 10 08:30 chain.pem -> ../../archive/bob2build.tanmaydeepsharma.com/chain1.pem
lrwxrwxrwx 1 root root   54 Nov 10 08:30 fullchain.pem -> ../../archive/bob2build.tanmaydeepsharma.com/fullchain1.pem
lrwxrwxrwx 1 root root   52 Nov 10 08:30 privkey.pem -> ../../archive/bob2build.tanmaydeepsharma.com/privkey1.pem
```

### Step 6: Enable Full Nginx Configuration

```bash
# Remove temporary configuration
sudo rm /etc/nginx/sites-enabled/bob2build-temp.conf

# Enable full configuration with HTTPS
sudo ln -s /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx with full configuration
sudo systemctl reload nginx
```

### Step 7: Setup Auto-Renewal

```bash
# Test certificate renewal
sudo certbot renew --dry-run

# Certbot automatically sets up a systemd timer
# Verify auto-renewal is configured
sudo systemctl status certbot.timer

# Manual renewal (if needed)
sudo certbot renew

# Add post-renewal hook to reload nginx
sudo tee /etc/letsencrypt/renewal-hooks/deploy/nginx-reload.sh > /dev/null <<'EOF'
#!/bin/bash
systemctl reload nginx
EOF

sudo chmod +x /etc/letsencrypt/renewal-hooks/deploy/nginx-reload.sh
```

---

## Nginx Service Management

### Start/Stop/Restart Commands
```bash
# Start Nginx
sudo systemctl start nginx

# Stop Nginx
sudo systemctl stop nginx

# Restart Nginx (full restart)
sudo systemctl restart nginx

# Reload Nginx (graceful, no downtime)
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

### Configuration Testing
```bash
# Test configuration before reload
sudo nginx -t

# Test and reload in one command
sudo nginx -t && sudo systemctl reload nginx
```

---

## Verification and Testing

### 1. Test HTTP to HTTPS Redirect
```bash
curl -I http://bob2build.tanmaydeepsharma.com
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://bob2build.tanmaydeepsharma.com/
```

### 2. Test HTTPS Connection
```bash
curl -I https://bob2build.tanmaydeepsharma.com
# Should return: HTTP/2 200
```

### 3. Test SSL Certificate
```bash
# Check SSL certificate details
openssl s_client -connect bob2build.tanmaydeepsharma.com:443 -servername bob2build.tanmaydeepsharma.com

# Or use online tools:
# https://www.ssllabs.com/ssltest/analyze.html?d=bob2build.tanmaydeepsharma.com
```

### 4. Test Caching Headers
```bash
# Test static asset caching
curl -I https://bob2build.tanmaydeepsharma.com/_next/static/some-file.js
# Should include: Cache-Control: public, max-age=31536000, immutable

# Test HTML caching
curl -I https://bob2build.tanmaydeepsharma.com/
# Should include: Cache-Control: public, max-age=0, must-revalidate
```

### 5. Test Security Headers
```bash
curl -I https://bob2build.tanmaydeepsharma.com | grep -E "(Strict-Transport-Security|X-Frame-Options|X-Content-Type-Options)"
```

### 6. Test Compression
```bash
curl -H "Accept-Encoding: gzip" -I https://bob2build.tanmaydeepsharma.com
# Should include: Content-Encoding: gzip
```

---

## Monitoring and Logs

### View Access Logs
```bash
# Real-time access log
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.access.log

# View last 100 lines
sudo tail -n 100 /var/log/nginx/bob2build.tanmaydeepsharma.com.access.log
```

### View Error Logs
```bash
# Real-time error log
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.error.log

# View last 100 lines
sudo tail -n 100 /var/log/nginx/bob2build.tanmaydeepsharma.com.error.log
```

### View Nginx General Logs
```bash
# Access log
sudo tail -f /var/log/nginx/access.log

# Error log
sudo tail -f /var/log/nginx/error.log
```

### Log Rotation
Nginx logs are automatically rotated by logrotate. Configuration is typically in:
```bash
/etc/logrotate.d/nginx
```

---

## Performance Optimization

### Enable HTTP/2 (Already Configured)
The configuration already includes HTTP/2 support:
```nginx
listen 443 ssl http2;
```

### Optional: Enable Brotli Compression
If you want to enable Brotli (better compression than gzip):

```bash
# Install Brotli module
sudo apt install nginx-module-brotli -y

# Uncomment Brotli lines in nginx.conf
sudo nano /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com
# Uncomment the brotli configuration lines

# Reload Nginx
sudo systemctl reload nginx
```

### Adjust Worker Processes
Edit `/etc/nginx/nginx.conf`:
```nginx
worker_processes auto;
worker_connections 1024;
```

---

## Troubleshooting

### Issue: SSL Certificate Not Found
```bash
# Verify certificate exists
sudo ls -la /etc/letsencrypt/live/bob2build.tanmaydeepsharma.com/

# If missing, regenerate
sudo certbot certonly --nginx -d bob2build.tanmaydeepsharma.com
```

### Issue: Port 6000 Not Accessible
```bash
# Check if Next.js is running
sudo netstat -tulpn | grep :6000
# or
sudo ss -tulpn | grep :6000

# Check Docker container
docker ps | grep apex-web-studios

# Restart Docker container
cd /root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d
docker-compose restart
```

### Issue: 502 Bad Gateway
```bash
# Check upstream connection
curl http://localhost:6000

# Check Nginx error logs
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.error.log

# Check SELinux (if enabled)
sudo setsebool -P httpd_can_network_connect 1
```

### Issue: Configuration Test Fails
```bash
# Test configuration and show errors
sudo nginx -t

# Check syntax errors
sudo nginx -T | less
```

---

## Security Hardening

### Firewall Configuration
```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### Fail2Ban Configuration (Optional)
```bash
# Install Fail2Ban
sudo apt install fail2ban -y

# Create Nginx jail
sudo tee /etc/fail2ban/jail.d/nginx.conf > /dev/null <<'EOF'
[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 5

[nginx-botsearch]
enabled = true
port = http,https
logpath = /var/log/nginx/access.log
maxretry = 2
EOF

# Restart Fail2Ban
sudo systemctl restart fail2ban
```

---

## Configuration Features

The provided Nginx configuration includes:

### Security Features
- HTTPS enforcement with HTTP to HTTPS redirect
- Modern TLS 1.2 and TLS 1.3 protocols
- Strong cipher suites
- OCSP stapling
- Security headers (HSTS, X-Frame-Options, CSP, etc.)
- Rate limiting for general and API requests
- Connection limiting
- Server tokens disabled

### Performance Features
- HTTP/2 support
- Gzip compression for text assets
- Aggressive caching for static assets (1 year)
- Moderate caching for images (30 days)
- Short caching for HTML with revalidation
- Keepalive connections
- Proxy buffering
- Efficient buffer sizes

### Caching Strategy
- `/_next/static/*`: 1 year (immutable)
- `/_next/image/*`: 1 week with stale-while-revalidate
- Images/fonts: 30 days to 1 year
- CSS/JS: 1 week
- HTML pages: No cache with must-revalidate
- API routes: No cache

### Rate Limiting
- General requests: 10 requests/second with burst of 20
- API requests: 5 requests/second with burst of 10
- Max 10 concurrent connections per IP

---

## File Locations Summary

| Item | Location |
|------|----------|
| Nginx config | `/etc/nginx/sites-available/bob2build.tanmaydeepsharma.com` |
| Enabled site link | `/etc/nginx/sites-enabled/bob2build.tanmaydeepsharma.com` |
| SSL certificate | `/etc/letsencrypt/live/bob2build.tanmaydeepsharma.com/` |
| Access logs | `/var/log/nginx/bob2build.tanmaydeepsharma.com.access.log` |
| Error logs | `/var/log/nginx/bob2build.tanmaydeepsharma.com.error.log` |
| Certbot webroot | `/var/www/certbot` |
| Source config | `/root/workspace/claude-code-sdk/projects/default/bob2buildwebsite/6b41c55f-026a-4b9a-ba35-64fd41a6c76d/nginx.conf` |

---

## Quick Reference Commands

```bash
# Deploy configuration
sudo cp nginx.conf /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com
sudo ln -s /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Obtain SSL certificate
sudo certbot certonly --nginx -d bob2build.tanmaydeepsharma.com -d www.bob2build.tanmaydeepsharma.com

# Test HTTPS
curl -I https://bob2build.tanmaydeepsharma.com

# View logs
sudo tail -f /var/log/nginx/bob2build.tanmaydeepsharma.com.access.log

# Reload after changes
sudo nginx -t && sudo systemctl reload nginx
```

---

## Next Steps

1. Ensure DNS records point to your server IP
2. Install and configure Nginx as described above
3. Obtain SSL certificate using Certbot
4. Test all endpoints and verify caching
5. Monitor logs for any issues
6. Setup monitoring/alerting (optional)

---

## Support and Maintenance

### Regular Maintenance Tasks
- Monitor SSL certificate expiration (auto-renewed)
- Review access logs for anomalies
- Update Nginx when security patches are available
- Backup configuration files regularly
- Monitor disk space for logs

### Backup Configuration
```bash
# Backup entire Nginx configuration
sudo tar -czf nginx-backup-$(date +%Y%m%d).tar.gz /etc/nginx/

# Backup site configuration only
sudo cp /etc/nginx/sites-available/bob2build.tanmaydeepsharma.com \
  /root/backups/nginx-bob2build-$(date +%Y%m%d).conf
```

---

## Additional Resources

- [Nginx Official Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/)
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)
- [Security Headers Checker](https://securityheaders.com/)

---

## Notes

- This configuration is optimized for production use
- All cache headers are tuned for static website performance
- Rate limiting prevents abuse while allowing normal traffic
- Security headers provide defense-in-depth protection
- The configuration follows Next.js best practices for reverse proxy setup
- HTTPS is enforced for all connections
- IPv6 is supported alongside IPv4

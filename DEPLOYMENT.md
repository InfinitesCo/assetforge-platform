# Deployment Guide for binatech.co (Ubuntu Server)

## Quick Deployment Steps

Since you have an Ubuntu server with SSH access, follow these steps:

### Step 1: SSH into your server
```bash
ssh user@your-server-ip
# Replace 'user' with your username and 'your-server-ip' with your server's IP or domain
```

### Step 2: Navigate to your project directory
```bash
cd /var/www/binatech.co/assetforge-platform
```

### Step 3: Pull latest changes and deploy
```bash
# Pull the latest code from GitHub
git pull origin main

# Install/update dependencies (if needed)
npm install

# Build the project
npm run build

# Copy built files to your web server directory
sudo cp -r dist/* /var/www/binatech.co/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/binatech.co
sudo chmod -R 755 /var/www/binatech.co

# Reload Nginx to ensure changes are applied
sudo nginx -t  # Test configuration
sudo systemctl reload nginx  # Reload Nginx
```

### Alternative: Use the deployment script

The deployment script is already configured with your paths. Just run:

```bash
cd /var/www/binatech.co/assetforge-platform
chmod +x deploy.sh
./deploy.sh
```

## Build the Project

The project has been built successfully. The production files are in the `dist/` folder.

```bash
npm run build
```

## Deployment Options

### Option 1: Manual Server Deployment (SSH) - RECOMMENDED FOR YOU

If you have SSH access to your server:

```bash
# 1. SSH into your server
ssh user@your-server-ip

# 2. Navigate to your project directory
cd /path/to/your/project

# 3. Pull the latest changes
git pull origin main

# 4. Install dependencies (if needed)
npm install

# 5. Build the project
npm run build

# 6. Copy dist/ folder to your web server directory
# Example for Nginx:
sudo cp -r dist/* /var/www/html/

# Or if using PM2 with a Node.js server:
pm2 restart your-app-name
```

### Option 3: Upload dist/ Folder Manually

1. The `dist/` folder contains all production-ready files
2. Upload the contents of `dist/` to your web server's public directory
3. Ensure your web server is configured to serve `index.html` for all routes (SPA routing)

### Option 4: Using FTP/SFTP

1. Build the project: `npm run build`
2. Upload all files from the `dist/` folder to your server's public directory
3. Ensure proper file permissions

## Important Notes

- The favicon is now at `/public/favicon.svg` and will be included in the build
- All "Lovable" references have been removed
- Make sure your web server is configured for SPA routing (all routes should serve `index.html`)

## Server Configuration (Nginx)

Your Nginx configuration should be set up at `/etc/nginx/sites-available/binatech.co`

**Important:** Make sure your Nginx config has:
- `root /var/www/binatech.co;` (not `/var/www/html`)
- SPA routing: `try_files $uri $uri/ /index.html;`

See `nginx-config-example.conf` for a complete example configuration.

**To check/update your Nginx config:**
```bash
# Edit your Nginx config
sudo nano /etc/nginx/sites-available/binatech.co

# Test the configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```


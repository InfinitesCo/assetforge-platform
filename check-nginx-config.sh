#!/bin/bash

# Script to check Nginx configuration and find the correct web directory

echo "Checking Nginx configuration..."
echo ""

# Check if Nginx config exists for binatech.co
if [ -f "/etc/nginx/sites-available/binatech.co" ]; then
    echo "Found Nginx config at /etc/nginx/sites-available/binatech.co"
    echo "Root directory configured:"
    grep -i "root" /etc/nginx/sites-available/binatech.co | grep -v "^#"
    echo ""
fi

# Check enabled sites
if [ -f "/etc/nginx/sites-enabled/binatech.co" ]; then
    echo "Found enabled site at /etc/nginx/sites-enabled/binatech.co"
    echo "Root directory configured:"
    grep -i "root" /etc/nginx/sites-enabled/binatech.co | grep -v "^#"
    echo ""
fi

# Check default Nginx config
if [ -f "/etc/nginx/sites-available/default" ]; then
    echo "Checking default Nginx config:"
    grep -i "root" /etc/nginx/sites-available/default | grep -v "^#"
    echo ""
fi

# List all Nginx site configs
echo "All Nginx site configurations:"
ls -la /etc/nginx/sites-available/
echo ""

echo "Enabled sites:"
ls -la /etc/nginx/sites-enabled/
echo ""

echo "Checking what's in /var/www/html:"
ls -la /var/www/html/
echo ""

echo "Checking what's in /var/www/binatech.co (if exists):"
if [ -d "/var/www/binatech.co" ]; then
    ls -la /var/www/binatech.co/
else
    echo "Directory /var/www/binatech.co does not exist"
fi


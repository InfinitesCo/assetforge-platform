#!/bin/bash

# Script to find where the project is located on the server

echo "Searching for the project directory..."
echo ""

# Check common locations
echo "Checking common project locations:"
echo ""

if [ -d "/var/www/binatech.co/assetforge-platform" ]; then
    echo "✓ Found at: /var/www/binatech.co/assetforge-platform"
elif [ -d "/var/www/assetforge-platform" ]; then
    echo "✓ Found at: /var/www/assetforge-platform"
elif [ -d "~/assetforge-platform" ]; then
    echo "✓ Found at: ~/assetforge-platform"
elif [ -d "$HOME/assetforge-platform" ]; then
    echo "✓ Found at: $HOME/assetforge-platform"
else
    echo "✗ Project directory not found in common locations"
fi

echo ""
echo "Searching for git repositories..."
find /var/www -name ".git" -type d 2>/dev/null | head -10

echo ""
echo "Checking what's in /var/www:"
ls -la /var/www/

echo ""
echo "Checking what's in /var/www/binatech.co (if exists):"
if [ -d "/var/www/binatech.co" ]; then
    ls -la /var/www/binatech.co/
else
    echo "Directory /var/www/binatech.co does not exist"
fi

echo ""
echo "Current directory:"
pwd


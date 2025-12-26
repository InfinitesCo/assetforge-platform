#!/bin/bash

# Deployment script for Ubuntu server
# Make sure to update the variables below according to your server setup

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment...${NC}"

# Project directory on server
PROJECT_DIR="/var/www/binatech.co/assetforge-platform"

# Web server directory (where Nginx serves files from)
WEB_DIR="/var/www/binatech.co"

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}Error: Project directory not found at $PROJECT_DIR${NC}"
    echo "Please update PROJECT_DIR in deploy.sh"
    exit 1
fi

# Navigate to project directory
cd "$PROJECT_DIR" || exit 1

# Fix ownership if needed (run with sudo if necessary)
echo -e "${YELLOW}Checking repository ownership...${NC}"
CURRENT_USER=$(whoami)
if [ -d ".git" ]; then
    # Fix ownership of .git directory if needed
    if [ ! -w ".git" ]; then
        echo -e "${YELLOW}Fixing repository ownership...${NC}"
        sudo chown -R "$CURRENT_USER:$CURRENT_USER" "$PROJECT_DIR"
    fi
    # Add safe directory if needed
    git config --global --add safe.directory "$PROJECT_DIR" 2>/dev/null
fi

echo -e "${YELLOW}Pulling latest changes from GitHub...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to pull from GitHub${NC}"
    exit 1
fi

echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${YELLOW}Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Build failed${NC}"
    exit 1
fi

echo -e "${YELLOW}Copying files to web directory...${NC}"
sudo cp -r dist/* "$WEB_DIR/"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to copy files${NC}"
    exit 1
fi

# Set proper permissions
echo -e "${YELLOW}Setting file permissions...${NC}"
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Your site should now be updated at https://binatech.co${NC}"


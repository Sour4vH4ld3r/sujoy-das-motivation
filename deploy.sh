#!/bin/bash

# Sujoy Das Website Deployment Script
# Usage: ./deploy.sh

echo "🚀 Starting Sujoy Das Website Deployment..."

# Create application directory
sudo mkdir -p /var/www/sujoy-das
cd /var/www/sujoy-das

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Set up PM2 ecosystem
echo "⚙️ Setting up PM2 configuration..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'sujoy-das-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/sujoy-das',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

# Start the application
echo "🔧 Starting application with PM2..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Set up Nginx (optional)
echo "🌐 Setting up Nginx reverse proxy..."
sudo apt update
sudo apt install -y nginx

# Create Nginx configuration
sudo cat > /etc/nginx/sites-available/sujoy-das << EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Serve static files directly
    location /_next/static/ {
        alias /var/www/sujoy-das/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        alias /var/www/sujoy-das/public/images/;
        expires 1y;
        add_header Cache-Control "public";
    }

    location /videos/ {
        alias /var/www/sujoy-das/public/videos/;
        expires 1y;
        add_header Cache-Control "public";
    }
}
EOF

# Enable Nginx site
sudo ln -sf /etc/nginx/sites-available/sujoy-das /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Set proper permissions
sudo chown -R www-data:www-data /var/www/sujoy-das
sudo chmod -R 755 /var/www/sujoy-das

echo "✅ Deployment completed!"
echo "🌐 Your website should be accessible at: http://your-server-ip"
echo "📊 Monitor with: pm2 monit"
echo "📝 View logs with: pm2 logs sujoy-das-website" 
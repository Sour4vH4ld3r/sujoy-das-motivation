#!/bin/bash

# Upload script for Sujoy Das Website
# Usage: ./upload.sh username@server-ip

if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide server details"
    echo "Usage: ./upload.sh username@server-ip"
    echo "Example: ./upload.sh root@192.168.1.100"
    exit 1
fi

SERVER=$1
echo "🚀 Uploading Sujoy Das Website to $SERVER..."

# Create production package
echo "📦 Creating production package..."
cd /Users/souravhalder/Desktop/SujoyDas/nextjs-app

# Create temporary directory with only necessary files
mkdir -p /tmp/sujoy-das-deploy
cp -r .next /tmp/sujoy-das-deploy/
cp -r public /tmp/sujoy-das-deploy/
cp package.json /tmp/sujoy-das-deploy/
cp package-lock.json /tmp/sujoy-das-deploy/
cp next.config.* /tmp/sujoy-das-deploy/ 2>/dev/null || true
cp deploy.sh /tmp/sujoy-das-deploy/

# Create tarball
cd /tmp
tar -czf sujoy-das-website.tar.gz sujoy-das-deploy/

echo "📤 Uploading files to server..."
scp sujoy-das-website.tar.gz $SERVER:/tmp/

echo "🔧 Extracting and setting up on server..."
ssh $SERVER << 'EOF'
cd /tmp
tar -xzf sujoy-das-website.tar.gz
sudo mkdir -p /var/www/sujoy-das
sudo cp -r sujoy-das-deploy/* /var/www/sujoy-das/
chmod +x /var/www/sujoy-das/deploy.sh
cd /var/www/sujoy-das
sudo ./deploy.sh
EOF

# Cleanup
rm -rf /tmp/sujoy-das-deploy /tmp/sujoy-das-website.tar.gz

echo "✅ Upload completed!"
echo "🌐 Your website should be accessible at: http://$SERVER"
echo "🔍 SSH into server to monitor: ssh $SERVER" 
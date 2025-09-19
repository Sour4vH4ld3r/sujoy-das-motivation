# cPanel Next.js Upload Guide (Node.js Supported)

## Step 1: Prepare Files for Upload

### Create Upload Package
```bash
cd /Users/souravhalder/Desktop/SujoyDas/nextjs-app

# Create a zip file with necessary files
zip -r sujoy-das-website.zip .next public package.json package-lock.json next.config.* -x "node_modules/*" "src/*"
```

## Step 2: Login to cPanel

1. **Access cPanel**: Go to `yourdomain.com/cpanel`
2. **Login**: Use your hosting credentials
3. **Find File Manager**: Look in "Files" section

## Step 3: Upload Files via File Manager

### Navigate to Root Directory
1. **Click "File Manager"**
2. **Go to**: `public_html` (or your domain folder)
3. **Create New Folder**: Name it `sujoy-das` (optional)

### Upload Files
1. **Click "Upload"** button
2. **Select**: `sujoy-das-website.zip`
3. **Wait**: For upload to complete
4. **Extract**: Right-click zip → "Extract"
5. **Move Files**: Move contents to root directory

## Step 4: Set Up Node.js Application

### Access Node.js App Manager
1. **Find**: "Node.js App" in Software section
2. **Click**: "Node.js App"
3. **Create App**: Click "Create Application"

### Configure Application
```
Node.js Version: 18.x (latest available)
Application Mode: Production
Application Root: public_html (or your folder)
Application URL: yourdomain.com
Application Startup File: server.js
```

### Create server.js file
```javascript
// Create this file in File Manager
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

## Step 5: Install Dependencies

### Using Terminal (if available)
1. **Find**: "Terminal" in Advanced section
2. **Navigate**: `cd public_html`
3. **Install**: `npm install`

### Using Node.js App Manager
1. **Go to**: Node.js App section
2. **Click**: "NPM Install" button
3. **Wait**: For installation to complete

## Step 6: Configure Environment

### Environment Variables
```
NODE_ENV=production
PORT=3000
```

### package.json Scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "build": "next build"
  }
}
```

## Step 7: Start Application

1. **Go to**: Node.js App Manager
2. **Click**: "Start App" button
3. **Check**: Application status
4. **Visit**: Your domain to test

## Step 8: Set Up Domain Redirect (if needed)

### Create .htaccess file
```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
``` 
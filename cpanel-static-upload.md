# cPanel Static Upload Guide (No Node.js Required)

## Step 1: Convert Next.js to Static Files

### Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Build Static Files
```bash
cd /Users/souravhalder/Desktop/SujoyDas/nextjs-app

# Build for static export
npm run build

# Static files will be in 'out' directory
ls -la out/
```

## Step 2: Create Upload Package

### Zip Static Files
```bash
cd out
zip -r ../sujoy-das-static.zip * .*
cd ..
```

## Step 3: Login to cPanel

1. **Go to**: `yourdomain.com/cpanel`
2. **Login**: Enter your credentials
3. **Dashboard**: You should see the main cPanel interface

## Step 4: Access File Manager

1. **Find**: "File Manager" in Files section
2. **Click**: "File Manager"
3. **Select**: "Web Root (public_html/www)"
4. **Click**: "Go"

## Step 5: Clear Existing Files (if any)

1. **Select All**: Ctrl+A (or Cmd+A)
2. **Delete**: Click "Delete" button
3. **Confirm**: Yes, delete files

## Step 6: Upload Static Files

### Upload Process
1. **Click**: "Upload" button (top toolbar)
2. **Select File**: Choose `sujoy-das-static.zip`
3. **Upload**: Wait for 100% completion
4. **Go Back**: Return to File Manager

### Extract Files
1. **Find**: `sujoy-das-static.zip` in file list
2. **Right-click**: Select "Extract"
3. **Extract Path**: `/public_html/`
4. **Extract**: Click "Extract File(s)"

### Clean Up
1. **Delete**: `sujoy-das-static.zip` (no longer needed)
2. **Verify**: Check files are in root directory

## Step 7: Set Up Domain

### File Structure Should Look Like:
```
public_html/
├── index.html
├── _next/
├── images/
├── videos/
└── other files...
```

### Create .htaccess (for clean URLs)
```apache
# Create new file: .htaccess
RewriteEngine On

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|ico)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

## Step 8: Test Your Website

1. **Visit**: `yourdomain.com`
2. **Check**: All pages load correctly
3. **Test**: Navigation works
4. **Verify**: Images and videos display

## Step 9: Optional Optimizations

### Compress Files (in cPanel)
1. **Select**: All HTML/CSS/JS files
2. **Right-click**: "Compress"
3. **Choose**: "Gzip"

### Set Up SSL Certificate
1. **Find**: "SSL/TLS" in Security section
2. **Choose**: "Let's Encrypt SSL"
3. **Install**: Free SSL certificate

## Step 10: Update Links (if needed)

### Check for Issues:
- ✅ All pages accessible
- ✅ Images loading
- ✅ Videos playing
- ✅ Forms working (contact forms)
- ✅ Mobile responsive

### Common Fixes:
```javascript
// If images don't load, check paths in exported files
// They should be relative: ./images/... not /images/...
```

## Limitations of Static Export:
- ❌ No server-side functions
- ❌ No API routes
- ❌ No real-time features
- ✅ Fast loading
- ✅ Works on any host
- ✅ SEO friendly 
# cPanel Deployment Instructions for Sujoy Das Website

## 📁 Files to Upload

Upload **ALL** contents of the `out/` folder to your cPanel public_html directory.

## 🚀 Deployment Steps

### Step 1: Access cPanel File Manager
1. Login to your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` directory
4. Delete any existing files (if this is a fresh install)

### Step 2: Upload Files
1. **Extract** `sujoy-das-cpanel.zip`
2. **Upload ALL contents** from the `out/` folder to `public_html/`
3. Ensure the following structure:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── robots.txt
   ├── sitemap.xml
   ├── manifest.json
   ├── favicon.ico
   ├── _next/ (folder)
   ├── images/ (folder)
   ├── videos/ (folder)
   └── .well-known/ (folder)
   ```

### Step 3: Configure Domain (if needed)
- If deploying to a subdomain, upload to the subdomain's public_html folder
- If deploying to main domain, upload to main public_html folder

### Step 4: File Permissions
Set the following permissions:
- **Folders**: 755
- **Files**: 644
- **.htaccess**: 644

### Step 5: Test Your Website
1. Visit your domain: `https://yourdomain.com`
2. Check that:
   - ✅ Website loads correctly
   - ✅ Images display properly
   - ✅ Videos play
   - ✅ Social media links work
   - ✅ SEO meta tags are present (view page source)

## 🔧 Important Notes

### SSL Certificate
- **Enable SSL** in cPanel for HTTPS
- Update any hardcoded HTTP links to HTTPS

### .htaccess File
- The included `.htaccess` provides:
  - Security headers
  - Compression
  - Caching rules
  - Error page redirects

### SEO Features Included
- ✅ Custom favicon (Sujoy Das profile)
- ✅ Meta tags and keywords
- ✅ Open Graph social sharing
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap for search engines
- ✅ Robots.txt for crawler control

### Performance Optimizations
- ✅ Compressed assets
- ✅ Optimized images
- ✅ Browser caching
- ✅ GZIP compression

## 🆘 Troubleshooting

### Website Not Loading
- Check file permissions
- Verify index.html is in public_html root
- Check error logs in cPanel

### Images Not Displaying
- Verify images folder uploaded correctly
- Check file permissions (644 for files, 755 for folders)

### SEO Not Working
- Allow 24-48 hours for search engines to crawl
- Submit sitemap to Google Search Console

## 📞 Support Information

Website: Sujoy Das Motivational Speaker
Location: Kolkata, West Bengal
Social Media: Facebook, Instagram, YouTube, Twitter

---

**Deployment Date**: $(date)
**Version**: Static Export for cPanel
**Framework**: Next.js 15.3.4 
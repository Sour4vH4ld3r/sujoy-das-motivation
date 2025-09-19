# cPanel Deployment Guide - Sujoy Das Website

## 📦 Package Contents
This deployment package contains a fully optimized static website for **Sujoy Das - Motivational Speaker & Life Coach**.

### ✅ SEO Features Included
- **Custom Title**: "Sujoy Das - Motivational Speaker & Life Coach | 3 Days Change Your Life Workshop"
- **20+ Targeted Keywords**: motivational speaker, life coach, personal development, Kolkata, etc.
- **Meta Tags**: Description, keywords, author, robots
- **OpenGraph & Twitter Cards**: For social media sharing
- **JSON-LD Structured Data**: Person, Event, Website schemas
- **Geographic Targeting**: West Bengal, West Bengal coordinates
- **Security Headers**: XSS protection, content type options, frame options

### 🔧 Technical Features
- **Mobile Responsive**: Perfect display on all devices
- **Performance Optimized**: Compressed assets, caching headers
- **Security Enhanced**: .htaccess with security headers
- **PWA Ready**: Manifest.json included
- **Custom Favicon**: Sujoy Das profile image

## 🚀 Deployment Instructions

### Step 1: Access cPanel File Manager
1. Login to your cPanel account
2. Navigate to **File Manager**
3. Go to `public_html` directory (or your domain's document root)

### Step 2: Upload Files
1. **Clear existing files** (if any) from public_html
2. **Upload the entire contents** of the `out` folder to `public_html`
3. Make sure these files are in the root:
   - `index.html` (main page)
   - `.htaccess` (URL routing & security)
   - `_next/` folder (assets)
   - `images/` folder (all images)
   - `favicon.ico` and other favicon files
   - `robots.txt`, `sitemap.xml`, `manifest.json`

### Step 3: Set Permissions
Set the following permissions:
- **Files**: 644 (rw-r--r--)
- **Directories**: 755 (rwxr-xr-x)
- **.htaccess**: 644 (rw-r--r--)

### Step 4: DNS & Domain Setup
1. Point your domain to cPanel hosting
2. Wait for DNS propagation (24-48 hours)
3. Test the website: `https://yourdomain.com`

### Step 5: SSL Certificate (Recommended)
1. In cPanel, go to **SSL/TLS**
2. Enable **Let's Encrypt** or upload your SSL certificate
3. Force HTTPS redirects (uncomment lines in .htaccess if needed)

## 🔍 Post-Deployment Checklist

### ✅ Functionality Testing
- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Mobile responsiveness works
- [ ] Social media links functional
- [ ] Contact forms working (if applicable)
- [ ] Videos play correctly

### ✅ SEO Testing
- [ ] Page title shows correctly in browser tab
- [ ] Meta description appears in search results
- [ ] Open Graph tags work on social media
- [ ] Favicon displays in browser
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap.xml`

### ✅ Performance Testing
- [ ] Page loads quickly (under 3 seconds)
- [ ] Images are optimized and load fast
- [ ] CSS and JS files are compressed
- [ ] Caching headers working

## 🛠️ Troubleshooting

### Common Issues:

**404 Errors:**
- Check if .htaccess file is uploaded
- Verify file permissions are correct
- Ensure index.html is in the root directory

**Images Not Loading:**
- Check if images folder is uploaded completely
- Verify image file permissions (644)
- Check for case-sensitive file names

**CSS/JS Not Loading:**
- Ensure _next folder is uploaded completely
- Check .htaccess MIME type settings
- Verify file permissions

**Mobile Issues:**
- Clear browser cache
- Test on multiple devices
- Check viewport meta tag in HTML

## 📞 Support Information

**Website**: Sujoy Das - Motivational Speaker & Life Coach
**Target Location**: Kolkata, West Bengal, India
**Main Focus**: 3 Days Change Your Life Workshop

### Key Features:
- ✨ Life & Business Coaching
- ✨ Motivational Speaking
- ✨ Personal Development Workshops
- ✨ Wealth Building Training
- ✨ Mindset Transformation

## 📈 SEO Benefits

This deployment package includes comprehensive SEO optimization:

1. **Local SEO**: Targeted for Kolkata, West Bengal
2. **Keyword Optimization**: 20+ relevant keywords
3. **Technical SEO**: Proper meta tags, structured data
4. **Social Media Ready**: OpenGraph and Twitter Cards
5. **Performance Optimized**: Fast loading times
6. **Mobile-First**: Responsive design for all devices

## 🔒 Security Features

- XSS Protection headers
- Content Type validation
- Frame options protection
- HTTPS redirects (when SSL enabled)
- Sensitive file protection
- Hotlinking prevention (optional)

---

**Deployment Package Created**: $(date)
**Next.js Version**: 15.3.4
**Status**: Production Ready ✅ 
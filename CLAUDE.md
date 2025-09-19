# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for **Sujoy Das - Motivational Speaker & Life Coach** built with Next.js and exported as static files for cPanel hosting. The site promotes the "2 Days Win Your Life Workshop" in West Bengal, India.

## Architecture & Structure

- **Framework**: Next.js with static export
- **Deployment**: Static files served via cPanel hosting
- **Build Output**: `_next/` directory contains optimized static assets
- **Pages**: Home page showcasing workshop, speaker profile, and registration
- **Assets**: `images/`, `logos/`, `videos/` contain media files

## Key Technical Components

### Static Export Configuration
- Next.js configured for static export targeting cPanel hosting
- All dynamic routes pre-rendered at build time
- Assets optimized for production deployment

### Content Structure
- Main landing page with hero video background
- Workshop information and speaker profile
- Social media integration (Facebook, YouTube, Instagram, Twitter, LinkedIn)
- Contact/registration forms for workshop enrollment

### SEO & Performance
- Comprehensive meta tags and structured data (JSON-LD)
- OpenGraph and Twitter Cards for social sharing
- Geographic targeting for West Bengal/Kolkata market
- Performance optimized with image compression and caching

## Deployment Process

### Build Commands
Since this is a static export, no build commands are needed - the site is already built in the `_next/` directory.

### Deployment to cPanel
1. Upload contents to `public_html` directory
2. Ensure `.htaccess` file is properly configured
3. Set file permissions: Files (644), Directories (755)
4. Reference: `CPANEL_DEPLOYMENT_GUIDE.md` for detailed instructions

### Important Files
- `.htaccess` - Apache configuration with security headers, compression, and caching
- `index.html` - Main page with complete site content
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine directives
- `manifest.json` - PWA configuration

## Content Management

### Profile Images
- Main profile: `/images/profile-img.png`
- Logo assets: `/logos/sujoydaslogo.png`
- Background videos: `/videos/IMG_0846.mp4`

### Social Media Links
- Facebook: https://www.facebook.com/SUJOYDASMOTIVATION
- YouTube: https://www.youtube.com/@sujoydasmotivation
- Instagram: https://www.instagram.com/sujoydasmotivation/
- LinkedIn: https://in.linkedin.com/in/sujoy-das-motivation-838a1a28a

### Target Keywords
Motivational speaker, life coach, personal development, workshop, West Bengal, Kolkata, life transformation, mindset coach, wealth coach, "2 Days Win Your Life"

## Security Configuration

The `.htaccess` file includes comprehensive security headers:
- X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- Content Security Policy for trusted domains
- File access restrictions for sensitive files
- Performance optimizations (compression, caching, ETags)

## Working with This Codebase

### Making Content Updates
1. Modify the static HTML files directly
2. Update images in the respective `/images/` or `/logos/` directories
3. Test changes locally before deployment
4. Upload modified files to cPanel

### SEO Updates
- Update meta tags in `index.html`
- Modify structured data JSON-LD sections
- Update `sitemap.xml` if adding new pages
- Adjust `.htaccess` caching rules if needed

### Performance Considerations
- Images are already optimized for web
- Video assets are compressed for streaming
- CSS and JS are minified in production build
- Caching headers set for 1 year on static assets
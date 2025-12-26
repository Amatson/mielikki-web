# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Domain name (optional, but recommended)

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository"
3. Name it `mielikki-web` (or any name you prefer)
4. Make it public
5. DO NOT initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

Open terminal in your project directory and run:

```bash
cd /Users/matti/Programming/mielikki-web

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Mielikki veterinary clinic website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/mielikki-web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "main" branch
5. Keep the folder as "/ (root)"
6. Click "Save"
7. Wait a few minutes for deployment

Your site will be available at: `https://YOUR_USERNAME.github.io/mielikki-web/`

## Step 4: Configure Custom Domain (Optional)

### If you own mielikkivet.fi domain:

1. In GitHub repository settings > Pages
2. Enter your custom domain: `mielikkivet.fi`
3. Check "Enforce HTTPS" (after DNS propagates)

### Configure DNS with your domain registrar:

Add these DNS records:

**For apex domain (mielikkivet.fi):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

DNS changes can take up to 24-48 hours to propagate.

## Step 5: Test Your Website

1. Visit your GitHub Pages URL
2. Test language switching (FI/EN/SV buttons)
3. Test responsive design on mobile/tablet
4. Check all links work
5. Test contact form
6. Verify images load correctly

## Step 6: Replace Placeholder Images

Before going live, replace all SVG placeholders with actual photos:

1. Obtain professional veterinary images
2. Optimize them (compress, resize)
3. Replace in `/images/` directory
4. Update file extensions in code if needed
5. Commit and push changes

## Updating Content

### To update blog posts:
1. Edit `blog-posts.js`
2. Commit and push changes
```bash
git add blog-posts.js
git commit -m "Add new blog post"
git push
```

### To update translations:
1. Edit `translations.js`
2. Commit and push changes
```bash
git add translations.js
git commit -m "Update translations"
git push
```

### To update services or pages:
1. Edit `index.html`
2. Commit and push changes
```bash
git add index.html
git commit -m "Update services section"
git push
```

## SEO Verification

After deployment, verify:

1. Submit sitemap to Google Search Console:
   - `https://mielikkivet.fi/sitemap.xml`

2. Verify robots.txt is accessible:
   - `https://mielikkivet.fi/robots.txt`

3. Test structured data:
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your URL

4. Check mobile-friendliness:
   - Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Monitoring & Analytics

Consider adding:

1. **Google Analytics** - Track visitor behavior
2. **Google Search Console** - Monitor search performance
3. **Facebook Pixel** - Track social media traffic

Add tracking codes before closing `</head>` tag in index.html.

## Troubleshooting

### Site not loading:
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository is public
- Verify branch name is correct

### Custom domain not working:
- Check DNS records are correct
- Wait for DNS propagation (24-48 hours)
- Verify CNAME file contains correct domain

### Images not loading:
- Check file paths are relative (./images/)
- Verify image files exist in repository
- Check file extensions match (case-sensitive)

### 404 errors:
- Ensure all files are committed and pushed
- Check .nojekyll file exists
- Verify paths don't have leading slash

## Security

- HTTPS is automatically provided by GitHub Pages
- No server-side code = no server vulnerabilities
- Contact form submits client-side (consider backend service)

## Performance Optimization

To improve loading times:

1. Compress images (use tools like TinyPNG)
2. Minify CSS and JavaScript
3. Enable browser caching (automatic with GitHub Pages)
4. Use CDN for assets (optional)

## Backup

Always keep local backup:
```bash
# Clone repository to backup location
git clone https://github.com/YOUR_USERNAME/mielikki-web.git backup-mielikki-web
```

## Support

For issues:
1. Check GitHub Pages [documentation](https://docs.github.com/pages)
2. Review repository Issues tab
3. Contact GitHub Support

---

**Note**: This website is a static demo. For production use, consider:
- Implementing a backend for the contact form
- Adding a CMS for easier content management
- Integrating online booking system
- Adding user authentication for admin features

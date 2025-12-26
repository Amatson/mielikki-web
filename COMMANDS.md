# Quick Commands Reference

Handy commands for managing the Mielikki website.

## 🚀 Local Development

### Start Local Server
```bash
# Option 1: Using Python 3 (recommended)
python3 -m http.server 8000

# Option 2: Using the provided script
./start-server.sh

# Option 3: Using Node.js
npx http-server

# Option 4: Using PHP
php -S localhost:8000

# Then open: http://localhost:8000
```

### Open in Browser
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## 📦 Git Commands

### Initial Setup
```bash
# Initialize repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Mielikki veterinary website"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/mielikki-web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Daily Workflow
```bash
# Check status
git status

# Add specific file
git add filename.html

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Useful Git Commands
```bash
# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# Create a branch
git branch feature-name
git checkout feature-name

# Switch back to main
git checkout main

# Merge branch
git merge feature-name
```

## 🖼️ Image Optimization

### Using ImageOptim (macOS)
```bash
# Install via Homebrew
brew install imageoptim

# Optimize all images
imageoptim images/*.jpg
```

### Using ImageMagick
```bash
# Install
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Resize image
convert input.jpg -resize 800x600 output.jpg

# Compress image
convert input.jpg -quality 85 output.jpg

# Batch resize all images
for img in images/*.jpg; do
  convert "$img" -resize 800x600 "$img"
done
```

### Using Online Tools
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Compressor.io: https://compressor.io/

## 🔍 Testing & Validation

### Validate HTML
```bash
# Using online validator
open https://validator.w3.org/

# Using npm package
npm install -g html-validator-cli
html-validator --file=index.html
```

### Validate CSS
```bash
# Using online validator
open https://jigsaw.w3.org/css-validator/

# Using npm package
npm install -g css-validator
css-validator styles.css
```

### Check Links
```bash
# Using npm package
npm install -g broken-link-checker
blc http://localhost:8000 -ro
```

### Lighthouse Audit
```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:8000 --view
```

## 📊 Analytics & SEO

### Submit to Search Engines
```bash
# Google Search Console
open https://search.google.com/search-console

# Bing Webmaster Tools
open https://www.bing.com/webmasters
```

### Test SEO
```bash
# Test structured data
open https://search.google.com/test/rich-results

# Test mobile-friendliness
open https://search.google.com/test/mobile-friendly

# PageSpeed Insights
open https://pagespeed.web.dev/
```

## 🔄 Backup Commands

### Create Backup
```bash
# Backup to zip file
zip -r mielikki-backup-$(date +%Y%m%d).zip . -x "*.git*"

# Backup to tar.gz
tar -czf mielikki-backup-$(date +%Y%m%d).tar.gz --exclude='.git' .
```

### Restore from Backup
```bash
# From zip
unzip mielikki-backup-20251226.zip -d restored/

# From tar.gz
tar -xzf mielikki-backup-20251226.tar.gz -C restored/
```

## 🧹 Maintenance

### Remove Placeholder Files
```bash
# Remove SVG placeholders (after replacing with real images)
rm images/*.svg

# Or keep specific ones
rm images/blog-*.svg images/vaccination.svg
```

### Clean Git History
```bash
# Remove file from git history
git rm --cached filename.ext
git commit -m "Remove filename"
git push
```

### Update Dependencies (if using npm)
```bash
# Update all packages
npm update

# Check for outdated packages
npm outdated
```

## 📱 Testing on Devices

### Test on Mobile via Local Network
```bash
# 1. Start local server
python3 -m http.server 8000

# 2. Find your IP address
# macOS/Linux:
ifconfig | grep "inet "

# 3. On mobile, visit:
# http://YOUR_IP:8000
```

### Using BrowserSync for Live Reload
```bash
# Install BrowserSync
npm install -g browser-sync

# Start with live reload
browser-sync start --server --files "*.html, *.css, *.js"
```

## 🔐 Security Checks

### Check for Secrets
```bash
# Install git-secrets
brew install git-secrets

# Scan for secrets
git secrets --scan
```

### Update URLs for HTTPS
```bash
# Find all http:// URLs
grep -r "http://" *.html *.css *.js

# Replace with https:// (after verification)
sed -i '' 's/http:/https:/g' index.html
```

## 📦 Deployment

### Deploy to GitHub Pages
```bash
# 1. Commit all changes
git add .
git commit -m "Ready for deployment"

# 2. Push to GitHub
git push origin main

# 3. Wait for GitHub Actions to complete
# 4. Visit your site
```

### Force Rebuild GitHub Pages
```bash
# Create empty commit to trigger rebuild
git commit --allow-empty -m "Trigger rebuild"
git push
```

## 🎨 Development Tools

### Live Editing with VS Code
```bash
# Install Live Server extension
code --install-extension ritwickdey.liveserver

# Then right-click index.html and select "Open with Live Server"
```

### Prettier for Code Formatting
```bash
# Install Prettier
npm install -g prettier

# Format all files
prettier --write "*.{html,css,js}"
```

## 📝 Content Management

### Count Words in Blog Posts
```bash
# Count all words in blog posts file
wc -w blog-posts.js

# Count specific sections
grep -o '"content":' blog-posts.js | wc -l
```

### Find and Replace Text
```bash
# Find text in all files
grep -r "old text" .

# Replace in specific file (macOS)
sed -i '' 's/old text/new text/g' index.html

# Replace in specific file (Linux)
sed -i 's/old text/new text/g' index.html
```

## 🐛 Debugging

### Check JavaScript Errors
```bash
# Using Node.js
node script.js

# Check syntax
node --check script.js
```

### Validate JSON Files
```bash
# Check JSON syntax
python3 -m json.tool schema.json

# Or using Node.js
node -e "console.log(JSON.parse(require('fs').readFileSync('schema.json')))"
```

## 📊 Statistics

### Count Lines of Code
```bash
# All project files
find . -name "*.html" -o -name "*.css" -o -name "*.js" | xargs wc -l

# Specific file types
wc -l *.html
wc -l *.css
wc -l *.js
```

### Count Images
```bash
# Count all images
ls images/ | wc -l

# Show image sizes
du -sh images/*
```

---

## 🎯 Quick Reference Card

| Task | Command |
|------|---------|
| Start server | `python3 -m http.server 8000` |
| Add all changes | `git add .` |
| Commit | `git commit -m "message"` |
| Push to GitHub | `git push` |
| Check status | `git status` |
| View in browser | `open index.html` |
| Count lines | `wc -l *.html` |
| Find text | `grep -r "text" .` |

---

**Pro Tip**: Create aliases in your `~/.zshrc` or `~/.bashrc`:
```bash
alias serve='python3 -m http.server 8000'
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
```

Then you can use: `serve`, `gs`, `ga`, `gc "message"`, `gp`

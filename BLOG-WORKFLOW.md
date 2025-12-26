# Blog Publishing Workflow

## How Netlify CMS Creates Blog Posts (For Technical Users)

This document explains the complete workflow from creating a blog post in Netlify CMS to it appearing on the live website.

## Architecture Overview

```
Netlify CMS (Admin Interface)
        ↓
    Markdown Files (_posts/*.md)
        ↓
    Git Commit → GitHub Repository
        ↓
    Netlify Build Trigger
        ↓
    generate-blog-pages.js Script
        ↓
    HTML Pages (blog/post-*.html)
        ↓
    Live Website
```

## Detailed Workflow

### 1. Content Creation (CMS)

**Location:** `https://mielikkivet.fi/admin`

Veterinarians use the visual editor to:
- Fill in blog post form fields
- Upload images
- Write content in Finnish, English, and Russian
- Save as draft or publish immediately

### 2. File Generation (CMS → Git)

When "Publish" is clicked, Netlify CMS:
- Creates a markdown file: `_posts/YYYY-MM-DD-slug.md`
- Includes frontmatter with metadata:
  ```yaml
  ---
  id: 7
  author: ELL Julia Haukilintu
  date: 2025-12-26
  image: /images/blog/new-post.jpg
  title_fi: Finnish Title
  title_en: English Title
  title_ru: Russian Title
  excerpt_fi: Finnish excerpt...
  excerpt_en: English excerpt...
  excerpt_ru: Russian excerpt...
  body_fi: |
    Finnish content with markdown...
  body_en: |
    English content...
  body_ru: |
    Russian content...
  ---
  ```
- Commits the file to GitHub via Git Gateway

### 3. Build Process (Netlify)

Netlify detects the Git commit and:

1. **Pulls latest code** from GitHub
2. **Runs build command** (defined in `netlify.toml`):
   ```bash
   node generate-blog-pages.js
   ```
3. **Deploys** the updated site

### 4. Page Generation (Node.js Script)

The `generate-blog-pages.js` script:

1. **Reads** all `.md` files from `_posts/` folder
2. **Parses** frontmatter and markdown content
3. **Converts** markdown to HTML:
   - Headers: `## Title` → `<h2>Title</h2>`
   - Bold: `**text**` → `<strong>text</strong>`
   - Lists, links, blockquotes, etc.
4. **Generates** HTML files: `blog/post-{id}.html`
5. **Includes** multilingual content and language switcher

### 5. Frontend Display (Website)

The main site (`index.html`):
- Displays blog cards from `blog-posts.js`
- "Read more" button links to `blog/post-{id}.html`
- Individual pages load with full content in all languages

## File Structure

```
mielikki-web/
├── admin/
│   ├── index.html              # CMS interface
│   └── config.yml              # CMS configuration
├── _posts/                     # Markdown source files (CMS creates these)
│   ├── 2025-12-15-winter-cat-care.md
│   ├── 2025-12-10-cat-vaccinations.md
│   └── ...
├── blog/                       # Generated HTML pages
│   ├── post-1.html
│   ├── post-2.html
│   └── ...
├── images/blog/                # Uploaded blog images
├── generate-blog-pages.js      # Build script
├── netlify.toml                # Netlify configuration
└── blog-posts.js               # Blog metadata for homepage
```

## Manual Testing

To test the build process locally:

```bash
# 1. Create or edit a markdown file in _posts/
# 2. Run the generator
node generate-blog-pages.js

# 3. Open the generated page
open blog/post-{id}.html
```

## Updating blog-posts.js

**Important:** When new posts are created via CMS, you also need to update `blog-posts.js` so they appear on the homepage.

### Option 1: Manual Update (Current)
Edit `blog-posts.js` and add the new post to the `blogPosts` array.

### Option 2: Automated Update (Recommended)
Modify `generate-blog-pages.js` to also regenerate `blog-posts.js` from the markdown files.

## Troubleshooting

### Post created but not visible on homepage
**Cause:** `blog-posts.js` not updated  
**Solution:** Add the post metadata to `blog-posts.js`

### Post page shows old content
**Cause:** Build script didn't run or failed  
**Solution:** Check Netlify build logs

### Images not loading
**Cause:** Image path incorrect in markdown  
**Solution:** Ensure images use `/images/blog/` prefix

### Markdown formatting not working
**Cause:** Unsupported markdown syntax  
**Solution:** Use basic markdown (headings, bold, lists, links)

## Future Improvements

1. **Auto-update blog-posts.js**: Generate from markdown files
2. **Better markdown parser**: Support tables, code blocks, etc.
3. **Image optimization**: Compress uploaded images
4. **SEO automation**: Generate meta tags from content
5. **Search functionality**: Index blog posts for search

## Security Notes

- CMS is protected by Netlify Identity (invite-only)
- Git Gateway requires authentication
- All content stored in Git (version control)
- No database required (JAMstack architecture)

## Summary

✅ **For Veterinarians:** Just use the CMS - everything else is automatic  
✅ **For Developers:** Understand the build process for maintenance  
✅ **For Content:** Written once in markdown, displayed in HTML  
✅ **For Deployment:** Fully automated via Netlify

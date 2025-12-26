# Netlify CMS Setup Guide

## What is Netlify CMS?

Netlify CMS (now called Decap CMS) is a content management system that provides a user-friendly admin interface for managing your website's blog posts. It's perfect for non-technical users who need to create and edit content without knowing HTML or Markdown.

## Features

✅ **Visual Editor** - WYSIWYG interface like Microsoft Word  
✅ **Multilingual Support** - Manage Finnish, English, and Russian content  
✅ **Image Upload** - Drag and drop cat photos  
✅ **No Code Required** - Simple forms for creating blog posts  
✅ **Editorial Workflow** - Draft → Review → Publish process  
✅ **Git-Based** - All changes saved to GitHub automatically  

## Setup Instructions

### Step 1: Enable Netlify Identity

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your `mielikki-web` site
3. Click **Identity** in the top menu
4. Click **Enable Identity**

### Step 2: Configure Git Gateway

1. In the Identity tab, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows CMS users to save content directly to GitHub

### Step 3: Invite Users

1. In the Identity tab, click **Invite users**
2. Enter email addresses for:
   - ELL Julia Haukilintu
   - Sairaanhoitaja Suvi Kukanaho
   - Sairaanhoitaja Susanna Torsti
3. They'll receive invitation emails

### Step 4: Configure Registration

1. In Identity settings, go to **Registration preferences**
2. Select **Invite only** (for security)
3. Save changes

### Step 5: Set External Providers (Optional)

If you want users to login with Google/GitHub:

1. Go to Identity → **Settings and usage**
2. Click **External providers**
3. Add Google or GitHub OAuth

## Using the CMS

### Accessing the Admin Panel

Once deployed to Netlify, veterinary staff can access:

```
https://your-site.netlify.app/admin
```

Or with custom domain:

```
https://mielikkivet.fi/admin
```

### Creating a New Blog Post

1. Login at `/admin`
2. Click **Blog Posts** in the sidebar
3. Click **New Blog Post** button
4. Fill in the form:
   - **Post ID**: Unique number (7, 8, 9, etc.)
   - **Author**: Select from dropdown
   - **Date**: Choose publication date
   - **Featured Image**: Upload a cat photo
   - **Title (Finnish)**: Finnish title
   - **Title (English)**: English title
   - **Title (Russian)**: Russian title
   - **Excerpt (Finnish/English/Russian)**: Short summaries
   - **Content (Finnish/English/Russian)**: Full articles with markdown formatting

5. Click **Save** (saves as draft)
6. Click **Publish** → **Publish now** (makes it live)

### Markdown Formatting Tips

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

> Quote or important note

[Link text](https://example.com)

![Image alt text](/images/photo.jpg)
```

### Editorial Workflow

The CMS supports a Draft → Review → Publish workflow:

- **Draft**: Work in progress, not published
- **In Review**: Ready for review by another team member
- **Ready**: Approved and ready to publish

## Files Structure

```
mielikki-web/
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
├── _posts/                 # Blog post markdown files
│   ├── 2025-12-15-winter-cat-care.md
│   ├── 2025-12-10-cat-vaccinations.md
│   ├── 2025-12-05-cat-dental-care.md
│   ├── 2025-11-28-cat-nutrition.md
│   ├── 2025-11-20-senior-cat-care.md
│   └── 2025-11-15-cat-behavior.md
└── images/blog/            # Uploaded blog images
```

## Troubleshooting

### Users can't login
- Make sure Netlify Identity is enabled
- Check that users have been invited
- Verify Git Gateway is enabled

### Changes not appearing on site
- Check that the post is **Published** (not in Draft)
- Wait 1-2 minutes for Netlify to rebuild the site
- Check the Netlify deploy logs

### Can't upload images
- Check that `media_folder` path is correct in `config.yml`
- Ensure user has write permissions

## Support

For technical assistance:
- Netlify CMS Documentation: https://decapcms.org/docs/
- Netlify Identity Docs: https://docs.netlify.com/visitor-access/identity/

## Next Steps

After enabling Netlify Identity and Git Gateway:

1. Deploy the site to Netlify (push to GitHub)
2. Invite veterinary staff via email
3. They create accounts and login at `/admin`
4. Start creating blog posts!

The admin interface is now ready to use! 🎉

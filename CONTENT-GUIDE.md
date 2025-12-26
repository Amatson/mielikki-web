# Content Management Guide

This guide helps non-technical users update website content.

## 🎯 Quick Reference

| What to Update | File to Edit | Difficulty |
|---------------|--------------|------------|
| Blog posts | `blog-posts.js` | Easy ⭐ |
| Text translations | `translations.js` | Easy ⭐ |
| Services | `index.html` | Medium ⭐⭐ |
| Contact info | `index.html` | Easy ⭐ |
| Colors | `styles.css` | Medium ⭐⭐ |
| Images | `images/` folder | Easy ⭐ |

## 📝 Adding a New Blog Post

### Step 1: Prepare Your Content
Write your blog post in three languages:
- Finnish (fi)
- English (en)
- Swedish (sv)

### Step 2: Get an Image
- Find or create an image (600x400px recommended)
- Save it in the `images/` folder
- Name it descriptively (e.g., `blog-spring-tips.jpg`)

### Step 3: Edit blog-posts.js
Open `blog-posts.js` and add your new post at the end of the array (before the closing `];`):

```javascript
    {
        id: 7,  // Increment from the last post
        image: "./images/blog-your-image.jpg",
        date: "2025-12-26",  // Use YYYY-MM-DD format
        author: "Dr. Your Name",
        title: {
            fi: "Kevään lemmikinhoito-vinkit",
            en: "Spring Pet Care Tips",
            sv: "Vårens husdjursvårdstips"
        },
        excerpt: {
            fi: "Kevät tuo mukanaan uusia haasteita...",
            en: "Spring brings new challenges...",
            sv: "Våren medför nya utmaningar..."
        },
        content: {
            fi: "Täydellinen sisältö suomeksi...",
            en: "Full content in English...",
            sv: "Fullständigt innehåll på svenska..."
        }
    },
```

**Important**: Don't forget the comma after the closing `}` if there are more posts after it!

## 🌐 Updating Translations

### To Change Existing Text
Open `translations.js` and find the key you want to update:

```javascript
translations = {
    fi: {
        hero_title: "Lemmikkisi luottoeläinlääkäri",  // Update this
        // ...
    },
    en: {
        hero_title: "Your Pet's Trusted Veterinarian",  // And this
        // ...
    },
    sv: {
        hero_title: "Din Husdjurs Pålitliga Veterinär",  // And this
        // ...
    }
}
```

### To Add New Translatable Text
1. Add the key to all three language sections
2. Use the key in your HTML with `data-i18n="your_key"`

## 📞 Updating Contact Information

### Phone Number
Find and replace in `index.html`:
```html
<!-- Change this: -->
<a href="tel:+358401234567">+358 40 123 4567</a>

<!-- To your number: -->
<a href="tel:+358401234567">+358 40 123 4567</a>
```

**Note**: The `tel:` link should have no spaces, but display can have spaces.

### Email Address
Find and replace:
```html
<a href="mailto:info@mielikkivet.fi">info@mielikkivet.fi</a>
```

### Address
Find and replace in `index.html`:
```html
<p>Metsätie 15, Helsinki</p>
```

### Opening Hours
Find in `index.html` and update:
```html
<p data-i18n="contact_hours_weekdays">Maanantai - Perjantai: 08:00 - 18:00</p>
```

Also update in `translations.js`:
```javascript
contact_hours_weekdays: "Maanantai - Perjantai: 08:00 - 18:00",
```

## 🎨 Changing Colors

Open `styles.css` and find the `:root` section at the top:

```css
:root {
    --primary-color: #2c5f2d;     /* Main green */
    --secondary-color: #97bc62;   /* Light green */
    --accent-color: #ff6b35;      /* Orange for buttons */
    --text-dark: #2d3436;         /* Dark text */
    --text-light: #636e72;        /* Light text */
    --background-light: #f8f9fa;  /* Page background */
    --white: #ffffff;
}
```

Change the hex color codes to your preferred colors.

### Color Picker Tool
Use an online color picker: https://htmlcolorcodes.com/color-picker/

## 🖼️ Replacing Images

### Step 1: Prepare Your Image
- Resize to recommended dimensions (see `images/README.md`)
- Compress to reduce file size (<200KB ideal)
- Use JPG for photos, PNG for graphics with transparency

### Step 2: Name Your File
Use the same name as the placeholder:
- `mielikki-logo.jpg` (500x500px)
- `hero-background.jpg` (1920x1080px)
- `vaccination.jpg` (600x400px)
- etc.

### Step 3: Replace the File
1. Save your new image in the `images/` folder
2. Name it exactly as the old file (or update references)
3. Delete the old placeholder if using same name

### Step 4: Update HTML (if changing filename)
If you changed the filename, update references in `index.html`:

```html
<!-- Before: -->
<img src="./images/vaccination.svg" alt="Vaccinations">

<!-- After: -->
<img src="./images/vaccination.jpg" alt="Vaccinations">
```

## 🔄 Publishing Changes

### Using Git (Recommended)
```bash
# 1. Save your changes in editor
# 2. Open terminal/command prompt
# 3. Navigate to website folder
cd /path/to/mielikki-web

# 4. Check what changed
git status

# 5. Add your changes
git add .

# 6. Commit with message
git commit -m "Updated blog post and contact info"

# 7. Push to GitHub
git push

# 8. Wait 2-5 minutes for deployment
```

### Using GitHub Website
1. Go to your repository on GitHub.com
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait 2-5 minutes for deployment

## ⚠️ Common Mistakes to Avoid

### 1. Missing Commas in JavaScript
❌ Wrong:
```javascript
{
    id: 1,
    title: "Post 1"
}  // Missing comma!
{
    id: 2,
    title: "Post 2"
}
```

✅ Correct:
```javascript
{
    id: 1,
    title: "Post 1"
},  // Comma here!
{
    id: 2,
    title: "Post 2"
}
```

### 2. Breaking HTML Tags
❌ Wrong:
```html
<a href="mailto:email@example.com>Email</a>  <!-- Missing closing quote -->
```

✅ Correct:
```html
<a href="mailto:email@example.com">Email</a>
```

### 3. Wrong Image Paths
❌ Wrong:
```html
<img src="images/logo.jpg">  <!-- Missing ./ -->
<img src="/images/logo.jpg"> <!-- Wrong for GitHub Pages -->
```

✅ Correct:
```html
<img src="./images/logo.jpg">
```

### 4. Forgetting All Languages
When updating text, remember to update all three languages:
- Finnish (fi)
- English (en)
- Swedish (sv)

## 🆘 Troubleshooting

### "Website looks broken after my changes"
1. Check browser console for errors (F12 key)
2. Verify you didn't miss any commas or quotes
3. Make sure all HTML tags are closed
4. Revert your changes and try again

### "Changes not showing on live site"
1. Wait 5-10 minutes after pushing to GitHub
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check if changes are visible on GitHub
4. Verify you pushed to the correct branch (main)

### "Images not loading"
1. Check file path is correct (`./images/filename.jpg`)
2. Verify file exists in images folder
3. Check filename matches exactly (case-sensitive)
4. Ensure file was committed and pushed to GitHub

## 📚 Learning Resources

### HTML
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)

### CSS
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [CSS-Tricks](https://css-tricks.com/)

### JavaScript
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)

### Git/GitHub
- [GitHub Guides](https://guides.github.com/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

## 📞 Need Help?

If you get stuck:
1. Check this guide again
2. Search for the error message online
3. Check the GitHub repository Issues tab
4. Ask a developer friend
5. Hire a web developer for complex changes

## ✅ Content Update Checklist

Before publishing content updates:

- [ ] Spell-checked all text
- [ ] Updated all three languages
- [ ] Tested changes locally (optional)
- [ ] Committed changes with clear message
- [ ] Pushed to GitHub
- [ ] Waited for deployment
- [ ] Verified changes on live site
- [ ] Checked on mobile device
- [ ] Cleared browser cache if needed

---

**Pro Tip**: Make small changes one at a time. It's easier to fix mistakes when you know exactly what you changed!

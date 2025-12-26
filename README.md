# Mielikki Veterinary Clinic

A modern, multilingual veterinary clinic website built with HTML, CSS, and JavaScript. Optimized for GitHub Pages deployment.

## 🌟 Features

- **Multilingual Support**: Seamlessly switch between Finnish, English, and Swedish
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure
- **Blog System**: Easy-to-manage blog posts with multilingual content
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated appointment booking form
- **GitHub Pages Ready**: Static site deployment ready

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/mielikki-web.git
cd mielikki-web
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save changes

3. Your site will be available at: `https://[your-username].github.io/mielikki-web/`

## 📁 Project Structure

```
mielikki-web/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # Main JavaScript
├── translations.js     # Language translations
├── blog-posts.js       # Blog content
├── images/             # Image assets
│   └── README.md       # Image requirements guide
└── README.md           # This file
```

## 🎨 Customization

### Adding Blog Posts

Edit `blog-posts.js` and add new post objects:

```javascript
{
    id: 7,
    image: "./images/your-image.jpg",
    date: "2025-12-26",
    author: "Dr. Your Name",
    title: {
        fi: "Finnish Title",
        en: "English Title",
        sv: "Swedish Title"
    },
    excerpt: {
        fi: "Finnish excerpt...",
        en: "English excerpt...",
        sv: "Swedish excerpt..."
    },
    content: {
        fi: "Full Finnish content...",
        en: "Full English content...",
        sv: "Full Swedish content..."
    }
}
```

### Updating Translations

Modify `translations.js` to add or change text:

```javascript
translations = {
    fi: {
        key_name: "Finnish text",
        // ...
    },
    en: {
        key_name: "English text",
        // ...
    },
    sv: {
        key_name: "Swedish text",
        // ...
    }
}
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bc62;
    --accent-color: #ff6b35;
}
```

### Adding Images

1. Add images to the `images/` directory
2. See `images/README.md` for specifications
3. Update image references in HTML/JS files

## 🌐 Multilingual Support

The website supports three languages:
- **Finnish (FI)** - Default language
- **English (EN)**
- **Swedish (SV)**

Language switching is handled client-side with JavaScript. All content is stored in `translations.js` and `blog-posts.js`.

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Canonical URLs
- Alt text for all images
- Proper heading hierarchy
- Fast loading times

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Google Fonts**: Poppins font family

## 📝 Content Management

For easy content updates:

1. **Services**: Edit HTML in `index.html` (Services Section)
2. **About**: Edit HTML in `index.html` (About Section)
3. **Blog**: Edit `blog-posts.js`
4. **Translations**: Edit `translations.js`
5. **Contact Info**: Edit HTML in `index.html` (Contact Section)

## 🎯 Future Enhancements

- Backend integration for contact form
- CMS integration (e.g., Netlify CMS)
- Appointment booking system
- Photo gallery
- Staff profiles page
- Client testimonials
- Online payment integration

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For questions or support, contact: info@mielikkivet.fi

---

**Note**: Remember to add actual images to the `images/` directory before deployment. See `images/README.md` for requirements.

#!/usr/bin/env node

/**
 * Blog Post Generator for Netlify CMS
 * 
 * This script reads markdown files from _posts/ folder (created by Netlify CMS)
 * and generates corresponding HTML pages in the blog/ folder.
 * 
 * Run this script after Netlify CMS creates/updates posts:
 * node generate-blog-pages.js
 */

const fs = require('fs');
const path = require('path');

// Parse frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (!match) return null;
    
    const frontmatter = {};
    const lines = match[1].split('\n');
    let currentKey = null;
    let currentValue = '';
    
    lines.forEach(line => {
        if (line.match(/^[a-z_]+:/)) {
            if (currentKey) {
                frontmatter[currentKey] = currentValue.trim();
            }
            const parts = line.split(':');
            currentKey = parts[0].trim();
            currentValue = parts.slice(1).join(':').trim();
        } else if (line.startsWith('  ') && currentKey) {
            currentValue += '\n' + line.trim();
        }
    });
    
    if (currentKey) {
        frontmatter[currentKey] = currentValue.trim();
    }
    
    const bodyMatch = content.replace(frontmatterRegex, '').trim();
    return { frontmatter, body: bodyMatch };
}

// Convert markdown to HTML (basic)
function markdownToHtml(markdown) {
    if (!markdown) return '';
    
    return markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Blockquotes
        .replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>')
        // Lists
        .replace(/^\- (.+)$/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        // Paragraphs
        .split('\n\n')
        .map(para => para.trim() && !para.startsWith('<') ? `<p>${para}</p>` : para)
        .join('\n');
}

// Generate HTML template for blog post
function generateBlogPostHtml(postData) {
    const { id, author, date, image, title_fi, title_en, title_ru, excerpt_fi, excerpt_en, excerpt_ru, body_fi, body_en, body_ru } = postData;
    
    // Convert markdown to HTML
    const content_fi = markdownToHtml(body_fi);
    const content_en = markdownToHtml(body_en);
    const content_ru = markdownToHtml(body_ru);
    
    return `<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${excerpt_fi}">
    <meta name="keywords" content="kissa, eläinlääkäri, kissanhoito">
    <meta property="og:title" content="${title_fi}">
    <meta property="og:description" content="${excerpt_fi}">
    <meta property="og:type" content="article">
    <link rel="icon" type="image/svg+xml" href="../images/mielikki-logo.svg">
    <title>${title_fi} - Mielikki</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <style>
        .blog-post-page {
            padding: 120px 20px 80px;
            min-height: 100vh;
        }
        .blog-post-container {
            max-width: 800px;
            margin: 0 auto;
        }
        .back-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 30px;
        }
        .back-link:hover {
            color: var(--accent-color);
        }
        .lang-selector {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        .lang-btn {
            padding: 8px 16px;
            border: 2px solid var(--primary-color);
            background: white;
            color: var(--primary-color);
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .lang-btn.active {
            background: var(--primary-color);
            color: white;
        }
        .post-meta {
            margin-bottom: 20px;
            color: #666;
            font-size: 0.9rem;
        }
        .post-title {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 30px;
            line-height: 1.2;
        }
        .post-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 40px;
        }
        .post-content {
            font-size: 1.1rem;
            line-height: 1.8;
        }
        .post-content p {
            margin-bottom: 20px;
        }
        .post-content h2 {
            color: var(--primary-color);
            margin: 40px 0 20px;
            font-size: 1.8rem;
        }
        .post-content h3 {
            color: var(--primary-color);
            margin: 30px 0 15px;
            font-size: 1.4rem;
        }
        .post-content ul {
            margin: 20px 0;
            padding-left: 30px;
        }
        .post-content li {
            margin-bottom: 10px;
        }
        .post-content blockquote {
            border-left: 4px solid var(--accent-color);
            padding: 15px 20px;
            margin: 30px 0;
            background: #f9f9f9;
            font-style: italic;
        }
        .post-content strong {
            color: var(--primary-color);
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .post-title {
                font-size: 2rem;
            }
            .post-image {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">
                <img src="../images/mielikki-logo.svg" alt="Mielikki Logo" style="height: 40px;">
                Mielikki
            </a>
        </div>
    </nav>

    <section class="blog-post-page">
        <div class="blog-post-container">
            <a href="../index.html#blog" class="back-link" id="backLink">← Takaisin blogiin</a>
            
            <div class="lang-selector">
                <button class="lang-btn active" data-lang="fi">FI</button>
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="ru">RU</button>
            </div>

            <div class="post-meta">📅 ${date} | ✍️ ${author}</div>
            <h1 class="post-title" id="postTitle">${title_fi}</h1>
            <img src="${image}" alt="${title_fi}" class="post-image">
            
            <div class="post-content">
                <div data-lang="fi">
                    ${content_fi}
                </div>
                <div data-lang="en" style="display: none;">
                    ${content_en}
                </div>
                <div data-lang="ru" style="display: none;">
                    ${content_ru}
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Mielikki Eläinlääkäriasema</p>
        </div>
    </footer>

    <script>
        const titles = {
            fi: '${title_fi.replace(/'/g, "\\'")}',
            en: '${title_en.replace(/'/g, "\\'")}',
            ru: '${title_ru.replace(/'/g, "\\'")}'
        };
        const backs = { fi: 'Takaisin blogiin', en: 'Back to Blog', ru: 'Назад к блогу' };
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('[data-lang]').forEach(el => {
                    el.style.display = el.dataset.lang === lang ? 'block' : 'none';
                });
                document.getElementById('postTitle').textContent = titles[lang];
                document.getElementById('backLink').textContent = '← ' + backs[lang];
            });
        });

        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    </script>
</body>
</html>`;
}

// Main function
function generateBlogPages() {
    const postsDir = path.join(__dirname, '_posts');
    const blogDir = path.join(__dirname, 'blog');
    
    // Ensure blog directory exists
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }
    
    // Read all markdown files from _posts
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    
    console.log(`Found ${files.length} blog posts to process...\n`);
    
    files.forEach((file, index) => {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = parseFrontmatter(content);
        
        if (!parsed) {
            console.log(`❌ Skipped ${file} - invalid frontmatter`);
            return;
        }
        
        const { frontmatter } = parsed;
        
        // Extract data from frontmatter
        const postData = {
            id: frontmatter.id || (index + 1),
            author: frontmatter.author || 'Unknown',
            date: frontmatter.date || new Date().toISOString().split('T')[0],
            image: frontmatter.image || '../images/placeholder.svg',
            title_fi: frontmatter.title_fi || 'Untitled',
            title_en: frontmatter.title_en || 'Untitled',
            title_ru: frontmatter.title_ru || 'Без названия',
            excerpt_fi: frontmatter.excerpt_fi || '',
            excerpt_en: frontmatter.excerpt_en || '',
            excerpt_ru: frontmatter.excerpt_ru || '',
            body_fi: (frontmatter.body_fi || '').replace(/^\|/gm, '').trim(),
            body_en: (frontmatter.body_en || '').replace(/^\|/gm, '').trim(),
            body_ru: (frontmatter.body_ru || '').replace(/^\|/gm, '').trim()
        };
        
        // Generate HTML
        const html = generateBlogPostHtml(postData);
        
        // Write to blog/post-X.html
        const outputFile = path.join(blogDir, `post-${postData.id}.html`);
        fs.writeFileSync(outputFile, html, 'utf8');
        
        console.log(`✅ Generated blog/post-${postData.id}.html - ${postData.title_fi}`);
    });
    
    console.log(`\n✨ Successfully generated ${files.length} blog post pages!`);
}

// Run the generator
try {
    generateBlogPages();
} catch (error) {
    console.error('❌ Error generating blog pages:', error.message);
    process.exit(1);
}

// Main JavaScript for Mielikki Veterinary Clinic Website

// Global state
let currentLanguage = 'fi';
let displayedBlogPosts = 3;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeNavigation();
    loadBlogPosts();
    initializeContactForm();
    updateLanguage(currentLanguage);
    initializeSmoothScrolling();
});

// Language Switcher
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLanguage = lang;
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update page content
            updateLanguage(lang);
            
            // Reload blog posts with new language
            loadBlogPosts();
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        });
    });
}

// Update all translatable content
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Mobile Navigation
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Blog Posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Clear existing posts
    blogGrid.innerHTML = '';
    
    // Load posts up to displayedBlogPosts
    const postsToShow = blogPosts.slice(0, displayedBlogPosts);
    
    postsToShow.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
    
    // Show/hide load more button
    if (displayedBlogPosts >= blogPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
    
    // Load more button event
    loadMoreBtn.addEventListener('click', function() {
        displayedBlogPosts += 3;
        loadBlogPosts();
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    
    const title = post.title[currentLanguage] || post.title.fi;
    const excerpt = post.excerpt[currentLanguage] || post.excerpt.fi;
    const readMoreText = translations[currentLanguage].read_more || 'Lue lisää';
    
    card.innerHTML = `
        <img src="${post.image}" alt="${title}" onerror="this.src='./images/placeholder.svg'">
        <div class="blog-content">
            <div class="blog-meta">
                <span>📅 ${formatDate(post.date)}</span>
                <span>✍️ ${post.author}</span>
            </div>
            <h3>${title}</h3>
            <p>${excerpt}</p>
            <a href="#" class="read-more" onclick="showBlogPost(${post.id}); return false;">${readMoreText} →</a>
        </div>
    `;
    
    return card;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    if (currentLanguage === 'fi') {
        return date.toLocaleDateString('fi-FI', options);
    } else if (currentLanguage === 'en') {
        return date.toLocaleDateString('en-US', options);
    } else if (currentLanguage === 'ru') {
        return date.toLocaleDateString('ru-RU', options);
    }
    return date.toLocaleDateString();
}

function showBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const title = post.title[currentLanguage] || post.title.fi;
    const content = post.content[currentLanguage] || post.content.fi;
    
    // Create modal or alert with full content
    alert(`${title}\n\n${content}\n\nAuthor: ${post.author}\nDate: ${formatDate(post.date)}`);
    
    // In a production environment, you would create a proper modal or navigate to a dedicated blog post page
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('bookingForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        let successMessage;
        if (currentLanguage === 'fi') {
            successMessage = 'Kiitos yhteydenotostasi! Otamme sinuun yhteyttä pian.';
        } else if (currentLanguage === 'en') {
            successMessage = 'Thank you for contacting us! We will get back to you soon.';
        } else if (currentLanguage === 'ru') {
            successMessage = 'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.';
        }
        
        alert(successMessage);
        form.reset();
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .blog-card, .info-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

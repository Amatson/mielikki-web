#!/bin/bash

# Script to generate individual blog post HTML pages from blog-posts.js data

# Blog post data
declare -A posts

# Post 1: Winter Cat Care
posts[1_id]="1"
posts[1_slug]="winter-cat-care"
posts[1_date]="15.12.2025"
posts[1_author]="ELL Julia Haukilintu"
posts[1_image]="../images/blog-winter-care.svg"
posts[1_title_fi]="Talvikauden kissanhoito-oppaat"
posts[1_title_en]="Winter Season Cat Care Guides"
posts[1_title_ru]="Руководства по уходу за кошками зимой"
posts[1_content_fi]="<p>Talvikausi vaatii erityistä huomiota kissojen hoitoon. Sisäkissat kärsivät usein kuivasta ilmasta, mikä voi aiheuttaa ihon kuivuutta ja tassujen halkeilua. Ulkona liikkuvien kissojen tassujen kuntoa tulee seurata erityisen tarkasti.</p><p>Varmista, että kissallasi on lämpimät lepopaikat ja riittävästi vettä saatavilla, sillä kuiva sisäilma lisää nesteytystarvetta. Talvisin kissat voivat olla vähemmän aktiivisia, joten kiinnitä huomiota myös liikunnan ja painonhallinnan tasapainoon.</p>"
posts[1_content_en]="<p>The winter season requires special attention to cat care. Indoor cats often suffer from dry air, which can cause dry skin and cracked paws. The paw condition of outdoor cats should be monitored especially carefully.</p><p>Make sure your cat has warm resting places and plenty of water available, as dry indoor air increases the need for hydration. In winter, cats may be less active, so also pay attention to the balance between exercise and weight management.</p>"
posts[1_content_ru]="<p>Зимний сезон требует особого внимания к уходу за кошками. Домашние кошки часто страдают от сухого воздуха, который может вызвать сухость кожи и трещины на лапах. Состояние лап уличных кошек следует контролировать особенно внимательно.</p><p>Убедитесь, что у вашей кошки есть теплые места для отдыха и много воды, так как сухой воздух в помещении увеличивает потребность в гидратации. Зимой кошки могут быть менее активными, поэтому также обратите внимание на баланс между физическими упражнениями и контролем веса.</p>"

# Post 2: Vaccinations
posts[2_id]="2"
posts[2_slug]="cat-vaccinations"
posts[2_date]="10.12.2025"
posts[2_author]="Sairaanhoitaja Suvi Kukanaho"
posts[2_image]="../images/blog-vaccination.svg"
posts[2_title_fi]="Miksi säännölliset rokotukset ovat tärkeitä kissalle?"
posts[2_title_en]="Why Are Regular Vaccinations Important for Cats?"
posts[2_title_ru]="Почему регулярные вакцинации важны для кошек?"
posts[2_content_fi]="<p>Rokotukset toimivat kouluttamalla kissasi immuunijärjestelmää tunnistamaan ja torjumaan vaarallisia taudinaiheuttajia. Kissoille tärkeimmät rokotukset suojaavat kissanvilustusta, kissan panleukopeniaa (kissaruttoa) ja kissaleukemiaa vastaan.</p><p>Säännöllinen rokotusohjelma alkaa pentuiässä ja jatkuu läpi kissasi elämän. Myös sisäkissoja on tärkeää rokottaa, sillä tauteja voi kulkeutua sisälle esimerkiksi kengissä tai vaatteissa.</p>"
posts[2_content_en]="<p>Vaccinations work by training your cat's immune system to recognize and fight dangerous pathogens. For cats, the most important vaccinations protect against feline rhinotracheitis, feline panleukopenia (feline distemper), and feline leukemia.</p><p>A regular vaccination program starts in kittenhood and continues throughout your cat's life. It's also important to vaccinate indoor cats, as diseases can be brought inside, for example, on shoes or clothes.</p>"
posts[2_content_ru]="<p>Вакцинации работают, обучая иммунную систему вашей кошки распознавать и бороться с опасными патогенами. Для кошек наиболее важные вакцинации защищают от кошачьего ринотрахеита, панлейкопении кошек (кошачья чумка) и лейкемии кошек.</p><p>Регулярная программа вакцинации начинается в котячьем возрасте и продолжается на протяжении всей жизни вашей кошки. Важно также вакцинировать домашних кошек, так как болезни могут быть занесены в дом, например, на обуви или одежде.</p>"

# Function to generate HTML for a blog post
generate_post() {
    local id=$1
    local slug=${posts[${id}_slug]}
    local date=${posts[${id}_date]}
    local author=${posts[${id}_author]}
    local image=${posts[${id}_image]}
    local title_fi=${posts[${id}_title_fi]}
    local title_en=${posts[${id}_title_en]}
    local title_ru=${posts[${id}_title_ru]}
    local content_fi=${posts[${id}_content_fi]}
    local content_en=${posts[${id}_content_en]}
    local content_ru=${posts[${id}_content_ru]}
    
    cat > "blog/${slug}.html" << 'TEMPLATE'
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="__TITLE_FI__ - Mielikki">
    <title>__TITLE_FI__ - Mielikki</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">
                <img src="../images/mielikki-logo.svg" alt="Mielikki" style="height: 40px;"> Mielikki
            </a>
        </div>
    </nav>
    <section style="padding: 120px 20px 80px; max-width: 800px; margin: 0 auto;">
        <a href="../index.html#blog" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">← <span data-back>Takaisin</span></a>
        <div style="margin: 30px 0; display: flex; gap: 10px;">
            <button class="lang-btn-post active" data-lang="fi">FI</button>
            <button class="lang-btn-post" data-lang="en">EN</button>
            <button class="lang-btn-post" data-lang="ru">RU</button>
        </div>
        <div style="margin-bottom: 20px; color: #666;">
            <span>📅 __DATE__</span> | <span>✍️ __AUTHOR__</span>
        </div>
        <h1 style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 30px;" data-title>__TITLE_FI__</h1>
        <img src="__IMAGE__" alt="__TITLE_EN__" style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px; margin-bottom: 40px;">
        <div style="font-size: 1.1rem; line-height: 1.8;">
            <div data-lang="fi">__CONTENT_FI__</div>
            <div data-lang="en" style="display: none;">__CONTENT_EN__</div>
            <div data-lang="ru" style="display: none;">__CONTENT_RU__</div>
        </div>
    </section>
    <footer class="footer"><div class="container"><p>&copy; 2025 Mielikki</p></div></footer>
    <script>
        const titles = { fi: '__TITLE_FI__', en: '__TITLE_EN__', ru: '__TITLE_RU__' };
        const backs = { fi: 'Takaisin', en: 'Back', ru: 'Назад' };
        document.querySelectorAll('.lang-btn-post').forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                document.querySelectorAll('.lang-btn-post').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('[data-lang]').forEach(el => {
                    el.style.display = el.dataset.lang === lang ? 'block' : 'none';
                });
                document.querySelector('[data-title]').textContent = titles[lang];
                document.querySelector('[data-back]').textContent = backs[lang];
            });
        });
    </script>
</body>
</html>
TEMPLATE

    # Replace placeholders
    sed -i '' "s|__TITLE_FI__|${title_fi}|g" "blog/${slug}.html"
    sed -i '' "s|__TITLE_EN__|${title_en}|g" "blog/${slug}.html"
    sed -i '' "s|__TITLE_RU__|${title_ru}|g" "blog/${slug}.html"
    sed -i '' "s|__DATE__|${date}|g" "blog/${slug}.html"
    sed -i '' "s|__AUTHOR__|${author}|g" "blog/${slug}.html"
    sed -i '' "s|__IMAGE__|${image}|g" "blog/${slug}.html"
    sed -i '' "s|__CONTENT_FI__|${content_fi}|g" "blog/${slug}.html"
    sed -i '' "s|__CONTENT_EN__|${content_en}|g" "blog/${slug}.html"
    sed -i '' "s|__CONTENT_RU__|${content_ru}|g" "blog/${slug}.html"
    
    echo "Created blog/${slug}.html"
}

# Generate all posts
generate_post 1
generate_post 2

echo "✅ Blog post pages generated successfully!"

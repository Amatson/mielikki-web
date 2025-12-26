// Blog post rendering script
const blogData = {
    1: {
        slug: 'winter-cat-care',
        date: '15.12.2025',
        author: 'ELL Julia Haukilintu',
        image: '../images/blog-winter-care.svg',
        title: {
            fi: 'Talvikauden kissanhoito-oppaat',
            en: 'Winter Season Cat Care Guides',
            ru: 'Руководства по уходу за кошками зимой'
        },
        content: {
            fi: '<p>Talvikausi vaatii erityistä huomiota kissojen hoitoon. Sisäkissat kärsivät usein kuivasta ilmasta, mikä voi aiheuttaa ihon kuivuutta ja tassujen halkeilua. Ulkona liikkuvien kissojen tassujen kuntoa tulee seurata erityisen tarkasti.</p><p>Varmista, että kissallasi on lämpimät lepopaikat ja riittävästi vettä saatavilla, sillä kuiva sisäilma lisää nesteytystarvetta. Talvisin kissat voivat olla vähemmän aktiivisia, joten kiinnitä huomiota myös liikunnan ja painonhallinnan tasapainoon.</p>',
            en: '<p>The winter season requires special attention to cat care. Indoor cats often suffer from dry air, which can cause dry skin and cracked paws. The paw condition of outdoor cats should be monitored especially carefully.</p><p>Make sure your cat has warm resting places and plenty of water available, as dry indoor air increases the need for hydration. In winter, cats may be less active, so also pay attention to the balance between exercise and weight management.</p>',
            ru: '<p>Зимний сезон требует особого внимания к уходу за кошками. Домашние кошки часто страдают от сухого воздуха, который может вызвать сухость кожи и трещины на лапах. Состояние лап уличных кошек следует контролировать особенно внимательно.</p><p>Убедитесь, что у вашей кошки есть теплые места для отдыха и много воды, так как сухой воздух в помещении увеличивает потребность в гидратации. Зимой кошки могут быть менее активными, поэтому также обратите внимание на баланс между физическими упражнениями и контролем веса.</p>'
        }
    },
    2: {
        slug: 'cat-vaccinations',
        date: '10.12.2025',
        author: 'Sairaanhoitaja Suvi Kukanaho',
        image: '../images/blog-vaccination.svg',
        title: {
            fi: 'Miksi säännölliset rokotukset ovat tärkeitä kissalle?',
            en: 'Why Are Regular Vaccinations Important for Cats?',
            ru: 'Почему регулярные вакцинации важны для кошек?'
        },
        content: {
            fi: '<p>Rokotukset toimivat kouluttamalla kissasi immuunijärjestelmää tunnistamaan ja torjumaan vaarallisia taudinaiheuttajia. Kissoille tärkeimmät rokotukset suojaavat kissanvilustusta, kissan panleukopeniaa (kissaruttoa) ja kissaleukemiaa vastaan.</p><p>Säännöllinen rokotusohjelma alkaa pentuiässä ja jatkuu läpi kissasi elämän. Myös sisäkissoja on tärkeää rokottaa, sillä tauteja voi kulkeutua sisälle esimerkiksi kengissä tai vaatteissa.</p>',
            en: '<p>Vaccinations work by training your cat\'s immune system to recognize and fight dangerous pathogens. For cats, the most important vaccinations protect against feline rhinotracheitis, feline panleukopenia (feline distemper), and feline leukemia.</p><p>A regular vaccination program starts in kittenhood and continues throughout your cat\'s life. It\'s also important to vaccinate indoor cats, as diseases can be brought inside, for example, on shoes or clothes.</p>',
            ru: '<p>Вакцинации работают, обучая иммунную систему вашей кошки распознавать и бороться с опасными патогенами. Для кошек наиболее важные вакцинации защищают от кошачьего ринотрахеита, панлейкопении кошек (кошачья чумка) и лейкемии кошек.</p><p>Регулярная программа вакцинации начинается в котячьем возрасте и продолжается на протяжении всей жизни вашей кошки. Важно также вакцинировать домашних кошек, так как болезни могут быть занесены в дом, например, на обуви или одежде.</p>'
        }
    }
};

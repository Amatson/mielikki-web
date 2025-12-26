// Blog posts data with multilingual content (cat-specific)
const blogPosts = [
    {
        id: 1,
        image: "./images/blog-winter-care.svg",
        date: "2025-12-15",
        author: "ELL Julia Haukilintu",
        title: {
            fi: "Talvikauden kissanhoito-oppaat",
            en: "Winter Season Cat Care Guides",
            ru: "Руководства по уходу за кошками зимой"
        },
        excerpt: {
            fi: "Talvi tuo mukanaan erityisiä haasteita kissojen hoitoon. Kylmä sää, kuiva sisäilma ja mahdolliset ulkoilut lumessa voivat vaikuttaa kissasi hyvinvointiin. Tässä artikkelissa käymme läpi tärkeimmät vinkit talvikauden kissanhoidosta.",
            en: "Winter brings special challenges to cat care. Cold weather, dry indoor air, and possible outdoor trips in snow can affect your cat's wellbeing. In this article, we go through the most important tips for winter cat care.",
            ru: "Зима приносит особые проблемы в уходе за кошками. Холодная погода, сухой воздух в помещении и возможные прогулки на снегу могут повлиять на благополучие вашей кошки. В этой статье мы рассмотрим самые важные советы по уходу за кошками зимой."
        },
        content: {
            fi: "Talvikausi vaatii erityistä huomiota kissojen hoitoon. Sisäkissat kärsivät usein kuivasta ilmasta, mikä voi aiheuttaa ihon kuivuutta ja tassujen halkeilua. Ulkona liikkuvien kissojen tassujen kuntoa tulee seurata erityisen tarkasti. Varmista, että kissallasi on lämpimät lepopaikat ja riittävästi vettä saatavilla, sillä kuiva sisäilma lisää nesteytystarvetta. Talvisin kissat voivat olla vähemmän aktiivisia, joten kiinnitä huomiota myös liikunnan ja painonhallinnan tasapainoon.",
            en: "The winter season requires special attention to cat care. Indoor cats often suffer from dry air, which can cause dry skin and cracked paws. The paw condition of outdoor cats should be monitored especially carefully. Make sure your cat has warm resting places and plenty of water available, as dry indoor air increases the need for hydration. In winter, cats may be less active, so also pay attention to the balance between exercise and weight management.",
            ru: "Зимний сезон требует особого внимания к уходу за кошками. Домашние кошки часто страдают от сухого воздуха, который может вызвать сухость кожи и трещины на лапах. Состояние лап уличных кошек следует контролировать особенно внимательно. Убедитесь, что у вашей кошки есть теплые места для отдыха и много воды, так как сухой воздух в помещении увеличивает потребность в гидратации. Зимой кошки могут быть менее активными, поэтому также обратите внимание на баланс между физическими упражнениями и контролем веса."
        }
    },
    {
        id: 2,
        image: "./images/blog-vaccination.svg",
        date: "2025-12-10",
        author: "Sairaanhoitaja Suvi Kukanaho",
        title: {
            fi: "Miksi säännölliset rokotukset ovat tärkeitä kissalle?",
            en: "Why Are Regular Vaccinations Important for Cats?",
            ru: "Почему регулярные вакцинации важны для кошек?"
        },
        excerpt: {
            fi: "Rokotukset ovat yksi tärkeimmistä tavoista suojata kissasi vakavista taudeilta. Ne eivät ainoastaan suojaa omaa kissaasi, vaan myös estävät tautien leviämistä muihin kissoihin. Käydään läpi, miksi säännöllinen rokotusohjelma on välttämätön.",
            en: "Vaccinations are one of the most important ways to protect your cat from serious diseases. They not only protect your own cat but also prevent the spread of diseases to other cats. Let's go through why a regular vaccination program is essential.",
            ru: "Вакцинации являются одним из важнейших способов защиты вашей кошки от серьезных заболеваний. Они не только защищают вашу собственную кошку, но и предотвращают распространение болезней на других кошек. Давайте рассмотрим, почему регулярная программа вакцинации необходима."
        },
        content: {
            fi: "Rokotukset toimivat kouluttamalla kissasi immuunijärjestelmää tunnistamaan ja torjumaan vaarallisia taudinaiheuttajia. Kissoille tärkeimmät rokotukset suojaavat kissanvilustusta, kissan panleukopeniaa (kissaruttoa) ja kissaleukemiaa vastaan. Säännöllinen rokotusohjelma alkaa pentuiässä ja jatkuu läpi kissasi elämän. Myös sisäkissoja on tärkeää rokottaa, sillä tauteja voi kulkeutua sisälle esimerkiksi kengissä tai vaatteissa.",
            en: "Vaccinations work by training your cat's immune system to recognize and fight dangerous pathogens. For cats, the most important vaccinations protect against feline rhinotracheitis, feline panleukopenia (feline distemper), and feline leukemia. A regular vaccination program starts in kittenhood and continues throughout your cat's life. It's also important to vaccinate indoor cats, as diseases can be brought inside, for example, on shoes or clothes.",
            ru: "Вакцинации работают, обучая иммунную систему вашей кошки распознавать и бороться с опасными патогенами. Для кошек наиболее важные вакцинации защищают от кошачьего ринотрахеита, панлейкопении кошек (кошачья чумка) и лейкемии кошек. Регулярная программа вакцинации начинается в котячьем возрасте и продолжается на протяжении всей жизни вашей кошки. Важно также вакцинировать домашних кошек, так как болезни могут быть занесены в дом, например, на обуви или одежде."
        }
    },
    {
        id: 3,
        image: "./images/blog-dental-care.svg",
        date: "2025-12-05",
        author: "ELL Julia Haukilintu",
        title: {
            fi: "Kissan hampaiden hoito kotona",
            en: "Cat Dental Care at Home",
            ru: "Уход за зубами кошки дома"
        },
        excerpt: {
            fi: "Hampaiden terveys on usein aliarvotettu osa kissojen kokonaishyvinvointia. Huono suuhygienia voi johtaa vakaviin terveysongelmiin, kuten sydän- ja munuaissairauksiin. Opi, miten voit hoitaa kissasi hampaita kotona.",
            en: "Dental health is often an undervalued part of cats' overall wellbeing. Poor oral hygiene can lead to serious health problems, such as heart and kidney disease. Learn how you can take care of your cat's teeth at home.",
            ru: "Здоровье зубов часто недооценивается как часть общего благополучия кошек. Плохая гигиена полости рта может привести к серьезным проблемам со здоровьем, таким как болезни сердца и почек. Узнайте, как вы можете ухаживать за зубами вашей кошки дома."
        },
        content: {
            fi: "Säännöllinen hampaiden harjaus on tärkein tapa ylläpitää kissasi suun terveyttä. Aloita harjaaminen vähitellen ja käytä kissoille tarkoitettua hammastahnaa - älä koskaan käytä ihmisten hammastahnaa! Hammashoidon herkkupalat ja lelut voivat myös auttaa pitämään hampaat puhtaina. Suosittelemme säännöllisiä hammastarkastuksia eläinlääkärillä, jotta mahdolliset ongelmat voidaan havaita ajoissa. Merkkejä hammasongelmista ovat muun muassa pahanhajuinen hengitys, syömisv aikeudet ja liiallinen kuolaaminen.",
            en: "Regular tooth brushing is the most important way to maintain your cat's oral health. Start brushing gradually and use toothpaste designed for cats - never use human toothpaste! Dental treats and toys can also help keep teeth clean. We recommend regular dental checkups at the veterinarian so that potential problems can be detected early. Signs of dental problems include bad breath, difficulty eating, and excessive drooling.",
            ru: "Регулярная чистка зубов - самый важный способ поддержания здоровья полости рта вашей кошки. Начинайте чистку постепенно и используйте зубную пасту, предназначенную для кошек - никогда не используйте человеческую зубную пасту! Зубные лакомства и игрушки также могут помочь сохранить зубы чистыми. Мы рекомендуем регулярные стоматологические осмотры у ветеринара, чтобы потенциальные проблемы можно было обнаружить рано. Признаки проблем с зубами включают неприятный запах изо рта, трудности с едой и чрезмерное слюнотечение."
        }
    },
    {
        id: 4,
        image: "./images/blog-nutrition.svg",
        date: "2025-11-28",
        author: "Sairaanhoitaja Susanna Torsti",
        title: {
            fi: "Oikean ravinnon merkitys kissalle",
            en: "The Importance of Proper Nutrition for Cats",
            ru: "Значение правильного питания для кошек"
        },
        excerpt: {
            fi: "Oikea ravinto on perusta kissasi terveydelle ja hyvinvoinnille. Eri ikäkausina ja elämäntilanteissa kissat tarvitsevat erilaista ravintoa. Tässä artikkelissa käymme läpi ravitsemuksen perusteet ja annamme vinkkejä oikean ruoan valintaan kissallesi.",
            en: "Proper nutrition is the foundation of your cat's health and wellbeing. At different ages and life stages, cats need different nutrition. In this article, we go through the basics of nutrition and give tips for choosing the right food for your cat.",
            ru: "Правильное питание - это основа здоровья и благополучия вашей кошки. В разные возрасты и на разных этапах жизни кошкам требуется различное питание. В этой статье мы рассмотрим основы питания и дадим советы по выбору правильной пищи для вашей кошки."
        },
        content: {
            fi: "Kissat ovat lihansyöjiä ja tarvitsevat proteiinia enemmän kuin monet muut eläimet. Laadukas kissan ruoka sisältää oikean tasapainon eläinperäisiä proteiineja, rasvoja, vitamiineja ja kivennäisaineita. Pennuille tarvitaan enemmän energiaa kasvuun, kun taas vanhemmille kissoille sopii helpommin sulavaa ruokaa. Ylipainolla on vakavia terveysvaikutuksia kissoilla, joten oikean annosmäärän noudattaminen on tärkeää. Kissat tarvitsevat myös tauriinia, jota ei löydy kasviperäisestä ruoasta, joten kasvisruokavalio ei sovi kissoille.",
            en: "Cats are carnivores and need more protein than many other animals. Quality cat food contains the right balance of animal proteins, fats, vitamins, and minerals. Kittens need more energy for growth, while older cats benefit from more easily digestible food. Obesity has serious health effects on cats, so following the right portion size is important. Cats also need taurine, which is not found in plant-based foods, so a vegetarian diet is not suitable for cats.",
            ru: "Кошки - плотоядные животные и нуждаются в большем количестве белка, чем многие другие животные. Качественный корм для кошек содержит правильный баланс животных белков, жиров, витаминов и минералов. Котятам требуется больше энергии для роста, в то время как пожилые кошки получают пользу от более легко усваиваемой пищи. Ожирение имеет серьезные последствия для здоровья кошек, поэтому важно соблюдать правильный размер порций. Кошкам также необходим таурин, который не содержится в растительной пище, поэтому вегетарианская диета не подходит для кошек."
        }
    },
    {
        id: 5,
        image: "./images/blog-senior-care.svg",
        date: "2025-11-20",
        author: "ELL Julia Haukilintu",
        title: {
            fi: "Vanhenevan kissan erityistarpeet",
            en: "Special Needs of Aging Cats",
            ru: "Особые потребности стареющих кошек"
        },
        excerpt: {
            fi: "Kun kissasi ikääntyy, sen tarpeet muuttuvat. Säännölliset terveystarkastukset, sopiva liikunta ja oikea ravinto auttavat varmistamaan, että vanhempi kissasi voi nauttia elämästä mahdollisimman pitkään. Opi tunnistamaan ikääntymisen merkit ja vastaamaan niihin.",
            en: "As your cat ages, its needs change. Regular health checkups, appropriate exercise, and proper nutrition help ensure that your older cat can enjoy life as long as possible. Learn to recognize the signs of aging and respond to them.",
            ru: "По мере старения вашей кошки ее потребности меняются. Регулярные медицинские осмотры, соответствующие физические нагрузки и правильное питание помогают гарантировать, что ваша пожилая кошка сможет наслаждаться жизнью как можно дольше. Научитесь распознавать признаки старения и реагировать на них."
        },
        content: {
            fi: "Ikääntyminen tuo mukanaan erilaisia haasteita. Nivelrikko on yleinen ongelma vanhemmilla kissoilla, ja se voi tehdä liikkumisesta ja hyppäämisestä kivuliasta. Kipulääkitys ja niveltukea antavat ravintolisät voivat auttaa. Vanhemmat kissat tarvitsevat myös useampia terveystarkastuksia, jotta mahdolliset sairaudet kuten munuaissairaudet ja kilpirauhasen vajaatoiminta voidaan havaita varhaisessa vaiheessa. Varmista, että vanhalla kissallasi on helppo pääsy ruoka- ja vesikuppeihin sekä hiekkalaatikkoon. Muista, että ikääntyminen ei ole sairaus - monet vanhat kissat voivat nauttia aktiivisesta ja onnellisesta elämästä oikealla hoidolla.",
            en: "Aging brings various challenges. Arthritis is a common problem in older cats, and it can make moving and jumping painful. Pain medication and joint support supplements can help. Older cats also need more frequent health checkups so that potential diseases like kidney disease and hypothyroidism can be detected at an early stage. Make sure your older cat has easy access to food and water bowls and the litter box. Remember that aging is not a disease - many old cats can enjoy an active and happy life with proper care.",
            ru: "Старение приносит различные проблемы. Артрит - распространенная проблема у пожилых кошек, и это может сделать движение и прыжки болезненными. Обезболивающие препараты и добавки для поддержки суставов могут помочь. Пожилые кошки также нуждаются в более частых медицинских осмотрах, чтобы потенциальные заболевания, такие как болезнь почек и гипотиреоз, можно было обнаружить на ранней стадии. Убедитесь, что у вашей пожилой кошки есть легкий доступ к мискам с едой и водой, а также к лотку. Помните, что старение - это не болезнь - многие старые кошки могут наслаждаться активной и счастливой жизнью при правильном уходе."
        }
    },
    {
        id: 6,
        image: "./images/blog-behavior.svg",
        date: "2025-11-15",
        author: "Sairaanhoitaja Suvi Kukanaho",
        title: {
            fi: "Kissan käyttäytymisongelmien ratkaiseminen",
            en: "Solving Cat Behavioral Problems",
            ru: "Решение поведенческих проблем кошек"
        },
        excerpt: {
            fi: "Käyttäytymisongelmat voivat olla haasteellisia sekä kissalle että omistajalle. Ne voivat johtua monista syistä, kuten stressistä, pelosta tai terveysongelmista. Tässä artikkelissa käsittelemme yleisimpiä kissankäyttäytymisongelmia ja niiden ratkaisukeinoja.",
            en: "Behavioral problems can be challenging for both cats and owners. They can result from many causes, such as stress, fear, or health issues. In this article, we address the most common cat behavioral problems and their solutions.",
            ru: "Поведенческие проблемы могут быть сложными как для кошек, так и для владельцев. Они могут возникать по многим причинам, таким как стресс, страх или проблемы со здоровьем. В этой статье мы рассмотрим наиболее распространенные поведенческие проблемы кошек и их решения."
        },
        content: {
            fi: "Yleisimpiä kissankäyttäytymisongelmia ovat epäpuhtaus, aggressiivisuus, liiallinen naukuminen ja raapimisongelmat. Ennen kuin aloitat käyttäytymisen muokkaamisen, on tärkeää sulkea pois mahdolliset terveydelliset syyt. Monet käyttäytymisongelmat voidaan ratkaista ympäristön rikastamisella, oikeanlaisten raapimistelineiden tarjoamisella ja stressin vähentämisellä. Kissanminttua ja rauhoittavia feromonituotteita voi hyödyntää stressin hallinnassa. Muista, että rangaistukset eivät toimi kissoilla - positiivinen vahvistaminen ja kärsivällisyys ovat avaimia onnistuneeseen käyttäytymisen muokkaamiseen.",
            en: "The most common cat behavioral problems are inappropriate elimination, aggression, excessive meowing, and scratching issues. Before starting behavior modification, it's important to rule out possible health causes. Many behavioral problems can be solved by environmental enrichment, providing appropriate scratching posts, and reducing stress. Catnip and calming pheromone products can be used in stress management. Remember that punishment doesn't work with cats - positive reinforcement and patience are keys to successful behavior modification.",
            ru: "Наиболее распространенные поведенческие проблемы кошек - это несоответствующее мочеиспускание, агрессия, чрезмерное мяуканье и проблемы с царапаньем. Перед началом коррекции поведения важно исключить возможные причины, связанные со здоровьем. Многие поведенческие проблемы можно решить путем обогащения окружающей среды, предоставления соответствующих когтеточек и снижения стресса. Кошачья мята и успокаивающие феромонные продукты могут быть использованы для управления стрессом. Помните, что наказание не работает с кошками - положительное подкрепление и терпение являются ключами к успешной коррекции поведения."
        }
    }
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogPosts;
}

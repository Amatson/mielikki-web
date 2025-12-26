// Blog posts data with multilingual content
const blogPosts = [
    {
        id: 1,
        image: "./images/blog-winter-care.svg",
        date: "2025-12-15",
        author: "Dr. Maria Virtanen",
        title: {
            fi: "Talvikauden lemmikinhoito-oppaat",
            en: "Winter Season Pet Care Guides",
            sv: "Vinterårets husdjursvårdsguider"
        },
        excerpt: {
            fi: "Talvi tuo mukanaan erityisiä haasteita lemmikkien hoitoon. Kylmä sää, kuiva sisäilma ja lumi voivat vaikuttaa lemmikkisi hyvinvointiin. Tässä artikkelissa käymme läpi tärkeimmät vinkit talvikauden lemmikinhoidosta.",
            en: "Winter brings special challenges to pet care. Cold weather, dry indoor air, and snow can affect your pet's wellbeing. In this article, we go through the most important tips for winter pet care.",
            sv: "Vintern medför speciella utmaningar för husdjursvård. Kallt väder, torr inomhusluft och snö kan påverka ditt husdjurs välbefinnande. I denna artikel går vi igenom de viktigaste tipsen för husdjursvård på vintern."
        },
        content: {
            fi: "Talvikausi vaatii erityistä huomiota lemmikkien hoitoon. Koirien tassut kärsivät usein kuivuudesta ja halkeamisesta, kun ne altistuvat lumelle ja jäälle. Suosittelemme käyttämään tassurasvaa säännöllisesti ja huolehtimaan tassujen puhdistamisesta ulkoilun jälkeen. Kylmä sää voi myös vaikuttaa lemmikkisi ruokahaluun ja aktiivisuuteen. Varmista, että lemmikkisi saa riittävästi lämpöä ja ravintoa.",
            en: "The winter season requires special attention to pet care. Dogs' paws often suffer from dryness and cracking when exposed to snow and ice. We recommend using paw balm regularly and ensuring paw cleaning after outdoor activities. Cold weather can also affect your pet's appetite and activity. Make sure your pet gets enough warmth and nutrition.",
            sv: "Vintersäsongen kräver särskild uppmärksamhet på husdjursvård. Hundars tassar lider ofta av torrhet och sprickor när de utsätts för snö och is. Vi rekommenderar att använda tassbalsam regelbundet och se till att tassarna rengörs efter utomhusaktiviteter. Kallt väder kan också påverka ditt husdjurs aptit och aktivitet. Se till att ditt husdjur får tillräckligt med värme och näring."
        }
    },
    {
        id: 2,
        image: "./images/blog-vaccination.svg",
        date: "2025-12-10",
        author: "Dr. Jukka Nieminen",
        title: {
            fi: "Miksi säännölliset rokotukset ovat tärkeitä?",
            en: "Why Are Regular Vaccinations Important?",
            sv: "Varför är regelbundna vaccinationer viktiga?"
        },
        excerpt: {
            fi: "Rokotukset ovat yksi tärkeimmistä tavoista suojata lemmikkisi vakavista taudeilta. Ne eivät ainoastaan suojaa omaa lemmikkiäsi, vaan myös estävät tautien leviämistä muihin eläimiin. Käydään läpi, miksi säännöllinen rokotusohjelma on välttämätön.",
            en: "Vaccinations are one of the most important ways to protect your pet from serious diseases. They not only protect your own pet but also prevent the spread of diseases to other animals. Let's go through why a regular vaccination program is essential.",
            sv: "Vaccinationer är ett av de viktigaste sätten att skydda ditt husdjur från allvarliga sjukdomar. De skyddar inte bara ditt eget husdjur utan förhindrar också spridning av sjukdomar till andra djur. Låt oss gå igenom varför ett regelbundet vaccinationsprogram är nödvändigt."
        },
        content: {
            fi: "Rokotukset toimivat kouluttamalla lemmikkisi immuunijärjestelmää tunnistamaan ja torjumaan vaarallisia taudinaiheuttajia. Koirilla tärkeimmät rokotukset suojaavat koiratautia, parvovirusta ja hepatiittia vastaan. Kissoilla rokotukset suojaavat kissanvilustusta, kissojen panleukopeniaa ja kissaids-virusta vastaan. Säännöllinen rokotusohjelma alkaa pentuiässä ja jatkuu läpi lemmikkisi elämän.",
            en: "Vaccinations work by training your pet's immune system to recognize and fight dangerous pathogens. For dogs, the most important vaccinations protect against distemper, parvovirus, and hepatitis. For cats, vaccinations protect against feline rhinotracheitis, feline panleukopenia, and feline AIDS virus. A regular vaccination program starts in puppyhood and continues throughout your pet's life.",
            sv: "Vaccinationer fungerar genom att träna ditt husdjurs immunsystem att känna igen och bekämpa farliga patogener. För hundar skyddar de viktigaste vaccinationerna mot valpsjuka, parvovirus och hepatit. För katter skyddar vaccinationerna mot kattsnuva, kattsjuka och katt-AIDS-virus. Ett regelbundet vaccinationsprogram börjar i valpåldern och fortsätter genom hela ditt husdjurs liv."
        }
    },
    {
        id: 3,
        image: "./images/blog-dental-care.svg",
        date: "2025-12-05",
        author: "Dr. Anna Korhonen",
        title: {
            fi: "Lemmikin hampaiden hoito kotona",
            en: "Pet Dental Care at Home",
            sv: "Husdjurstandvård hemma"
        },
        excerpt: {
            fi: "Hampaiden terveys on usein aliarvotettu osa lemmikkien kokonaishyvinvointia. Huono suuhygienia voi johtaa vakaviin terveysongelmiin, kuten sydänsairauksiin. Opi, miten voit hoitaa lemmikkisi hampaita kotona.",
            en: "Dental health is often an undervalued part of pets' overall wellbeing. Poor oral hygiene can lead to serious health problems, such as heart disease. Learn how you can take care of your pet's teeth at home.",
            sv: "Tandhälsa är ofta en undervärderad del av husdjurs övergripande välbefinnande. Dålig munhygien kan leda till allvarliga hälsoproblem, såsom hjärtsjukdom. Lär dig hur du kan ta hand om ditt husdjurs tänder hemma."
        },
        content: {
            fi: "Säännöllinen hampaiden harjaus on tärkein tapa ylläpitää lemmikkisi suun terveyttä. Aloita harjaaminen vähitellen ja käytä eläimille tarkoitettua hammastahnaa. Puruluurankaistujen ja hammaiden puhdistukseen tarkoitettujen makupalat voivat myös auttaa pitämään hampaat puhtaina. Suosittelemme säännöllisiä hammastarkastuksia eläinlääkärillä, jotta mahdolliset ongelmat voidaan havaita ajoissa.",
            en: "Regular tooth brushing is the most important way to maintain your pet's oral health. Start brushing gradually and use toothpaste designed for animals. Chew bones and dental treats can also help keep teeth clean. We recommend regular dental checkups at the veterinarian so that potential problems can be detected early.",
            sv: "Regelbunden tandborstning är det viktigaste sättet att upprätthålla ditt husdjurs munhälsa. Börja borsta gradvis och använd tandkräm designad för djur. Tuggben och tandrengöringsgodis kan också hjälpa till att hålla tänderna rena. Vi rekommenderar regelbundna tandkontroller hos veterinären så att potentiella problem kan upptäckas i tid."
        }
    },
    {
        id: 4,
        image: "./images/blog-nutrition.svg",
        date: "2025-11-28",
        author: "Dr. Mikko Laaksonen",
        title: {
            fi: "Oikean ravinnon merkitys lemmikille",
            en: "The Importance of Proper Nutrition for Pets",
            sv: "Betydelsen av rätt näring för husdjur"
        },
        excerpt: {
            fi: "Oikea ravinto on perusta lemmikkisi terveydelle ja hyvinvoinnille. Eri ikäkausina ja elämäntilanteissa lemmikit tarvitsevat erilaista ravintoa. Tässä artikkelissa käymme läpi ravitsemuksen perusteet ja annamme vinkkejä oikean ruoan valintaan.",
            en: "Proper nutrition is the foundation of your pet's health and wellbeing. At different ages and life stages, pets need different nutrition. In this article, we go through the basics of nutrition and give tips for choosing the right food.",
            sv: "Rätt näring är grunden för ditt husdjurs hälsa och välbefinnande. Vid olika åldrar och livsstadier behöver husdjur olika näring. I denna artikel går vi igenom grunderna i näring och ger tips för att välja rätt mat."
        },
        content: {
            fi: "Laadukas ruoka sisältää oikean tasapainon proteiineja, rasvoja, hiilihydraatteja, vitamiineja ja kivennäisaineita. Pennuille ja pentuille tarvitaan enemmän proteiinia ja energiaa kasvuun, kun taas vanhemmille eläimille sopii kevyempi, helpommin sulavaa ruokaa. Ylipainolla on vakavia terveysvaikutuksia, joten oikean annosmäärän noudattaminen on tärkeää. Kysy meiltä neuvoa lemmikkisi yksilöllisten ravitsemustarpeiden selvittämiseen.",
            en: "Quality food contains the right balance of proteins, fats, carbohydrates, vitamins, and minerals. Puppies and kittens need more protein and energy for growth, while older animals benefit from lighter, more easily digestible food. Obesity has serious health effects, so following the right portion size is important. Ask us for advice on determining your pet's individual nutritional needs.",
            sv: "Kvalitetsmat innehåller rätt balans av proteiner, fetter, kolhydrater, vitaminer och mineraler. Valpar och kattungar behöver mer protein och energi för tillväxt, medan äldre djur drar nytta av lättare, lättare smältbar mat. Fetma har allvarliga hälsoeffekter, så att följa rätt portionsstorlek är viktigt. Fråga oss om råd för att fastställa ditt husdjurs individuella näringsbehov."
        }
    },
    {
        id: 5,
        image: "./images/blog-senior-care.svg",
        date: "2025-11-20",
        author: "Dr. Laura Mäkinen",
        title: {
            fi: "Vanhenevan lemmikin erityistarpeet",
            en: "Special Needs of Aging Pets",
            sv: "Särskilda behov hos åldrande husdjur"
        },
        excerpt: {
            fi: "Kun lemmikkisi ikääntyy, sen tarpeet muuttuvat. Säännölliset terveystarkastukset, sopiva liikunta ja oikea ravinto auttavat varmistamaan, että vanhempi lemmikki voi nauttia elämästä mahdollisimman pitkään. Opi tunnistamaan ikääntymisen merkit ja vastaamaan niihin.",
            en: "As your pet ages, its needs change. Regular health checkups, appropriate exercise, and proper nutrition help ensure that an older pet can enjoy life as long as possible. Learn to recognize the signs of aging and respond to them.",
            sv: "När ditt husdjur åldras förändras dess behov. Regelbundna hälsokontroller, lämplig motion och rätt näring hjälper till att säkerställa att ett äldre husdjur kan njuta av livet så länge som möjligt. Lär dig att känna igen tecknen på åldrande och svara på dem."
        },
        content: {
            fi: "Ikääntyminen tuo mukanaan erilaisia haasteita. Nivelrikko on yleinen ongelma vanhemmilla koirilla ja kissoilla, ja se voi tehdä liikkumisesta kivuliasta. Kipulääkitys ja niveltukea antavat ravintolisät voivat auttaa. Vanhemmat lemmikit tarvitsevat myös useampia terveystarkastuksia, jotta mahdolliset sairaudet voidaan havaita varhaisessa vaiheessa. Muista, että ikääntyminen ei ole sairaus - monet vanhat lemmikit voivat nauttia aktiivisesta ja onnellisesta elämästä oikealla hoidolla.",
            en: "Aging brings various challenges. Arthritis is a common problem in older dogs and cats, and it can make movement painful. Pain medication and joint support supplements can help. Older pets also need more frequent health checkups so that potential diseases can be detected at an early stage. Remember that aging is not a disease - many old pets can enjoy an active and happy life with proper care.",
            sv: "Åldrande medför olika utmaningar. Artrit är ett vanligt problem hos äldre hundar och katter, och det kan göra rörelse smärtsam. Smärtmedicin och ledstödjande kosttillskott kan hjälpa. Äldre husdjur behöver också oftare hälsokontroller så att potentiella sjukdomar kan upptäckas i ett tidigt skede. Kom ihåg att åldrande inte är en sjukdom - många gamla husdjur kan njuta av ett aktivt och lyckligt liv med rätt vård."
        }
    },
    {
        id: 6,
        image: "./images/blog-behavior.svg",
        date: "2025-11-15",
        author: "Dr. Sami Virtanen",
        title: {
            fi: "Lemmikin käyttäytymisongelmien ratkaiseminen",
            en: "Solving Pet Behavioral Problems",
            sv: "Lösa husdjurs beteendeproblem"
        },
        excerpt: {
            fi: "Käyttäytymisongelmat voivat olla haasteellisia sekä lemmikille että omistajalle. Ne voivat johtua monista syistä, kuten stressistä, pelosta tai terveysongelmista. Tässä artikkelissa käsittelemme yleisimpiä käyttäytymisongelmia ja niiden ratkaisukeinoja.",
            en: "Behavioral problems can be challenging for both pets and owners. They can result from many causes, such as stress, fear, or health issues. In this article, we address the most common behavioral problems and their solutions.",
            sv: "Beteendeproblem kan vara utmanande för både husdjur och ägare. De kan bero på många orsaker, såsom stress, rädsla eller hälsoproblem. I denna artikel tar vi upp de vanligaste beteendeproblemen och deras lösningar."
        },
        content: {
            fi: "Yleisimpiä käyttäytymisongelmia ovat haukkuminen, agressiivisuus, erotusahdistus ja epäpuhtaus. Ennen kuin aloitat käyttäytymisen muokkaamisen, on tärkeää sulkea pois mahdolliset terveydelliset syyt. Monet käyttäytymisongelmat voidaan ratkaista johdonmukaisella koulutuksella, positiivisella vahvistamisella ja kärsivällisyydellä. Vakavammissa tapauksissa suosittelemme eläinkäyttäytymisen asiantuntijan konsultointia.",
            en: "The most common behavioral problems are barking, aggression, separation anxiety, and uncleanliness. Before starting behavior modification, it's important to rule out possible health causes. Many behavioral problems can be solved with consistent training, positive reinforcement, and patience. In more severe cases, we recommend consulting an animal behavior specialist.",
            sv: "De vanligaste beteendeproblemen är skällning, aggression, separationsångest och orenhet. Innan du börjar beteendemodifiering är det viktigt att utesluta möjliga hälsoorsaker. Många beteendeproblem kan lösas med konsekvent träning, positiv förstärkning och tålamod. I allvarligare fall rekommenderar vi att konsultera en djurbeteendespecialist."
        }
    }
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogPosts;
}

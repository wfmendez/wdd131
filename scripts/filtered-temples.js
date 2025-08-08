// Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    hamButton.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        hamButton.setAttribute('aria-label', 'Close menu');
    } else {
        hamButton.textContent = '☰';
        hamButton.setAttribute('aria-label', 'Open menu');
    }
});

// Temples

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, august, 20",
    area: 15332,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/208x117/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, september, 9",
    area: 42652,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/320x200/london-england-temple-lds-37802-wallpaper.jpg"
  },
  {
    templeName: "Freiberg Germany",
    location: "Freiberg, Germany",
    dedicated: "1985, june, 30",
    area: 21500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/320x200/freiberg-germany-temple-lds-664670-wallpaper.jpg"
  },
];

const cardContainer = document.querySelector('.temple-cards-container');
const navLinks = document.querySelectorAll('.navigation a');

function createTempleCards(temples) {
    cardContainer.innerHTML = '';
    temples.forEach(temple => {
        const figure = document.createElement('figure');
        const h3 = document.createElement('h3');
        const location = document.createElement('p');
        const dedicated = document.createElement('p');
        const area = document.createElement('p');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        h3.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;

        img.src = temple.imageUrl;
        img.alt = `Image of ${temple.templeName} Temple`;
        img.loading = 'lazy';

        figcaption.appendChild(h3);
        figcaption.appendChild(location);
        figcaption.appendChild(dedicated);
        figcaption.appendChild(area);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        
        cardContainer.appendChild(figure);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.textContent;
        let filteredTemples = [];

        switch (filter) {
            case 'Home':
                filteredTemples = temples;
                break;
            case 'Old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year <= 1900;
                });
                break;
            case 'New':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year >= 2000;
                });
                break;
            case 'Large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
        }
        createTempleCards(filteredTemples);
    });
});

createTempleCards(temples);

// Get date

const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;
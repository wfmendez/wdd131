const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;

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
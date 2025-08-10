const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;

const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    if (name === '' || email === '') {
        alert('Please complete all fields.');
    } else {
    localStorage.setItem('subscriberName', name);
    localStorage.setItem('subscriberEmail', email);

    const messageElement = document.getElementById('subscriptionMessage');
    messageElement.textContent = `Thank you for subscribing, ${name}!`;
    messageElement.className = 'success';
    messageElement.style.display = 'block';

    newsletterForm.reset();
}
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    // Cambia el icono del botón y el atributo aria-label
    if (navigation.classList.contains('open')) {
        hamButton.innerHTML = '✕'; // Cambia el texto a 'X'
        hamButton.setAttribute('aria-label', 'Close menu');
        hamButton.setAttribute('aria-expanded', 'true');
    } else {
        hamButton.innerHTML = '☰'; // Cambia el texto de vuelta a '☰'
        hamButton.setAttribute('aria-label', 'Open menu');
        hamButton.setAttribute('aria-expanded', 'false');
    }
});
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
document.getElementById('lastmodified').textContent = lastModified.toLocaleDateString('en-US', options);

const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const windChill = 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKmh, 0.16)) + (0.3965 * tempC * Math.pow(windKmh, 0.16));
        return windChill.toFixed(1);
    } else {
        return "N/A";
    }
}

document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);
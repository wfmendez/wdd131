const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp drive",
      avgRating: 5.0
    }
  ];

const selectElement = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

let reviewCounter = localStorage.getItem('reviewCounter');

if (!reviewCounter) {
    reviewCounter = 0;
} else {
    reviewCounter = parseInt(reviewCounter, 10);
}

reviewCounter++;

localStorage.setItem('reviewCounter', reviewCounter);

document.getElementById('reviewCountDisplay').textContent = reviewCounter;
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

  // Get the reference to the select element
const selectElement = document.getElementById('productName');

// Iterate over the products array
products.forEach(product => {
    // Create a new option element
    const option = document.createElement('option');
    // Set the value of the option to the product's id
    option.value = product.id;
    // Set the visible text of the option to the product's name
    option.textContent = product.name;
    // Append the option to the select element
    selectElement.appendChild(option);
});

// Get the counter from localStorage
let reviewCounter = localStorage.getItem('reviewCounter');

// If it doesn't exist, initialize it to 0
if (!reviewCounter) {
    reviewCounter = 0;
} else {
    // If it exists, convert it to a number
    reviewCounter = parseInt(reviewCounter, 10);
}

// Increment the counter
reviewCounter++;

// Save the new value to localStorage
localStorage.setItem('reviewCounter', reviewCounter);

// Display the counter on the page (make sure you have an element to display it in)
document.getElementById('reviewCountDisplay').textContent = reviewCounter;
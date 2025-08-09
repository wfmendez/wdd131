const reviewCountDisplay = document.getElementById('reviewCountDisplay');

let reviewCounter = localStorage.getItem('reviewCounter');

if (reviewCounter) {
    reviewCounter = parseInt(reviewCounter, 10) + 1;
} else {
    reviewCounter = 1;
}

localStorage.setItem('reviewCounter', reviewCounter);

reviewCountDisplay.textContent = reviewCounter;
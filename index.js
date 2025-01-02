const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
        // Select all feature cards
const featureCards = document.querySelectorAll('.feature-card');

// Add click event listener to each card
featureCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the "flipped" class on click
        card.classList.toggle('flipped');
    });
});
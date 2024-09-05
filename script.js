document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        navLinks.classList.toggle('show');
    });

    // Sliding image carousel functionality
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function showNextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    // Change image every 3 seconds
    setInterval(showNextImage, 3000);
});

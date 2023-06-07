// Responsive navigation
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav-link');
const body = document.querySelector('body');

// Hide/show mobile navigation
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hide');
});

// Close navigation when one of the links is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('hide');
    })
})
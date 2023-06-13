// Responsive navigation
const menuBtn = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav-link');
const body = document.querySelector('body');

console.log(menuIcon.src)

// Hide/show mobile navigation
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hide');

    nav.classList.contains('hide') ? menuIcon.src = './images/icon-hamburger.svg' : menuIcon.src = './images/icon-close.svg';
});

// Close navigation when one of the links is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('hide');

        nav.classList.contains('hide') ? menuIcon.src = './images/icon-hamburger.svg' : menuIcon.src = './images/icon-close.svg';
    })
})
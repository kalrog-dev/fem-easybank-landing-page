// Responsive navigation
const menuBtn = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav-link');
const body = document.querySelector('body');

// Hide/show mobile navigation
menuBtn.addEventListener('click', () => {
    handleMenuClick();
});

// Close navigation when one of the links is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        handleMenuClick();
    })
})

function handleMenuClick() {
    nav.classList.toggle('hide');
    if (nav.classList.contains('hide')) {
        menuIcon.src = './images/icon-hamburger.svg';
        document.querySelector('.backdrop').remove();
    } else {
        menuIcon.src = './images/icon-close.svg';
        body.insertAdjacentHTML('afterbegin', '<div class="backdrop"></div>');
    }
}
// Responsive navigation
const menuBtn = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav-link');
const body = document.querySelector('body');

// Hide/show mobile navigation
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hide');
    handleMenuClick();
    !nav.classList.contains('hide') && body.insertAdjacentHTML('afterbegin', '<div class="backdrop"></div>');
});

// Close navigation when one of the links is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('hide');
        handleMenuClick();
    })
})

function handleMenuClick() {
    if (nav.classList.contains('hide')) {
        menuIcon.src = './images/icon-hamburger.svg';
        document.querySelector('.backdrop').remove();
    } else {
        menuIcon.src = './images/icon-close.svg';
    }
}
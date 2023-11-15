// Responsive navigation
var menuBtn = document.querySelector('.menu-button');
var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('.main-nav');
// Hide/show mobile navigation
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener('click', function () {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hide');
    handleMenuClick();
    // Add a backdrop background if the mobile navigation is shown
    !(nav === null || nav === void 0 ? void 0 : nav.classList.contains('hide')) && document.body.insertAdjacentHTML('afterbegin', '<div class="backdrop"></div>');
});
// Close navigation when one of the links is clicked
nav === null || nav === void 0 ? void 0 : nav.addEventListener('click', function (event) {
    if (!event.target)
        return;
    var target = event.target;
    // If the click event bubbled up from a navigation link
    if (target === null || target === void 0 ? void 0 : target.closest('.main-nav-link')) {
        nav === null || nav === void 0 ? void 0 : nav.classList.add('hide');
        handleMenuClick();
    }
});
function handleMenuClick() {
    if (!menuIcon)
        return;
    var backdrop = document.querySelector('.backdrop');
    if (nav === null || nav === void 0 ? void 0 : nav.classList.contains('hide')) {
        menuIcon.src = './images/icon-hamburger.svg';
        backdrop && backdrop.remove();
    }
    else {
        menuIcon.src = './images/icon-close.svg';
    }
}

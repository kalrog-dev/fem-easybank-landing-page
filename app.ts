// Responsive navigation
const menuBtn = document.querySelector('.menu-button') as HTMLButtonElement | null;
const menuIcon = document.querySelector('.menu-icon') as HTMLImageElement | null;
const nav = document.querySelector('.main-nav') as HTMLElement | null;

// Hide/show mobile navigation
menuBtn?.addEventListener('click', () => {
  nav?.classList.toggle('hide');
  handleMenuClick();

  // Add a backdrop background if the mobile navigation is shown
  !nav?.classList.contains('hide') && document.body.insertAdjacentHTML('afterbegin', '<div class="backdrop"></div>');
});

// Close navigation when one of the links is clicked
nav?.addEventListener('click', (event) => {
  if (!event.target) return;
  const target = event.target as HTMLElement | null;

  // If the click event bubbled up from a navigation link
  if (target?.closest('.main-nav-link')) {
    nav?.classList.add('hide');
    handleMenuClick();
  }
});

function handleMenuClick(): void {
  if (!menuIcon) return;
  const backdrop = document.querySelector('.backdrop') as HTMLDivElement | null;

  if (nav?.classList.contains('hide')) {
    menuIcon.src = './images/icon-hamburger.svg';
    backdrop?.remove();
  } else {
    menuIcon.src = './images/icon-close.svg';
  }
}
const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('#navList');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('opened');

  if (navList.classList.contains('opened')) {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

function isMobile() {
  return window.matchMedia('(max-width: 576px)').matches;
}

function darkenHeaderOnScroll() {
  let lastScrollPosition = scrollY;
  if (lastScrollPosition > 50 && isMobile()) {
    header.style.backgroundColor = 'var(--clr-neutral-darkest)';
    header.style.padding = '1rem';
  } else {
    header.removeAttribute('style');
  }
}

document.addEventListener('scroll', () => {
  darkenHeaderOnScroll();
});

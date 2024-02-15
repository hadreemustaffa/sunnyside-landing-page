const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('#navList');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('opened');

  if (navList.classList.contains('opened')) {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

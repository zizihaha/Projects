var hamburger = document.querySelector('.hamburger-menu');
var navWrapper = document.querySelector('.nav-wrapper');
hamburger.addEventListener('click', () => {
  navWrapper.classList.toggle('change');
})
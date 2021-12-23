const burgerMenu = document.querySelector('.burger-btn');
const burgerCross = document.querySelector('.burger-btn-cross');

const navMenu = document.querySelector('.mob-header--main-nav')



burgerMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMenu.classList.toggle('visually-hidden');
  burgerMenu.classList.toggle('visually-hidden');
  burgerCross.classList.toggle('visually-hidden');
})
burgerCross.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMenu.classList.toggle('visually-hidden');
  burgerMenu.classList.toggle('visually-hidden');
  burgerCross.classList.toggle('visually-hidden');
})

var link = document.querySelector('.white-button');
var popup = document.querySelector('.form');
var exit = document.querySelector('.close-btn');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});
exit.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});
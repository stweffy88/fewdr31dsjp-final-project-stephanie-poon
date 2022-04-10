const menuController = document.getElementById('menu-hamburger');
menuController.addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('menu-open');
});

document.getElementById('menu-close').addEventListener('click', function() {
  document.querySelector('.menu').classList.remove('menu-open');
});

const revealDescription = document.getElementById('p');
revealDescription.addEventListener('click', function() {
  document.querySelector('.small').classList.toggle('show-description');
});

document.getElementById('p').addEventListener('click', function() {
  document.querySelector('.small').classList.remove('show-description');
});

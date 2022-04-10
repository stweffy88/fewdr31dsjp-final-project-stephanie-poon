const menuController = document.getElementById('menu-hamburger');
menuController.addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('menu-open');
});

document.getElementById('menu-close').addEventListener('click', function() {
  document.querySelector('.menu').classList.remove('menu-open');
});

document.querySelector('.about-btn').addEventListener('click', function () {
  document.querySelector('.menu--main').classList.remove('active');
  document.querySelector('.menu--about').classList.add('active');
});

document.querySelector('.menu-btn--about').addEventListener('click', function () {
  document.querySelector('.menu--about').classList.remove('active');
  document.querySelector('.menu--main').classList.add('active');
});






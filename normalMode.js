 // When the "Normal Mode" button is clicked
 document.querySelector('.play-casual-btn').addEventListener('click', function () {
  document.querySelector('.menu--main').classList.remove('active'); // Hide the main menu
  document.querySelector('.menu--normalMode').classList.add('active'); // Show the normal mode menu
});

// When the "Back to Menu" button in the Normal Mode menu is clicked
document.querySelector('.menu-btn--normalMode').addEventListener('click', function () {
  document.querySelector('.menu--normalMode').classList.remove('active'); // Hide the normal mode menu
  document.querySelector('.menu--main').classList.add('active'); // Show the main menu
});
 



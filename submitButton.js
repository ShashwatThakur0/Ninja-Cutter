document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitNameBtn');
  const nameEntryModal = document.getElementById('nameEntryModal');
  const mainMenu = document.querySelector('.menu--main'); // Use querySelector for class

  // Debugging: Log to verify elements are found
  console.log('submitButton:', submitButton);
  console.log('nameEntryModal:', nameEntryModal);
  console.log('mainMenu:', mainMenu);

  if (submitButton && nameEntryModal && mainMenu) {
    submitButton.addEventListener('click', function() {
      const playerNameInput = document.getElementById('playerNameInput');
      const playerName = playerNameInput.value.trim();

      if (playerName) {
        localStorage.setItem('playerName', playerName);

        // Hide the name entry modal
        console.log('Hiding name entry modal');
        nameEntryModal.classList.add('hidden');

        // Show the main menu
        console.log('Showing main menu');
        mainMenu.classList.remove('hidden');
      } else {
        alert('Please enter a valid name!');
      }
    });
  } else {
    if (!submitButton) console.error('Element not found: submitButton');
    if (!nameEntryModal) console.error('Element not found: nameEntryModal');
    if (!mainMenu) console.error('Element not found: mainMenu');
  }
});

// Initial state: Show the name entry modal, hide the main menu
document.addEventListener('DOMContentLoaded', function() {
  const nameEntryModal = document.getElementById('nameEntryModal');
  const mainMenu = document.querySelector('.menu--main'); // Use querySelector for class
  
  if (nameEntryModal) {
    nameEntryModal.classList.remove('hidden');
  }
  if (mainMenu) {
    mainMenu.classList.add('hidden');
  }
});

document.getElementById('playerNameInput').addEventListener('keydown', function(event) {
  // Check if the pressed key is 'Enter'
  if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      document.getElementById('submitNameBtn').click(); // Trigger the click event on the submit button
  }
});

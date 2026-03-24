// Get references to the button and the text
const button = document.getElementById('toggleButton');
const text = document.getElementById('myText');

// Add click event listener
button.addEventListener('click', () => {
  if (text.style.display === 'none') {
    text.style.display = 'block';      // Show text
    button.textContent = 'Hide Text';   // Change button label
  } else {
    text.style.display = 'none';       // Hide text
    button.textContent = 'Show Text';   // Change button label
  }
});

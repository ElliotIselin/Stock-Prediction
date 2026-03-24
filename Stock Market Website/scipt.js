const button = document.getElementById('toggleButton');
const text = document.getElementById('myText');

button.addEventListener('click', () => {
  if (text.style.display === 'none') {
    text.style.display = 'block';
    button.textContent = 'Hide Basket';
  } else {
    text.style.display = 'none';
    button.textContent = 'First Basket';
  }
});

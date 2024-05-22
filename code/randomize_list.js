// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get the ul element
const ul = document.getElementById('brotips');

// Get the list items and convert to array
let itemsArray = Array.from(ul.children);

// Shuffle the array
itemsArray = shuffleArray(itemsArray);

// Clear the ul
ul.innerHTML = '';

// Append the shuffled items back to the ul
itemsArray.forEach(item => ul.appendChild(item));
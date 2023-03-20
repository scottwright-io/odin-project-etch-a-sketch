// --- CREATE GRID ---
function createGrid(rows, columns) {
  //get container element where the grid will be created
  const container = document.getElementById('div-container');
  container.innerHTML = ''; // Clear previous grid

// Update the grid-template-columns property based on columns input
  container.style.gridTemplateColumns = `repeat(${columns}, auto)`;

  // Calculate the width and height of each grid cell
  const cellWidth = container.clientWidth / columns;
  const cellHeight = container.clientHeight / rows;

  //create rows and columns for the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const square = document.createElement('div');
      square.style.width = `${cellWidth}px`; // Set the width of the grid cell
      square.style.height = `${cellHeight}px`; // Set the height of the grid cell
      container.appendChild(square);
    }
  }

  // Call the addColorHover function
  addColorHover();
}

// --- ADD COLOR ON HOVER ---
function addColorHover() {
  const colorDiv = document.querySelectorAll('#div-container div');

  colorDiv.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    })
  });
}

// --- NEW GRID BUTTON ---
function generateGridSize() {
  let gridSize = prompt('Enter desired grid size. Type a number between 1-100.');
  while (gridSize > 100) {
    gridSize = prompt('Your number must be less than or equal to 100:');
  }
  return gridSize;
}

// Initialize default grid
createGrid(16, 16);

// Add event listener for the "New Grid" button
const newGridButton = document.getElementById('gridButton');

newGridButton.addEventListener('click', () => {
  const gridSize = generateGridSize();
  createGrid(gridSize, gridSize);
});

// --- ERASE FUNCTION ---
function erase() {
  const colorDiv = document.querySelectorAll('#div-container div');

  colorDiv.forEach(div => {
    div.style.backgroundColor = 'rgb(236, 236, 240)';
  });
}

// event listener for the "Erase" button
const eraseButton = document.getElementById('erase');

eraseButton.addEventListener('click', () => {
  erase();
});

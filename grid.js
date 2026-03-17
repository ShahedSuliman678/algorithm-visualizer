const grid = document.getElementById('grid');

for (let i = 0; i < 20 * 15; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}
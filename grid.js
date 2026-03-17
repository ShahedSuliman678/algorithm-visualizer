const ROWS = 15;
const COLS = 20;
const gridEl = document.getElementById('grid');

let startSet = false;
let endSet = false;
let cells = [];

// Build the grid
for (let r = 0; r < ROWS; r++) {
  cells[r] = [];
  for (let c = 0; c < COLS; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.r = r;
    cell.dataset.c = c;

    cell.addEventListener('click', () => handleClick(cell, r, c));

    gridEl.appendChild(cell);
    cells[r][c] = cell;
  }
}

function handleClick(cell, r, c) {
  if (!startSet) {
    cell.classList.add('start');
    startSet = true;
  } else if (!endSet) {
    cell.classList.add('end');
    endSet = true;
  } else {
    if (!cell.classList.contains('start') && !cell.classList.contains('end')) {
      cell.classList.toggle('wall');
    }
  }
}
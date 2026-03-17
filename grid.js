const ROWS = 15;
const COLS = 20;
const gridEl = document.getElementById('grid');

let startCell = null;
let endCell = null;
let cells = [];

for (let r = 0; r < ROWS; r++) {
  cells[r] = [];
  for (let c = 0; c < COLS; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.r = r;
    cell.c = c;
    cell.addEventListener('click', () => handleClick(cell, r, c));
    gridEl.appendChild(cell);
    cells[r][c] = cell;
  }
}

function handleClick(cell, r, c) {
  if (!startCell) {
    cell.classList.add('start');
    cell.r = r;
    cell.c = c;
    startCell = cell;
  } else if (!endCell) {
    cell.classList.add('end');
    cell.r = r;
    cell.c = c;
    endCell = cell;
  } else {
    if (!cell.classList.contains('start') && !cell.classList.contains('end')) {
      cell.classList.toggle('wall');
    }
  }
} // ← this was missing!

function clearPath() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (cells[r][c].classList.contains('visited') || 
          cells[r][c].classList.contains('path')) {
        cells[r][c].classList.remove('visited', 'path');
      }
    }
  }
  document.getElementById('stepCounter').textContent = 'Path length: -';
}
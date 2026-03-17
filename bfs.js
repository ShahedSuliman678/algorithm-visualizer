async function runBFS() {
  const queue = [];
  const visited = [];
  const prev = [];
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];

  for (let r = 0; r < ROWS; r++) {
    visited[r] = [];
    prev[r] = [];
    for (let c = 0; c < COLS; c++) {
      visited[r][c] = false;
      prev[r][c] = null;
    }
  }

  queue.push(startCell);
  visited[startCell.r][startCell.c] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.r === endCell.r && current.c === endCell.c) {
      let step = prev[current.r][current.c];
      while (step && !cells[step.r][step.c].classList.contains('start')) {
        cells[step.r][step.c].classList.add('path');
        await delay(50);
        step = prev[step.r][step.c];
      }
      return;
    }

    for (const [dr, dc] of directions) {
      const nr = current.r + dr;
      const nc = current.c + dc;

      if (nr >= 0 && nr < ROWS &&
          nc >= 0 && nc < COLS &&
          !visited[nr][nc] &&
          !cells[nr][nc].classList.contains('wall')) {

        visited[nr][nc] = true;
        prev[nr][nc] = current;
        queue.push(cells[nr][nc]);

        if (!cells[nr][nc].classList.contains('end')) {
          cells[nr][nc].classList.add('visited');
          await delay(20);
        }
      }
    }
  }

  alert('No path found!');
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
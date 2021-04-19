//Set variables:
const container = document.querySelector('#container');
const div = document.getElementsByClassName('cell');
const reset = document.querySelector('#reset');
const grid = document.getElementById('grid');
const rainbow = document.getElementById('rainbow');
window.addEventListener('load', defaultGrid);
let cell;
let target;

//Create div/cells:
function createCell(numCell) {
  for (let i = 0; i < numCell; i++) {
    cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

//Create grid with div/cells:
function createGrid(numRow, numCol) {
  container.style.setProperty('--numRows', numRow);
  container.style.setProperty('--numCols', numCol);
  for (let i = 0; i < numRow; i++) {
    createCell(numCol);
  }
}

//Grid set on click:
grid.addEventListener('click', function promptGrid() {
  let input = prompt('Set size 1-100:');
  while (input < 1 || input > 100) {
    input = prompt('Try again.\nSet size 1-100:');
  }
  removeCell();
  createGrid(input, input);
});

//Target on-hover effect:
function defaultColor(target) {
  target.style.backgroundColor = 'purple';
}

//Rainbow pallette:
function rainbowColor(target) {
  const r = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 255);
  target.style.backgroundColor = `rgb(${r}, ${b}, ${a})`;
}

rainbow.addEventListener('click', function () {
  container.addEventListener('mouseover', function (e) {
    target = e.target;
    if (target.matches('div.cell')) {
      rainbowColor(target);
    }
  });
});

//Default color:
container.addEventListener('mouseover', function (e) {
  target = e.target;

  if (target.matches('div.cell')) {
    defaultColor(target);
  }
});

// Default grid layout:
function defaultGrid() {
  createCell(20);
  createGrid(20, 20);
}

//Reset Button:
reset.addEventListener('click', function () {
  container.addEventListener('mouseover', function (e) {
    target = e.target;
    if (target.matches('div.cell')) {
      defaultColor(target);
    }
  });
  removeCell();
  defaultGrid();
});

//Delete div/cells
function removeCell() {
  let arr = Array.from(container.childNodes);
  arr.map((e) => {
    container.removeChild(e);
  });
}

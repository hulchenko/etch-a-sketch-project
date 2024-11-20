const container = document.querySelector("#container");
const div = document.getElementsByClassName("cell");
const reset = document.querySelector("#reset");
const grid = document.getElementById("grid");
const defaultColour = document.getElementById("default");
const rainbow = document.getElementById("rainbow");

// Init
window.addEventListener("load", defaultGrid);

function createCell(numCell) {
  console.log("fired");
  for (let i = 0; i < numCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

function createGrid(numRow, numCol) {
  container.style.setProperty("--numRows", numRow);
  container.style.setProperty("--numCols", numCol);
  for (let i = 0; i < numRow; i++) {
    createCell(numCol);
  }
}

function removeCells() {
  const arr = Array.from(container.childNodes);
  arr.forEach((e) => {
    container.removeChild(e);
  });
}

function defaultGrid() {
  createCell(20);
  createGrid(20, 20);
}

function defaultColor(target) {
  target.style.backgroundColor = "purple";
}

function rainbowColor(target) {
  const r = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 255);
  target.style.backgroundColor = `rgb(${r}, ${b}, ${a})`;
}

// Event listeners ---
reset.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    if (e.target.matches("div.cell")) {
      defaultColor(e.target);
    }
  });
  removeCells();
  defaultGrid();
});

container.addEventListener("mouseover", function (e) {
  if (e.target.matches("div.cell")) {
    defaultColor(e.target);
  }
});

rainbow.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    if (e.target.matches("div.cell")) {
      rainbowColor(e.target);
    }
  });
});

defaultColour.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    if (e.target.matches("div.cell")) {
      defaultColor(e.target);
    }
  });
});

grid.addEventListener("click", function promptGrid() {
  const input = prompt("Set size 1-100:");
  if (!input || input === "" || isNaN(input)) return;
  if (input > 1 || input <= 100) {
    removeCells();
    createGrid(input, input);
  }
});

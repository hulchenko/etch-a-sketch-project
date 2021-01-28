//Set variables:
let container = document.querySelector('#container');
let reset = document.querySelector('#reset');
let cell;
let target;

//Reset Button:
reset.addEventListener('click', function(){
    window.location.reload();
});

//Create div/cells:
function createCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}


//Create grid with div/cells:
function createGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let i = 0; i < numRow; i++) {
        createCell(numCol);
    }      
}

//Prompt input:
function promptGrid() {
    let input = prompt('Input grid size:\nMin: 1\nMax: 100'); 
     if (input >= 1 && input <= 100) {
         createGrid (input,input);
     }else {
         do {
             input = prompt("Invalid input! Try Again!\nInput grid size:\nMin: 1\nMax: 100");
         }
         while(input < 1 || input > 100);
         createGrid (input,input);
     }
 }
 promptGrid();

 //Target on-hover effect:
 function changeColor (target) {
    target.style.backgroundColor = 'purple';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});
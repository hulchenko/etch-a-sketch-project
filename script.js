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
function createCell (cellCount) {
    for (let c = 0; c < cellCount; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}


//Create grid with div/cells:
function createGrid (rowCount, columnCount) {
    container.style.setProperty('--rows', rowCount);
    container.style.setProperty('--columnCounts', columnCount);
    for (let i = 0; i < rowCount; i++); {
        createCell(columnCount);
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
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});
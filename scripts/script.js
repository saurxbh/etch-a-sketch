window.addEventListener('DOMContentLoaded', (event) =>{
    drawGrid();
});

let mode = 'draw';
let mouseDown = false;
window.addEventListener('mousedown', () => mouseDown = true);
window.addEventListener('mouseup', () => mouseDown = false);

// function for drawing grid, default 16x16
function drawGrid(dimension = 16) {
    // Calculate width and height of each cell in the grid
    let cellWidth = 640/dimension + "px";
    let cellHeight = 640/dimension + "px";

    // Container to display the grid
    const grid_container = document.querySelector('#grid-container');

    // Iterate through the loop for each cell in each row
    for (let j = 0; j < dimension * dimension; j++) {
        // Element for each cell in the row
        const cell = document.createElement('div');
        // Create a class attribute
        const classAttribute = document.createAttribute('class')
        // Set the value of class attribute
        classAttribute.value = 'cell';
        // Add the attribute
        cell.setAttributeNode(classAttribute);
        // Create another attribute
        const widthHeightAttribute = document.createAttribute('style');
        // Set the value of the attribute
        widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight}; border: 1px solid black; background-color: white`;
        // Add the attribute
        cell.setAttributeNode(widthHeightAttribute);
        // Add the element to the DOM
        grid_container.appendChild(cell);
    }
    const gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridCell => gridCell.addEventListener('mousedown', paintCell));
    gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', hoverEffect));
}

// function for hover effect
function hoverEffect(e) {
    e.target.style.backgroundColor = 'black';
    e.target.addEventListener('transitionend', () => e.target.style.backgroundColor = 'white');
}

function paintCell(e) {
    switch(mode) {
        case 'draw':
            e.target.style.backgroundColor = 'black';
            break;
        case 'erase':
            e.target.style.backgroundColor = 'white';
            break;
    }
}

function resetGrid() {
    const allCells = document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
    let cellsPerSide = prompt("How many cells per side? (Max: 100)");
    let numberCells = parseInt(cellsPerSide, 10);
    if (isNaN(numberCells)) {
        alert("You must enter a positive integer. (Max: 100)");
        return;
    } else if (numberCells < 0 || numberCells > 100) {
        alert("You must enter a positive integer. (Max: 100)");
        return;
    }
    // Delete all the divs from the main container
    const grid_container = document.querySelector("#grid-container");
    while (grid_container.firstChild) grid_container.removeChild(grid_container.firstChild);
    drawGrid(numberCells);
};

function changeMode() {
    const modeButton = document.querySelector('#erase');
    if (modeButton.value === 'Erase') {
        mode = 'erase';
        modeButton.value = 'Draw';
    } else {
        mode = 'draw';
        modeButton.value = 'Erase';
    }
}
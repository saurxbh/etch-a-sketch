window.addEventListener('DOMContentLoaded', (event) =>{
    drawGrid();
});

// function for drawing grid, default 16x16
function drawGrid(dimension = 16) {
    // Calculate width and height of each cell in the grid
    let cellWidth = 640/dimension + "px";
    let cellHeight = 640/dimension + "px";

    // Container to display the grid
    const grid_container = document.querySelector('#grid-container');
    let divArray = [];

    // Iterate through loop for each row of the grid
    for (let i = 0; i < dimension; i++) {
        // Element for each row in the grid
        divArray[i] = document.createElement('div');
        grid_container.appendChild(divArray[i]);
        // Iterate through the loop for each cell in each row
        for (let j = 0; j < dimension; j++) {
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
            widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight}; border: 1px solid black;`;
            // Add the attribute
            cell.setAttributeNode(widthHeightAttribute);
            // Add the element to the DOM
            divArray[i].appendChild(cell);
        }
    }
}
const container = document.getElementById('container');
let innerCell = document.getElementsByClassName('cell')
let colorBeingChanged = 'colorChange';
let reset = document.getElementById('reset')
let gridSize = prompt('How wide and tall would you like your etch-a-sketch?');

function createGrid (width) {
    let total = width * width;
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    };
};

createGrid(gridSize);




function hoverChecker (arry) {
    for(let i = 0; i < arry.length; i++){
        arry[i].addEventListener('mouseover', function (e) {
            e.target.classList.add('colorChange')           // when accessing the e you have to follow it with target because that is how the DOM saves it. always can console.log function(e) to learn more about target.
        });
    };
};

hoverChecker(innerCell);

reset.addEventListener('click', function () {
    resetGrid();
})


function resetGrid () {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let newGrid = prompt('How wide and tall would you like your new etch-a-sketch?')
    createGrid((newGrid));
}
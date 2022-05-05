const container = document.getElementById('container');
let innerCell = document.getElementsByClassName('cell')
let colorBeingChanged = 'colorChange';
let reset = document.getElementById('reset')
let contWidth = container.style.width;
let contHeight = container.style.height;
console.log(contWidth)

function createGrid (width) {
    let total = width * width;
    let cellWH = Math.sqrt(640000/(total)) - 2;     //figures the size for each of the cells width and height. Also could use the container width / cell number to get width of each cell and then subtract the border
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cellWH + 'px';
        cell.style.height = cellWH + 'px';
        container.appendChild(cell);
    };
};

let gridSize = prompt('How wide and tall would you like your etch-a-sketch?');
if(gridSize > 100) {
    alert('Grid cannot be larger than 100X100')
} else {
    createGrid(gridSize);
};



function hoverChecker (arry) {
    for(let i = 0; i < arry.length; i++){
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b}`;
        arry[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = rgb
            // e.target.classList.add('colorChange')           // when accessing the e you have to follow it with target because that is how the DOM saves it. always can console.log function(e) to learn more about target.
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
    if(newGrid > 100) {
        alert('Grid cannot be over 100X100')
    } else {
        createGrid((newGrid));
        hoverChecker(innerCell)
    }
}


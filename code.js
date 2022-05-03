const container = document.getElementById('container');
let innerCell = document.getElementsByClassName('cell')
let colorBeingChanged = 'colorChange';

function createGrid (width, height) {
    let total = width * height;
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    };
};

createGrid(16, 16);




function hoverChecker (arry) {
    for(let i = 0; i < arry.length; i++){
        arry[i].addEventListener('mouseover', function (e) {
            e.target.classList.add('colorChange')           // when accessing the e you have to follow it with target because that is how the DOM saves it. always can console.log function(e) to learn more about target.
        });
    };
};

hoverChecker(innerCell);

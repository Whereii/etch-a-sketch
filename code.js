const container = document.getElementById('container');


function createGrid (width, height) {
    let total = width * height;
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell)
    };
};

createGrid(16, 16);
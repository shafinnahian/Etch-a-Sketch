function gridMaker(size){
    const grid = document.querySelector('.grid-pad-js');

    let square = grid.querySelectorAll('div');
    square.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for(let i = 0; i < amount; i++){
        let square = document.createElement('div');

        square.addEventListener("mouseover",() => {
            square.style.backgroundColor = "black";
        })

        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
    }
}

function resetBoard(){
    let reset = document.querySelector('.grid-pad-js');
    let square = reset.querySelectorAll('div');

    square.forEach((div)=> div.style.backgroundColor = 'white');
}

function sizeGrid(size){
    if (size > 250) {
        alert('Not possible');
        return;
    }

    gridMaker(size);
}
sizeGrid(50);

// const gridContainer = document.querySelector('.grid-pad-js');

// // Create a 16x16 grid
// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         const gridCell = document.createElement('div');
//         gridCell.classList.add('grid-cell');
//         gridContainer.appendChild(gridCell);
//     }
// }

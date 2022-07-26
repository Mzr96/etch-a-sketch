'use strict'

const grid = document.querySelector('.grid');


for (let i = 0; i < 64; i++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.add("row", `row--${i + 1}`);
    for (let j = 0; j < 64; j++) {
        const cellGrid = document.createElement("div");
        cellGrid.classList.add("cell", `cell--${i + 1}-${j + 1}`);
        rowGrid.appendChild(cellGrid);
        cellGrid.addEventListener('mouseover', function (e) {
            e.target.classList.add('hovered')
        })
    }
    grid.appendChild(rowGrid)
}


'use strict'

const grid = document.querySelector('.grid');
const sizeButtons = document.querySelectorAll('.set-size')
const btnReset = document.querySelector('.reset')
let gridSize = 32;

const createGrid = function () {
    for (let i = 0; i < gridSize; i++) {
        const rowGrid = document.createElement("div");
        rowGrid.classList.add("row", `row--${i + 1}`);
        rowGrid.style.height = `${560 / gridSize}px`
        for (let j = 0; j < gridSize; j++) {
            const cellGrid = document.createElement("div");
            cellGrid.classList.add("cell", `cell--${i + 1}-${j + 1}`);
            cellGrid.style.height = `${560 / gridSize}px`
            cellGrid.style.width = `${560 / gridSize}px`
            rowGrid.appendChild(cellGrid);
            cellGrid.addEventListener('mouseover', function (e) {
                e.target.classList.add('hovered')
                e.target.style.backgroundColor = randomColor()
            })
        }
        grid.appendChild(rowGrid)

    
    }
    grid.classList.add('full')
}

const resetGrid = function () {
    if (grid.classList.contains('full')) {
        const rows = document.querySelectorAll('.row')
        rows.forEach(row => row.remove())
        grid.classList.remove('full')
    }
}

const randomColor = function () {
    const r  = Math.floor(Math.random() * 255) + 1;
    const g  = Math.floor(Math.random() * 255) + 1;
    const b  = Math.floor(Math.random() * 255) + 1;
    const color = `rgb(${r}, ${b}, ${g})`;
    return color;
}

sizeButtons.forEach(btn => btn.addEventListener('click', function (e) {
    if (e.target.classList.contains('small')) {
        gridSize = 16;
        resetGrid()
        createGrid();
    } else if (e.target.classList.contains('medium')) {
        gridSize = 32;
        resetGrid()
        createGrid();
    } else if (e.target.classList.contains('large')) {
        gridSize = 64;
        resetGrid()
        createGrid();
    }
}))

btnReset.addEventListener('click', resetGrid);
createGrid()
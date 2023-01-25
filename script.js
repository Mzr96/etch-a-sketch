class DOM {
  constructor() {}

  resetGrid(gird) {
    grid.innerHTML = "";
  }

  createGridCells(grid, size) {
    const cellsNumber = size * size;
    const html = `<span></span>`;
    while (cellsNumber > 0) {
      grid.insertAdjacentHTML("afterbegin", html);
    }
  }
}

class App {
  constructor() {
    document.querySelector(".grid").addEventListener();
  }
}

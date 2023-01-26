class DOM {
  #grid = document.querySelector(".grid");
  #isPushed = false;
  #displayedGridSize = document.querySelector(".grid-size--current");
  #gridSize = document.getElementById("grid-size__input");
  #gridColor = document.querySelector("#grid-color__input");
  #controller = document.querySelector(".grid-controller");
  #allCells;

  #btnColor = document.querySelector(".btn-color");
  #btnClear = document.querySelector(".btn-clear");
  #btnErase = document.querySelector(".btn-erase");
  #btnRandom = document.querySelector(".btn-random");

  constructor() {
    this.init();
    // this.draw();
    this.#btnClear.addEventListener("click", this.resetGrid.bind(this));
    this.#controller.addEventListener(
      "click",
      this.toggleActiveButton.bind(this)
    );
  }

  init() {
    this.createGrid();
    this.draw();
    this.displayGridSize();
    this.responsiveGridSize();
  }

  toggleActiveButton(e) {
    if (e.target.classList.contains("btn")) {
      if (e.target.classList.contains("btn-clear")) return;
      const currentActiveButton = document.querySelector(".active");
      currentActiveButton.classList.remove("active");
      e.target.classList.add("active");
    }
  }

  resetGrid() {
    this.clearGrid();
    this.createGrid();
    this.draw();
  }

  draw() {
    let color;
    this.#allCells = document.querySelectorAll(".grid span");
    this.mousePushed();
    this.#allCells.forEach((cell) => {
      cell.addEventListener("mouseenter", (e) => {
        if (!this.#isPushed) return;
        color = this.drwaingColor();
        e.target.style.backgroundColor = color;
      });
      cell.addEventListener("click", (e) => {
        color = this.drwaingColor();
        e.target.style.backgroundColor = color;
      });
    });
  }

  mousePushed() {
    this.#grid.addEventListener("mousedown", () => {
      this.#isPushed = true;
    });
    this.#grid.addEventListener("mouseup", () => {
      this.#isPushed = false;
    });
  }

  drwaingColor() {
    if (this.#btnColor.classList.contains("active"))
      return this.#gridColor.value;
    if (this.#btnRandom.classList.contains("active")) {
      return this.randomColor();
    }
    if (this.#btnErase.classList.contains("active")) return "#EEEEEE";
  }

  randomColor() {
    const validItem = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color = color + validItem[Math.floor(Math.random() * 16)];
    return color;
  }
  // APP
  responsiveGridSize() {
    this.#gridSize.addEventListener("click", () => {
      this.displayGridSize();
      this.resetGrid();
    });
    this.#gridSize.addEventListener("mousemove", () => {
      this.displayGridSize();
    });
  }
  //DOM P
  clearGrid() {
    this.#grid.innerHTML = "";
  }
  //DOM P
  createGridCells() {
    let cellsNumber = this.#gridSize.value * this.#gridSize.value;
    while (cellsNumber > 0) {
      this.#grid.insertAdjacentHTML("afterbegin", "<span></span>");
      cellsNumber--;
    }
  }
  //DOM
  createGrid() {
    this.createGridCells();
    this.#grid.style.gridTemplateColumns = `repeat(${
      this.#gridSize.value
    },1fr)`;
  }
  //DOM
  displayGridSize() {
    this.#displayedGridSize.textContent = `${this.#gridSize.value} * ${
      this.#gridSize.value
    }`;
  }
}

const DOMStuff = new DOM();

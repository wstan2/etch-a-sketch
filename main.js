let paintColor = "black";

const mainGrid = document.querySelector(".mainGrid");

let drawGrid = size => {
  let resizable = 500 / size + "px";

  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.style.height = resizable;
    gridCell.style.width = resizable;
    gridCell.style.background = "white";
    gridCell.classList.add("finalGrid");
    mainGrid.appendChild(gridCell);
  }
};

let reset = () => {
  let gridCells = document.querySelectorAll(".finalGrid");
  gridCells.forEach(gridCell => {
    gridCell.style.background = "white";
  });
};

let erase = () => {
  paintColor = "white";
};

let black = () => {
  paintColor = "black";
};

let random = () => {
  let hue =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  paintColor = hue;
};

let resizeGrid = () => {
  let gridCells = document.querySelectorAll(".finalGrid");
  var br = document.querySelectorAll("br");

  br.forEach(br => br.remove());

  gridCells.forEach(gridCell => gridCell.remove());

  let newSize = prompt("Please input a new size");

  drawGrid(newSize);
};

let paint = e => {
  const target = e.target;

  if (paintColor != "black" && paintColor != "white") {
    random();
    target.style.backgroundColor = paintColor;
  } else {
    target.style.backgroundColor = paintColor;
  }
};
drawGrid(16);

mainGrid.addEventListener("mouseover", paint);

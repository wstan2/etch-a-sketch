drawGrid(16);
let paintColor = "gray";

function drawGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let gridCell = document.createElement("div");
      gridCell.style.height = "25px";
      gridCell.style.width = "25px";
      gridCell.style.background = "white";
      gridCell.classList.add("finalGrid");
      mainGrid.appendChild(gridCell);
    }

    let newLine = document.createElement("br");
    mainGrid.appendChild(newLine);
  }
}

let paint = e => {
  const target = e.target;
  target.style.backgroundColor = paintColor;
};

mainGrid.addEventListener("mouseover", paint);



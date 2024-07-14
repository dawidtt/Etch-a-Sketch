function createGrid(numberOfSquares = 256) {
  const container = document.querySelector("#container");
  for (let i = 0; i < numberOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("inner-grid");
    const innerGridHeight = 600 / Math.sqrt(numberOfSquares);
    const innerGridFlexBais = 100 / Math.sqrt(numberOfSquares);
    div.style.cssText = `height: ${innerGridHeight}px; flex-basis: ${innerGridFlexBais}%;`;
    div.id = `element-${i}`;
    container.appendChild(div);
    let currentElement = document.querySelector(`#element-${i}`);
    const colorOfSquare = currentElement.addEventListener("mouseover", () => {
      currentElement.style.backgroundColor = "black";
    });
  }
}
createGrid();
const button = document.querySelector("button");

function askForSizeOfSquares() {
  let numberOfSquares = prompt("How many squares per side do you want?");
  if (numberOfSquares > 100) {
    alert("Number of squares per side have to be less than 100.");
    askForSizeOfSquares();
    return;
  }
  const wholeNumberOfSquares =
    parseInt(numberOfSquares) * parseInt(numberOfSquares);
  deleteGrid();
  createGrid(wholeNumberOfSquares);
}
function deleteGrid() {
  const container = document.querySelector("#container");
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
button.addEventListener("click", askForSizeOfSquares);

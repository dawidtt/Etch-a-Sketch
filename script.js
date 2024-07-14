const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function getCharacter(index) {
  return hexCharacters[index];
}
function generateColor() {
  let hexColorRep = "#";
  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }

  return hexColorRep;
}

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
      const color = generateColor();
      currentElement.style.backgroundColor = color;
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

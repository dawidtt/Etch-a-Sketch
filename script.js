function createGrid() {
  const container = document.querySelector("#container");
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("inner-grid");
    div.id = `element-${i}`;
    container.appendChild(div);
    let currentElement = document.querySelector(`#element-${i}`);
    currentElement.addEventListener("mouseover", () => {
      currentElement.style.backgroundColor = "black";
    });
  }
}

createGrid();

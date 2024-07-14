function createGrid() {
  const container = document.querySelector("#container");
  for (let i = 0; i < 256; i++) {
    console.log("halo");
    const div = document.createElement("div");
    div.classList.add("inner-grid");
    container.appendChild(div);
  }
}
createGrid();

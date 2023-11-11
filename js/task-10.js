function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfBoxes = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxCollection = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = numberOfBoxes.value;

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxCollection.insertAdjacentElement("beforeend", newBox);
  }
}

function destroyBoxes() {
  boxCollection.innerHTML = "";
}

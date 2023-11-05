const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInput);

function onInput(evt) {
  evt.currentTarget.value.trim() !== ""
    ? (outputName.textContent = evt.currentTarget.value.trim())
    : (outputName.textContent = "Anonymous");
}

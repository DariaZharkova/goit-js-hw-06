const sizeSlider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeSlider.addEventListener("input", onInput);

function onInput(evt) {
  text.style.fontSize = evt.currentTarget.value + "px";
}

const textInput = document.querySelector("#validation-input");
const requiredLength = parseInt(textInput.dataset.length);

textInput.addEventListener("blur", onBlur);

function onBlur(evt) {
  const input = evt.currentTarget;
  if (input.value.length === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

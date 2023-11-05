const displayValue = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  displayValue.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  displayValue.textContent = counterValue;
});

const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(btnDecrementEl);
const btnIncrementbtn = document.querySelector(
  'button[data-action="increment"]'
);
let valueEl = document.querySelector("#value");

let counterValue = 0;
btnDecrementEl.addEventListener("click", (event) => {
  valueEl.textContent -= 1;
});
btnIncrementbtn.addEventListener("click", (event) => {
  counterValue = parseInt(valueEl.textContent);
  valueEl.textContent = counterValue + 1;
});

const inputEl = document.querySelector("#name-input");
let nameAutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInputValue);

function handleInputValue(event) {
  if (event.target.value === "") {
    nameAutputEl.textContent = "Anonymous";
  } else {
    nameAutputEl.textContent = event.target.value;
  }
}

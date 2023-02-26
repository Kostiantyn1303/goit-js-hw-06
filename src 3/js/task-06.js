const inputEl = document.querySelector("#validation-input");

const lengthAtributEl = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", (event) => {
  inputEl.classList.toggle(
    "valid",
    event.target.value.length >= lengthAtributEl
  );
  inputEl.classList.toggle(
    "invalid",
    event.target.value.length < lengthAtributEl
  );
});

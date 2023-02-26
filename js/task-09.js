const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

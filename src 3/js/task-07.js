const inputFontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("input", (event) => {
  let changeSize = event.target.value;
  textEl.style.fontSize = `${changeSize}px`;
});

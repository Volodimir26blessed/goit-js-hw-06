const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
});

const color = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

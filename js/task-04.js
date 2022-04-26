const counterValue = {
  value: 0,

  encrement() {
    this.value += 1;
  },

  dicrement() {
    this.value -= 1;
  },
};

const dicrementEl = document.querySelector("button[data-action=decrement]");
const encrementEl = document.querySelector("button[data-action=increment]");
const span = document.querySelector("#value");

encrementEl.addEventListener("click", function () {
  counterValue.encrement();

  span.textContent = counterValue.value;
});

dicrementEl.addEventListener("click", function () {
  counterValue.dicrement();

  span.textContent = counterValue.value;
});

// logic for .button

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clickedfbjdn fjn fjxd");
// };

// button.addEventListener("click", handleClick);

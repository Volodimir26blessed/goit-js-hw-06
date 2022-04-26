// Напиши скрипт который, при наборе текста в инпуте input#name-input

// (событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const showText = () => {
  input.addEventListener("input", (event) => {
    console.log(event.target.value);

    span.textContent = event.target.value ? event.target.value : "Anonymous";
  });
};
showText();

// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");

// function showMessage() {
//   input.addEventListener("input", (event) => {
//     const currentValue = event.target.value;
//     const DEFAULT_VALUE = "Anonymous";

//     span.textContent = currentValue ? currentValue : DEFAULT_VALUE;
//   });
// }

// showMessage();

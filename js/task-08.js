const form = document.querySelector(".login-form");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");

form.addEventListener("submit", foo);

function foo(eventy) {
  eventy.preventDefault();

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Заполни все поля");
  }

  const usserEmail = event.currentTarget.elements.email.value;
  const userPass = event.currentTarget.elements.password.value;

  console.log(userData);
  form.reset();
}

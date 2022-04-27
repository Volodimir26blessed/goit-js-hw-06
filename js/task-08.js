const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmitForm);
function handleSubmitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
  console.dir(event.currentTarget.elements.email.value);
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (!email.trim() || !password.trim()) {
    return alert("Введить будь-ласка email");
  }
  console.log({ email, password });
  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector(".input-email");
// const inputPassword = document.querySelector(".input-password");

// form.addEventListener("submit", foo);

// function foo(eventy) {
//   eventy.preventDefault();

//   if (inputEmail.value === "" || inputPassword.value === "") {
//     alert("Заполни все поля");
//   }

//   const {
//     event: { email, password },
//   } = event.currentTarget;
//   console.log(`Email: ${email.value}, Password: ${password.value}`);

//   // const userEmail = event.currentTarget.elements.email.value;
//   // const userPass = event.currentTarget.elements.password.value;

//   console.log(userData);
//   form.reset();
// }

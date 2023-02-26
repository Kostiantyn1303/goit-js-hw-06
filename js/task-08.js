const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };
  console.log(formData);
  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені ");
  }
  event.target.reset();
}

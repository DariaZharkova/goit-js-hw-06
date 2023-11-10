const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please, fill in all fields!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  evt.currentTarget.reset();
}

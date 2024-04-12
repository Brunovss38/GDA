const submissionButton = document.getElementById("submissionButton");
const body = document.getElementById("body");


const inputEmail = document.getElementById("email");
const inputPasswordValue = document.getElementById("password");


if (submissionButton) {
  submissionButton.addEventListener("click", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();



  const inputEmailValue = inputEmail.value;
  const inputPasswordValue = inputPassword.value;

  const url = "/";

  const user = {
    email: inputEmailValue,
    password: inputPasswordValue,

  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    return response.text();
  }).then((result) => {
    body.innerHTML = ''
    body.innerHTML = result
  });
}

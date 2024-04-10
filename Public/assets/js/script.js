//* LOGIN
let loginData = document.querySelector("#loginData");

function handleLogin() {
  //! Login section
  // Get the password and email of the user
  let email = document.querySelector("#emailLogin").value;
  let password = document.querySelector("#passwordLogin").value;
  let emailCredentials = {
    email: email,
    password: password,
  };

  // Define parameters to use
  let params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(emailCredentials),
  };

  // send value to login.php
  fetch("http://gestionapprenant/Public", params)
    .then((res) => res.json())
    .then((data) => {
        console.log("bibibiibbibi")
      if (data.status === "success") {
        loginData.innerHTML = data.message + "<br> Vous allez etre redirigé";
        if (data.userRole == 5 || data.userRole == 6) {
        }
      } else {
        loginData.innerHTML = data.message;
      }
    })
    .catch((error) => console.error("Error:", error));
}

export function userRegister() {
  const homePage = document.querySelector("#home-page");
  homePage.style.display = "none";

  const signedUpSection = document.querySelector("#form-sign-up");
  signedUpSection.style.display = "block";

  const form = signedUpSection.querySelector("form");

  form.addEventListener("submit", registerUser);
}

function registerUser(e) {
  e.preventDefault();

    const form = e.target;
    const formDate = Object.fromEntries(new FormData(form).entries());

    for (let keys in formDate) {
        if (formDate[keys] === "") {
          alert('All field must be filled!')
          return
        }
      }

    if (formDate.password.length < 6 || formDate.repeatPassword.length < 6) {
      alert('Invalid password!');
      return
    }

    if (formDate.password !== formDate.repeatPassword) {
      alert('Invalid repeat password!')
      return
    }

  

    localStorage.setItem("email", formDate.email);
    localStorage.setItem("password", formDate.password);

    location.href = '/';
 
}

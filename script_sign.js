const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");
const id_login = document.getElementById("id_user_login");
const id_user_login_sign = document.getElementById("id_user_login_sign")
const sign_up_button = document.getElementById("sign_up_button")
// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
// js code to appear signup and login form
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});
login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});
var user_id='Chernyshev Egor'
    var user_data={
        occupation: 'web-analyst',
        age: 27,
        education: 'bachelor degree'
    }
    localStorage.setItem(user_id, JSON.stringify(user_data))
var user_id= id_login;
if (localStorage.getItem(user_id)){
  user_data=JSON.parse(localStorage.getItem(user_id))
}
sign_up_button.addEventListener("click", () => {
  var user_id= id_user_login_sign
    var user_data={
        occupation: 'web-analyst',
        age: 27,
        education: 'bachelor degree'
    }
    localStorage.setItem(user_id, JSON.stringify(user_data))
})
// var user_id= id_user_login_sign
//     var user_data={
//         occupation: 'web-analyst',
//         age: 27,
//         education: 'bachelor degree'
//     }
//     localStorage.setItem(user_id, JSON.stringify(user_data))

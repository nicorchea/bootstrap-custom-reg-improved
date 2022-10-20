"use strict";

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

// Solucion posible sin usar BOOTSTRAP

// const btn = document.getElementById("regBtn");

// btn.addEventListener("click", function () {
//   let nombre = document.getElementById("nombre").value;
//   let apellido = document.getElementById("apellido").value;
//   let email = document.getElementById("email").value;
//   let psw1 = document.getElementById("password1").value;
//   let psw2 = document.getElementById("password2").value;
//   let terminos = document.getElementById("terminos");

//   if (
//     nombre !== "" &&
//     apellido !== "" &&
//     email !== "" &&
//     psw1 == psw2 &&
//     terminos.checked
//   ) {
//     document.getElementById("alert-success").style.display = "block";
//     showAlertSuccess();
//   } else {
//     document.getElementById("alert-danger").style.display = "block";
//     showAlertError();
//   }
// });

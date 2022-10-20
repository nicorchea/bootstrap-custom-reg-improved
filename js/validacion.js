"use strict";

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  esconderAlert();
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  esconderAlert();
}

function esconderAlert() {
  $("#alert-success").delay(2500).hide(300);
  $("#alert-danger").delay(2500).hide(300);
}

const CHECKBOX = document.getElementById("terminos");

const ERROR_DIV = document.getElementById("invalidTerms");

const BTN_TERMS = document.getElementById("btn");

function validate() {
  if (CHECKBOX.checked) {
    ERROR_DIV.classList.add("text-success", "d-none");
    BTN_TERMS.classList.remove("text-danger");
  } else {
    ERROR_DIV.classList.remove("d-none");
    ERROR_DIV.classList.add("text-danger");
    BTN_TERMS.classList.add("text-danger");
  }
}

CHECKBOX.onclick = () => {
  validate();
};

// function validate() {
//   const ERROR_MSG = document.getElementById("invalidTerms");

//   if (ERROR_MSG === null) {
//     alert("asd");
//   }
// }

// const CHECKBOX = document.getElementById("terminos");

// CHECKBOX.onclick = () => {
//   validate();
// };

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

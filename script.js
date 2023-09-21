"use strict";

const MIN_LENGTH = 6;
const MAX_LENGTH = 16;

const password = document.querySelector("#password");
const rePassword = document.querySelector("#password_confirm");
const checkPassLength = document.querySelector(".password-wrong-size");
const passwordsMatch = document.querySelector(".passwords-match");
const passwordsDontMatch = document.querySelector(".passwords-dont-match");
const name1 = document.querySelector("#firstName");

function checkPasswords() {
  if (password.value == rePassword.value) {
    passwordsMatch.classList.remove("hidden");
    passwordsDontMatch.classList.add("hidden");
    rePassword.style.border = "1px solid mediumspringgreen";
    password.style.border = "1px solid mediumspringgreen";
  } else {
    passwordsDontMatch.classList.remove("hidden");
    passwordsMatch.classList.add("hidden");
    rePassword.style.border = "1px solid red";
    password.style.border = "1px solid red";
  }
}

function checkPasswordLengths() {
  if (!password.checkValidity()) {
    checkPassLength.classList.remove("hidden");
  } else checkPassLength.classList.add("hidden");
}

window.addEventListener("input", checkPasswords);
window.addEventListener("input", checkPasswordLengths);

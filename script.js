"use strict";

const password = document.querySelector("#password");
const rePassword = document.querySelector("#password_confirm");
const checkPassLength = document.querySelector(".password-wrong-size");
const passwordsMatch = document.querySelector(".passwords-match");
const passwordsDontMatch = document.querySelector(".passwords-dont-match");
const name1 = document.querySelector("#firstName");

function passwordsMatchFn() {
  passwordsMatch.classList.remove("hidden");
  passwordsDontMatch.classList.add("hidden");
}

function passwordsDontMatchFn() {
  passwordsDontMatch.classList.remove("hidden");
  passwordsMatch.classList.add("hidden");
}

function checkPasswords() {
  if (
    password.value == rePassword.value &&
    !password.checkValidity() &&
    password.value !== ""
  ) {
    passwordsMatchFn();
  } else if (password.value == rePassword.value && password.checkValidity()) {
    passwordsMatchFn();
    rePassword.style.border = "1px solid mediumspringgreen";
    password.style.border = "1px solid mediumspringgreen";
  } else {
    passwordsDontMatchFn();
    rePassword.style.border = "1px solid red";
    password.style.border = "1px solid red";
  }
}

function checkPasswordLengths() {
  if (!password.checkValidity()) {
    checkPassLength.classList.remove("hidden");
  } else checkPassLength.classList.add("hidden");
}

[password, rePassword].forEach((password) => {
  password.addEventListener("input", checkPasswords);
  password.addEventListener("input", checkPasswordLengths);
});

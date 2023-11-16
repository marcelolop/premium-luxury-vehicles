"use strict";

// Add event listener
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

// Select HTML element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get a (node) list of HTML elements as array
function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// Generate random number between - and including - 'min' and 'max'
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create an HTML element
function create(element, parent = document) {
  return parent.createElement(element);
}

// ! Main Code

const overlay = select(".overlay");
const signUpBtn = select("#sign-up");
const modal = select(".modal");

function openModal() {
  modal.classList.add("visible");
  overlay.classList.add("visible");
}

function closeModal() {
  modal.classList.remove("visible");
  overlay.classList.remove("visible");
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

onEvent("click", signUpBtn, openModal);

onEvent("click", overlay, closeModal);

onEvent("keyup", document, closeModalOnEsc);

// ! Input Validation

const email = select("#email");
const password = select("#password");
const signUpModalBtn = select("#sign-up-modal-btn");

function validateEmail() {
  const value = email.value.trim();
  const isValid =
    value.length > 6 &&
    value.includes("@") &&
    value.includes(".") &&
    value.lastIndexOf(".") < value.length - 2 &&
    !value.includes(" ");
  return isValid;
}

function validatePassword() {
  const value = password.value.trim();
  const isValid = value.length > 5;
  return isValid;
}

function validateForm() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isFormValid = isEmailValid && isPasswordValid;
  return isFormValid;
}

onEvent("input", email, () => {
  if (validateEmail()) {
    email.classList.add("valid");
  } else {
    email.classList.remove("valid");
  }
});

onEvent("input", password, () => {
  if (validatePassword()) {
    password.classList.add("valid");
  } else {
    password.classList.remove("valid");
  }
});

onEvent("click", signUpModalBtn, () => {
  closeModal();
  email.value = "";
  password.value = "";
  if (
    email.classList.contains("valid") ||
    password.classList.contains("valid")
  ) {
    email.classList.remove("valid");
    password.classList.remove("valid");
  }
});

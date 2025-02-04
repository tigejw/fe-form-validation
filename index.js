// This will contain the JS for index.html - be sure to link to the correct file.

const form = document.getElementById("input-form");
const nameInput = document.getElementById("name");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const bottomTextError = document.getElementById("bottom-text-error");
const formContainer = document.getElementsByClassName("form-container");
const nameError = document.getElementById("name-error");
const topTextError = document.getElementById("top-text-error");
let bottomTextSubmit;
let topTextSubmit;
let nameSubmit;

form.addEventListener("submit", (event) => {
  console.log(bottomText.classList);

  if (
    bottomTextSubmit.trim() === "" ||
    bottomTextSubmit.length >= 50 ||
    nameSubmit.trim() === "" ||
    topTextSubmit.trim() === "" ||
    topTextSubmit.length >= 50
  ) {
    event.preventDefault();
  }
  console.log("submit!");
});

nameInput.addEventListener("blur", (event) => {
  const nameValue = event.target.value;
  if (nameValue.trim() === "") {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    nameError.classList.add("unhidden");
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    nameError.classList.remove("unhidden");
  }
  nameSubmit = nameValue;
  console.log(nameValue);
});

topText.addEventListener("blur", (event) => {
  const topTextValue = event.target.value;
  if (topTextValue.trim() === "" || topTextValue.length >= 50) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    topTextError.classList.add("unhidden");
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    topTextError.classList.remove("unhidden");
  }
  topTextSubmit = topTextValue;
  console.log(topTextValue);
});

bottomText.addEventListener("blur", (event) => {
  const bottomTextValue = event.target.value;
  if (bottomTextValue.trim() === "" || bottomTextValue.length >= 50) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    bottomTextError.classList.add("unhidden");
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    bottomTextError.classList.remove("unhidden");
  }
  bottomTextSubmit = bottomTextValue;
  console.log(bottomTextValue.length);
});

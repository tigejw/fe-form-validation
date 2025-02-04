// This will contain the JS for success.html - be sure to link to the correct file.
const searchString = document.location.search;
const queries = new URLSearchParams(searchString);
const topLeft = document.getElementById("top-left");
const bottomLeft = document.getElementById("bottom-left");

const queryName = queries.get("name");
const queryTopText = queries.get("top-text");
const queryBottomText = queries.get("bottom-text");

const topText = document.createElement("p");
topText.innerText = queryTopText;
const bottomText = document.createElement("p");
bottomText.innerText = queryBottomText;

topLeft.appendChild(topText);
bottomLeft.appendChild(bottomText);

//JS - event objects

//get button its id
var btn2Element = document.getElementById("btn2");

function changebtnFontSize(event) {
  event.target.style.fontSize = "4opx";

  alert(event.type);

  alert(event.target);
}

btn2Element.addEventListener("click", changebtnFontSize);

// get element by its id
var aElement = document.getElementById("click-me");
function clickMe(event) {
  alert("You just clicked me!");

  event.preventDefault();
}

aElement.addEventListener("click", clickMe);

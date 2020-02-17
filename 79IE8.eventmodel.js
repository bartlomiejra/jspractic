//JS - event objects - IE event model

//get button its id
var btn2Element = document.getElementById('btn2');

function changebtnFontSize(event) {
  event.srcElement.style.fontSize = '4opx';
  alert(event.type);
  alert(event.srcElement);
}

btn2Element.detachEvent('onclick', changebtnFontSize);

// get element by its id
var aElement = document.getElementById('click-me');
function clickMe(event) {
  alert('You just clicked me!');

  event.returnValue = false;
}

aElement.attachEvent('onclick', clickMe);

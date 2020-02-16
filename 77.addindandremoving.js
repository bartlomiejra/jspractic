//JS




/*  
  Ther are 3 methods to add an event hendler to an event
  
  1/ inline
  2. element.event
  3. element.addEventListener



*/ 
function doSomething() {
  alert("You just clicked me!");
  
}


// //get button by id 
var btnElement = document.getElementById("btn");
btnElement.onclick = function(){
  
  alert("you just clicked me");
}

// 3 metoda

// window.onload = function() {
// 
//   alert("Trzecia metoda");
// }


var hElement = document.getElementById("my-heading");
// 
// hElement.onmouseover = function(){
//   if (this.className == "h-normal") {
// 
//     this.className = "h-chenged";
//   }
//   this.className = "h-normal";
// }
// 
// hElement.onmouseover = function() { alert("It just overwrite the privious")}

// get bitton by its id 
var btn2Element = document.getElementById("btn2")
function chengedBtnFontSize() {
  this.style.fontSize = "45px";
  
}

btn2Element.addEventListener("click", chengedBtnFontSize);
btn2Element.addEventListener("click", function() {alert("this will not overwrite privious ---")});


// remove event hendler
btn2Element.removeEventListener("click", chengedBtnFontSize);







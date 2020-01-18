//JS _ Accesing elements & attributes using document object

var hElement = document.getElementById("my-heading")
// // access an element using get ElementbyID
// var hElement = document.getElementById("my-heading");
//
//  alert(hElement);
//
// //get DOM object value
//  alert(hElement.innerHTML);
//
// //get DOM object attribute value
//  alert(hElement.getAttribute("id"));
//
//  //get tag name
//  alert(hElment.tagName);
 var pElements = document.getElementsByClassName("my-paragraph");

// alert(pElements);
// alert(pElements[0]);
// alert(pElements[0].innerHTML);
 //loop through all paragraphs
 for ( var i=0; i < pElements.length; i++){

   //alert(pElements[i].innerHTML);
 }

//access elements using tag Name
var ulElements = document.getElementsByTagName("ul");

// alert(ulElements);
// alert(ulElements[1].innerHTML);

var liElements= ulElements[1].getElementsByTagName("li");

// alert(liElements [0].innerHtml);

//access elements using name attribute

var naElements = document.getElementsByName("user-name");

alert(naElements[0].tagName);

//accrees element ussing css query
var pElement = document.querySelector("p");
alert (pElement.innerHTML);

var hElement = document.querySelector("#my-heading");
//alert(hElement.innerHTML);

var pElements = document.querySelectorAll("p");
//alert(pElements[1].innerHTML);


var pElements = document.querySelectorAll("div p");
alert(pElements[1].innerHTML);

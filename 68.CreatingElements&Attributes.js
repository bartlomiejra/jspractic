// JS Creating elements and attributes

//get ul element by id
var ulElement = document.getElementById("my-list");

// create list item node

var newLiElement = document.createElement("li");


// create text mode for id

//var newLiText = document.createTextNode("This is new list item");

//append text node to new list as child
//newLiElement.appendChild(newLiText);
//
// append list item to un order list as child
// ulElement.appendChild(newLiElement);

// alternative way to add new element/node using parent node
// get list item using id
var liElement = document.getElementById("list-item-01");
//liElement.parentNode.appendChild(newLiElement);


// add new element using insterbfore
//liElement.parentNode.appendChild(newLiElement, liElement);

//add new element using insertBfore
//liElement.parentNode.insertBefore(newLiElement, liElement);

var hElement = document.getElementById("my-heading");
// add attribute to element
//hElement.setAttribute("align", "center");

// get anchor
var aElement = document.getElementsByTagName("a")[0];

//aElement.setAttribute("id", "my-link");

aElement.id ="my-link";

// js Removing elements and attributes

//get unordered list
var ulElement = document.getElementById("my-list");
ulElement.removeChild(ulElement.childNodes[2]);

// remove attribute using removeattribute method
ulElement.removeAttribute("id");



//remove id attrubite of heading
var hElement - document.getElementById("my-heading");
hElement.removeAttribute("id");

// js - changing elements content and attributes
// get h1 its id

var hElement = document.getElementById("my-heading");

// get node value
//alert ( hElement.nodeValue);

// get text node

//alert ( hElement.childNodes[0].nodeValue);


// get text node

// alert ( hElement.firstChild.nodeValue);

//set node value

// hElement.firstChild.nodeValue = "headng text just chenge!";


// set content using textContent
// hElement.textContent = "Heading text using textcontent";

// set content using innerHtml


// hElement.innerHTML = " Nowy tekst innerHtml</em>";

// hElement.outerHTML = "<h2> <em> Heading text just changed using outerHTML property";













// get image by its tag name
var imgElement = document.getElementsByTagName("img")[0];

imgElement.setAttribute("src", "js-2.png");

imgElement.src = "js-2.png";


// get anchor by tag name
var aElement = document.getElementById("a")[0];
aElement.href = "https://www.wp.pl"

//javascript Array Objects

// create a array using new keyword
var myColors = new Array("Red", "Green", "Blue");
document.write(myColors[1] + "<br>");


//alternate syntax
var myColors = ["Red", "Green", "Blue"];
document.write(myColors[0] + "<br>");



// mudify arrary element
myColors[1] = "Yellow"
document.write(myColors[1] + "<br>");


// access all elements of array
//document.write(myColors + "<br");

//find length of an Array
document.write(myColors.length + "<br>");


//sort an array alphaneetically
document.write(myColors.sort() + "<br>");

//reverse an Array
document.write(myColors.reverse() + "<br>");


//add element using push
myColors.push("Pink");
document.write(myColors + "<br");


//remove element using property pop
myColors.pop("Pink");
document.write(myColors + "<br>");


//join two or more arrays
/*
var listOfNumber1 = [1,2,3];
var lostOfNumber2 = [4,5,6];

var allNumbers = listOfNumber1.concat(lostOfNumber2);
document.write(allNumbers + "<br>");

*/
//loop through array element
var myCars = ["BMW", "Honda", "Toyota"];

for ( var i = 0; i < myCars.length; i++)
{

  document.write(myCars[i] + "<br>");

}


//array ibhects

var myCars = [
  { model: "BMW", year: 2016 },
  { model: "Honda", year: 2007 },
  { model: "Toyota", year: 2005 }

];

for( var k =0; k < myCars.length; k++) {

  var myCar = "";

  for ( var cp in myCars[k]) {

     myCar = myCar +myCars[k][cp];

  }
  document.write(myCar + "<br>");
}

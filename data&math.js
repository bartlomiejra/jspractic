//javascript bult-id data & match objects

var rightNow = new Date();

//alert (rightNow);

//milliseconds
var dt = new Date(5878999999855);
//alert(dt); // show date in milliseconds from 01 Jan 1970

//date string

dt = new Date("September 15, 2016");
//alert(dt);


// date with year. nonth, day, hour, minute, second and milliseconds

dt = new Date(2003,5,24,6,40,12,0);
//alert(dt);



// date object witch methods
var dtm = new Date();

//get Date
document.write("Date: " + dtm.getDate() + "<br>"); // 7
//get day
document.write("Day:" + dtm.getDay() + "<br>"); // sonday --> monday --> so
// get month
document.write("Month:" + dtm.getMonth() + "<br>");
// get full year
document.write("Full year:" + dtm.getYear() + "<br>");
//get hours
document.write("Hours:" + dtm.getHours() + "<br>");
//get minutes
document.write("Minutes:" + dtm.getMinutes() + "<br>");
//get second
document.write("Seconds:" + dtm.getSeconds() + "<br>");


//Math object hendles mathematical operation

//var sqr = Math.sqrt(20);
//document.write("Sqeare root:" + sqr + "<br");
// look of minimum number
var min = Math.min(10,20,3,15,7);
document.write("Minimum: " + min + "<br>");
// look fro maximum number
var max = Math.max(10,20,3,15,7);
document.write("Maximum: " + max + "<br>");

//random number
var rdm = Math.random();

document.write("Random" + rdm + "<br>");


// round number
var rnd = Math.round(99.5);
document.write("Rounded:" + rnd + "<br>");

// PI property

var pi = Math.PI;
document.write("PI:" + pi + "<br");

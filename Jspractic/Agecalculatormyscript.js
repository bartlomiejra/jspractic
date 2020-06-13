//javascript functions & scope


//global scope
var x =20;


function calculateAge(birthYear, currentYear) {
 var age = currentYear - birthYear;
 document.write("Your age is either " + age + " or " + (age-1));}

 calculateAge(1994, 2019);

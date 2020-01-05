//javascript Objects

// create an object
/*
var person = new Object();
person.firstName= " Bart";
person.lastNeme = "Rach";
person.age = 25;
person.height = 5.9;
person.fullName = function() {

  //return ( person.firstName + " " + person.lastNeme );

}

//alert(person.firstName);
//alert(person["age"]);
alert(person.fullName());


// create an object  using an object constrictor (method 2 to create)

*/
function Person(fName, lName, age, hg){

  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.height = hg;
  this.fullName = function() {

    return (this.firstName + " " + this.lastName);

  }

}

var myBrother = new Person("Mich", "Rach", 15, 5.9);
var mySister = new Person("Gab", "Rach", 19, 5.7);
//myfather
//mymother

/*alert(myBrother.firstName);
alert(myBrother.fullName());

alert(mySister.firstName);
alert(mySister.fullName());
*/
//create an object using as object literal
var person = {
    firstName : "Russell",
    lastName: "Brown",
    age: 25,
    height: 5.9,
    fullName: function(){

      return (this.firstName + " " + this.lastName);
    }
};/*
alert(person.firstName);
alert(person["age"]);
alert(person.fullName());
*/

// objects are changeable

var x = person;
 x.firstName = "Janek";
 //alert(x.firstName);
 //alert(person.firstName);

delete person.age;
//alert(person.age);

var myCar = {
  name: "BMW",
  year: 2016,
  color: "Black",

};

var v = "";
for(var k in myCar){

  v = v+ myCar[k] + " ";

}

//alert(v);

//nestle Objects
var user = {
  name: "Barteł",
  age: 25,
  size: {
    top: 90,
    middle: 60,
    bottom: 90
  }


};
alert(user.name);
alert(user.size.top);

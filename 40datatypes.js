//javascript functions & scope


//global scope
var a = 10;


// alert (typeof(a) );
a = "Dayan";

// alert (typeof(a) );


 /* Primitive data type

 1. string
 2. number
 3. boolean
 4. null
 5. undefined
 */


 var s = "hello"; // string represents seqence of charakters e.g. "hello"
 var n = 5; //  number represents numeric values 50
 var b = true; //boolean represents value true or false
 var x = null; //null represents no value at all
 var y =  undefined; //nudefinied represents value not yest defined

 //alert (typeof(y));

/*
Non- primitive (reference) Data typeof

  1. Object
  2. Array
  3. RegExp
  4. functions
  5. Date

*/

var employee = new Object();
var books = new Array(); // represents group of similar values
var reg =new RegExp(); //represent regular expression
var myFunc = new Function(); //represent funciotn
var todayData = new Date(); //represent date

//alert( typeof(books) );

//string as primitive data type
var s ="hello";

alert(typeof(s));
// string an Object
var s = new String("Hello");
alert(typeof(s));


var b = new Booles(); // b  declared as Boolean object
var n = new Number(); // n declared as Number Object

// list of built in object constroctors in javascript
var obj1 = new Object();    //a new Object as object
var obj2 = new String();    // a new String as object
var obj3 = new Number();    // a new Number as object
var obj4 = new Boolean();   // a new Boolean as object
var obj5 = new Array();     // a new Array as object
var obj6 = new RegExp();    // a new RegExp as object
var obj7 = new Function();  // a new Function as object
var obj8 = new Data();      // a new Date as object
//Match() object            //a global Match object

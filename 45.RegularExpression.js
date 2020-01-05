//Javascript RegExp & function Objects

//create regular expression using new keyword

var regExp1 = new RegExp("abcd");


//alternative syntax

var regExp2 = /adcb/;

 var strtoSearch = "This sars is a bank name";


 var matchFound = regExp2.test(strtoSearch);

//alert(matchFound);

// Function object

var functionAsObject = new Function("a", "b", "return a + b");
var x = functionAsObject(10,25);
alert(x);

var y = function(a , b) { return (a + b)};

alert(y(25,20));

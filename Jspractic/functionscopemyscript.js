//javascript functions & scope


//global scope
var x =20;


function outerFunction() {

  function innerFunction() {

      document.write("Code execution inside inner/nested function");
  }
  innerFunction();
}
outerFunction();

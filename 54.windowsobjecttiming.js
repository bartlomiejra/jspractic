//JS Window objects timing


function sayHellowToWorld(){

  alert("Hello, World")
}


//setTimeout method
//window.setTimeout(sayHellowToWorld, 2000);
//setTimeout(sayHellowToWorld,2000);

//cleanTimeout method
//clearTimeout(spt1);


//setinterval method
var stp2 = window.setInterval(sayHellowToWorld, 2000 );
clearInterval(stp2);

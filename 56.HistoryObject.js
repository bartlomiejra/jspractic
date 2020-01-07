//JS Window history object
/*
  -Window
    -sceen
    -history
*/


//find the nummber of URLs visited by user
document.write("User history lenght: " + window.history.length + "<br>");


// load previous URL
history.back();



//load nex URL
history.forward();

//go forward or go backword
history.go(1);
history.go(-2);

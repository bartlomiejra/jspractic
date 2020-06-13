//JS Window objects


/*

  - window

*/

//global veriable
var x = 15;
//alert(window.x);


//global ffinction
function y() {


  document.write("Global finction invoked using windows object <br>")
}
window.y();


//alert("alert invoke winthown windows ojbect");
//window.object("alart invoke using window object.");

//window.confirm("confirm invoke using window object. ");
//window.prompt("prompt invoke using window object. ");


//width of browser window
document.write("Window width: " + window.Width + " in pixels <br>");


//height of browser window
document.write("Window height: " + window.Height + " in pixels <br>");



//outer width of browser window including scrollbar and toolbars
document.write("Window outer width: " + window.outerWidth + " in pixels <br>");


//outer height of browser window including scrollbar and toolbars
document.write("Window outer height: " + window.outerHeight + " in pixels <br>");


//set window name
window.name="Bart's window";
document.write("window.name " + window.name + "<br>" );


//close window

//window.close();





//open new window
var udemyWindow =  window.open("http://www.udemy.com", "Udamy window","width=150, height=150");

//resize to
udemyWindow.resizeTo(250,250);

//move to
udemyWindow.moveTo(350, 200);

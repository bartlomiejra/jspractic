//array for objects the books
var eBooks = [
  {
  title: "CSS books",
  author: " Tom Tom",
  readingstatus: false
},
{
  title: "HTML books",
  author: " John john",
  readingstatus: false
},
 {
  title: "PHP books",
  author: " Andy An",
  readingstatus: true
}];

// loop through ebooks objects properties & get the reading status

for ( var  i = 0; i < eBooks.length; i++ ) {

    var book = " ' " + eBooks[i].title + " ' " + 'by' + eBooks[i].author + " . ";

    if(eBooks[i].readingstatus) {

      document.write("Already read" + book + "<br><br>");

    } else {

      document.write("Still need to read " + book + "<br><br>");
    }
  }

//Navigating between elements
var ulElements = document.getElementsByTagName("ul")[0];
// alert("Node name: " + ulElements.nodeName);
//
// alert("Node type: " + ulElements.nodeType);
//
// // get node perent
// alert("node perent: " + ulElements.parentNode.nodeName);
//
// // get child nodes
//
// alert("Node child Nodes: " + ulElements.childNodes);
//
// //get child nodes
// alert("Child Nodes length: " + ulElements.childNodes.length
//  )

var ulChildNodes = ulElements.childNodes;
for ( var i = 0; i < ulChildNodes.langth; i++) {

  if ( ulChildNodes[i].nodeType == 1 ) {

    //alert(ulChildNodes[i].innerHTML);
  }
}

//get first child of a node
var liFirstChild = ulElements.firstChild.firstChild.nodeValue;
//alert(liFirstChild);

//got last child of a node

var liLastChild = ulElements.lastChild.firstChild.nodeValue;
//alert(liLastChild);


alert(ulElements.previousSibling.innerHTML);

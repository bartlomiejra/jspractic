// Js cross browser Event Handling script
var addEvent = function(el, type, func) {
  if (typeof addEventListener !== 'undefined') {
    el.addEventListener(type, func);
  } else if (typeof attachEvent !== 'undefined') {
    el.attachEvent('on' + type, func); // ie 8 ealier version
} else {
    //el."on"+type // generate error

    el["on" + type] = func;
}

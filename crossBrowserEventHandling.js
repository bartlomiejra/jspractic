// Js cross browser Event Handling script
var addEvent = function(el, type, func) {
  if (typeof removeEventListener !== 'undefined') {
    el.removeEventListener(type, func);
  } else if (typeof detachEvent !== 'undefined') {
    el.attachEvent('on' + type, func); // ie 8 ealier version
  } else {
    //el."on"+type // generate error

    el['on' + type] = null;
  }
};

// cross browser get target
var getTarget = function(event) {
  if (typeof event.target !== 'undefined') {
    return event.target;
  } else {
    return event.srcElement
  }
};

'use strict';
const ColorFromHexAction =  function(text) {
	console.log("in ColorFromHexAction");
	console.log('action type:'+GET_COLOR_FROM_HEX);
  return {
    type: GET_COLOR_FROM_HEX,
    text
  }
}

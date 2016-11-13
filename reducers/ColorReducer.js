'use strict';
const defaultState = {colors:[]};

const ColorReducer = function(state, action) {
	state = state?state:defaultState;
  switch (action.type) {
    case ActionTypes.GET_COLOR_FROM_RGB:
      	console.log('in reducer actiontype = GET_COLOR_FROM_RGB');
      	return Object.assign(state);
    case ActionTypes.GET_COLOR_FROM_HEX:
	return Object.assign(state, {colors:[{rgb:'rgb(34, 209, 11)', hex:'#22D10B'}]});
    case ActionTypes.GET_COLOR:
	return Object.assign(state,{colors:action.colors});
    default:
      return state;
  }
}



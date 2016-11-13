'use strict';
const redux = Redux;
const createStore = redux.createStore;
const configureStore = function configureStore(initialState) {
  return createStore(ColorReducer, initialState);
}
var store = configureStore({colors:[]});

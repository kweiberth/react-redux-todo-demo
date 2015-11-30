// redux store

import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

var finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

var configureStore = function(initialState) {
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;

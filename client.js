import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

var initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'This is a test'
  }]
}

var store =  require('./redux/store')(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

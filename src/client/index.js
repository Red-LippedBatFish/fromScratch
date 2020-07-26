/**
 * ************************************
 *
 * @module  index.js
 * @author Red-Lipped Batfish
 * @date
 * @description entry point for app.  Hangs React app off of #root in index.html.
 *              Also add redux 'store' to app 
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <App />, 
  </Provider>,
  document.getElementById('root')
);

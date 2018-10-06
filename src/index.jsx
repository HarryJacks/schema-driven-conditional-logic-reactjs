import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import App from './components/App';
import { store } from './store/store';

import '../scss/app.scss';

// LEAVE THIS FILE AS IS //
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);

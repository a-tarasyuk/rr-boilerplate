import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Root } from './containers/root';
import configureStore from './store';
import INITIAL_STATE from './data';

import './assets/styles/main.css';

const store = configureStore(INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

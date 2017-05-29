import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { store, history } from './store';
import routes from './routes';

import './assets/styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route>{routes}</Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

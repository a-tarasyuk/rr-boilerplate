import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import storeConfig from './store';
import routes from './routes';

const store   = storeConfig();
const history = syncHistoryWithStore(browserHistory, store);
// https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
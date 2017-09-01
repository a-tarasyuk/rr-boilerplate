import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  routerMiddleware,
} from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const history = createBrowserHistory();
const middlewares = [
  thunk,
  routerMiddleware(history),
];

if (__DEV__) {
  middlewares.push(
    require('redux-logger').createLogger({}),
  );
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export {
  store,
  history,
};

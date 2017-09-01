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

if (module.hot) {
  // Enable webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    // console.log('store', require('../reducers').default());
    // console.log(store.getState());
    // console.log(reducers());
    // console.log(store.replaceReducer);
    // store.dispatch({ type: '@@redux/INIT' });
    // store.replaceReducer(reducers);
    // store.replaceReducer(require('../reducers').default);
    const nextReducer = require('../reducers/index').default;
    store.replaceReducer(nextReducer);
    console.log(store.getState());
  });
}

export {
  store,
  history,
};

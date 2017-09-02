import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  routerMiddleware,
} from 'react-router-redux';

import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = (initialState, history) => {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  if (__DEV__) {
    middlewares.push(
      require('redux-logger')
        .createLogger({ collapsed: true }),
    );
  }

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers));
  }

  return store;
};

export default configureStore;

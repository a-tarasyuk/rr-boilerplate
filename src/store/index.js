import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = (initialState) => {
  const middlewares = [thunk];

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

  return store;
};

export default configureStore;

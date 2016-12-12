import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger')({}));
}

const create = compose(
  applyMiddleware(...middlewares),
)(createStore);

export default () => create(reducers, {});

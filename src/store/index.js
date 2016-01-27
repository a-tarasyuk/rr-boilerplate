import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Reducers from '../reducers';

const create = applyMiddleware(Thunk)(createStore);

export default (initialState) => create(Reducers, {});
import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import features from './features.reducer';

export default combineReducers({
  router,
  features,
});

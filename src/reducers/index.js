import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import features from './features.reducer';

export default combineReducers({
  routing,
  features,
});

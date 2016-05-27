import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { Features as features } from './Features.reducer';

export default combineReducers({
  routing,
  features
});
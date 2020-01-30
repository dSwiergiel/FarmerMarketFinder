import { combineReducers } from 'redux';
import marketReducer from './marketReducer.js';

export default combineReducers({
  market: marketReducer
});

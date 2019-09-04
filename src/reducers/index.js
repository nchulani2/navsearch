import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
// import navbarReducer from './navbarReducer';

export default combineReducers({
  data: imageReducer
  // navState: navbarReducer
});

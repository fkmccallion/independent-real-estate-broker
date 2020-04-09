import { combineReducers } from 'redux';
import agents from './agents';
import properties from './properties';

export default combineReducers({
  agents,
  properties,
  images
});

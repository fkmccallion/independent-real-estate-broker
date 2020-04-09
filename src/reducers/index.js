import { combineReducers } from 'redux';
import agents from './agents';
import properties from './properties';
import images from './images';

export default combineReducers({
  agents,
  properties,
  images
});

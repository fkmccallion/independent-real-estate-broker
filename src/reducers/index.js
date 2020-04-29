import { combineReducers } from 'redux';
import agents from './agents';
import properties from './properties';
import images from './images';
import testimonials from './testimonials'
import login from './login'

export default combineReducers({
  agents,
  properties,
  images,
  testimonials,
  login
});

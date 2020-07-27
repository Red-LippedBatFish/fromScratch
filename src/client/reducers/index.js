/**
 * ************************************
 *
 * @module  index.js
 * @author Red-Lipped Batfish
 * @date
 * @description a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import projectsReducer from './projectsReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  projects: projectsReducer,
});

// make the combined reducers available for import
export default reducers;
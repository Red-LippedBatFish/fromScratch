/**
 * ************************************
 *
 * @module  reducer.js
 * @author  Red-Lipped Batfish
 * @date
 * @description reducer for main app
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  // define inital state
};

const reducer = (state=initialState, action) => {

  switch(action.type) {
    case types.ADD_PROJECT:
    
    // add other actions here


    default:
        return state;
  }
};

export default reducer;
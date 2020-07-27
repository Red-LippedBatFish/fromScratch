/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'


export const selectProject = (projectId) => ({
  type: types.SELECT_PROJECT,
  payload: projectId,
});
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

export const getProjects = (currentProjects) => ({
  type: types.GET_PROJECTS,
  payload: currentProjects,
});

export const getTasks= (currentTasks) => ({
  type: types.GET_TASKS,
  payload: currentTasks,
});


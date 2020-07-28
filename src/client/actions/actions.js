/**
 * ************************************
 *
 * @module  actions.js
 * @author Red-Lipped Batfish
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

export const getProjects = (projectIndex) => ({
  type: types.GET_PROJECTS,
  payload: projectIndex,
});

export const getTasks= (currentTasks) => ({
  type: types.GET_TASKS,
  payload: currentTasks,
});


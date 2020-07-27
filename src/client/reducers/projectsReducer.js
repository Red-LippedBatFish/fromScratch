/**
 * ************************************
 *
 * @module  reducer.js
 * @author  Red-Lipped Batfish
 * @date
 * @description projectsReducer for main app
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

// define inital state
const initialState = {
  projectsList: [],
  totalProjects: 0,
  lastProjectId: 1,
  currentProject: null,
};

const projectsReducer = (state=initialState, action) => {
  let projectsList;

  switch(action.type) {
    case types.ADD_PROJECT:
          // increment lastProjectId and totalProjects counters
      const lastProjectId = state.lastProjectId + 1
      const totalProjects = state.totalProjects + 1
      // const name, task, description = action.payload

      // create the new project object from provided data
      const newProject = {
          projectId : state.lastProjectId,
          name: '', // name from payload
          description: '' , // description from payload
          tasks: [],// tasks from payload?
      };

      // make a copy of projectsList and add new project object
      projectsList = state.projectsList.slice();
      projectsList.push(newProject);

      return {
        ...state,
        projectsList,
        lastProjectId,
        totalProjects,
      };

    case types.SELECT_PROJECT:
      // set currentProject to be index for projectsList
      const currentProject = action.payload;

      return {
        ...state,
        currentProject
      }
    
    case types.GET_PROJECTS:
      // get current projects from the db and update state
      const projectsList = action.payload;

      return {
        ...state,
        projectsList
      }

    default:
      return state;
  }
};


export default projectsReducer;
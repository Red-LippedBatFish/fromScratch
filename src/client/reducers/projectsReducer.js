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
  currentTaskList: [],
  totalProjects: 0,
  lastProjectId: 1,
  projectIndex: null,
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
          id : state.lastProjectId,
          title: '', // name from payload
          description: '' , // description from payload
          // tasks: [],// tasks from payload?
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
      // set projectIndex to be index for projectsList
      const projectIndex = action.payload;

        return {
          ...state,
          projectIndex
        }

    
    case types.GET_PROJECTS:
      // get current projects from the db and updates state
      const projectsList = action.payload;

      return {
        ...state,
        projectsList
      }
    
    case types.GET_TASKS:
      // fetches array of task objects from the db
      // based on currently selected project in the sidebar
      const currentTaskList = action.payload;

      return {
        ...state,
        currentTaskList
      }

    default:
      return state;
  }
};


export default projectsReducer;
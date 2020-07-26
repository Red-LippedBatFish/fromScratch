/**
 * ************************************
 *
 * @module  reducer.js
 * @author  Red-Lipped Batfish
 * @date
 * @description Projectsreducer for main app
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

// define inital state
const initialState = {
  projectsList: [
    { name: 'task 1', description: 'a cool project', tasks: [{ name: 'sub task', tasks: []}]},
    { name: 'Important thing', description: 'my life\'s work', tasks: [{ name: 'sub task', tasks: []}]},
    { name: 'another one', description: 'biiiig project', tasks: [{ name: 'sub task', tasks: []}]},
  ],
  totalProjects: 0,
  lastProjectId: 1,
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


    default:
        return state;
  }
};


export default projectsReducer;
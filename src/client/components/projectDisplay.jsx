/**
 * ************************************
 *
 * @module  projectDisplay
 * @author  Red-Lipped Batfish
 * @date
 * @description display the currently selected project
 *              
 * ************************************
 */
import React, { Component } from 'react';
import { connect  } from 'react-redux';
// import * as actions from '../actions/actions';

import EditProjectTable from './EditProjectTable';

// map data to props
// state is 'state' in relevant reducer
// i.e. state.projects is in projectsReducer
const mapStateToProps = state => ({
  // provide pertinent state here
  currentTaskList: state.projects.currentTaskList,
  projectsList: state.projects.projectsList,
  projectIndex: state.projects.projectIndex 
});

// map methods to props
// dispatch sends query to reducers
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});


// render the <h1> or the edit table based on card selection from the sidebar
// projectIndex is initially null
const ProjectDisplay = (props) => {
    const { projectsList, projectIndex, currentTaskList } = props;
    return (
      <div >
        <div>
          {projectIndex ? <EditProjectTable project={projectsList[projectIndex]} tasks={currentTaskList} /> : <h1>Please Choose a project :)</h1>}
        </div>
      </div>
    );

};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);
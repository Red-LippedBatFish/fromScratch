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
import * as actions from '../actions/actions';

import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import EditProjectTable from './EditProjectTable';

// map data to props
// state is 'state' in relevant reducer
// i.e. state.projects is in projectsReducer
const mapStateToProps = state => ({
  // provide pertinent state here
  projectsList: state.projects.projectsList,
  currentProject: state.projects.currentProject 
});

// map methods to props
// dispatch sends query to reducers
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});



const ProjectDisplay = (props) => {

    const { projectsList, currentProject } = props;
    return (
      <div >
        <h1>projects displayed here</h1>
        <div>
          {currentProject ? <EditProjectTable project={projectsList[currentProject]} /> : <h1>Please Choose a project :)</h1>}
        </div>
      </div>
    );

};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);
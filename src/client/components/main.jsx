/**
 * ************************************
 *
 * @module  main
 * @author  Red-Lipped Batfish
 * @date
 * @description stateful component that renders sidebar, header, fetches project from the db
 *              
 *
 * ************************************
 */
import React, { Component } from 'react';
import { connect  } from 'react-redux';
import * as actions from '../actions/actions';

import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Header from './header';
import ProjectDisplay from './projectDisplay';

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
  addProject : (e) => {
    // const formId = document.getElementById('location');
    // dispatch(actions.addProject(formId))
  },

});


class Main extends Component {
  constructor(props) {
    super(props);

    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects()
  }

  componentDidUpdate(prevProps, prevState) {
    // if ({...this.state} !== {...prevState}) this.fetchProjects
  }

  // fetch project from db and update state
  fetchProjects() {
    fetch('')
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        // this.setState({ ...this.state, projects: [data] })
      })
  }


  render() {
    const { projectsList } = this.props;
    return (
      <div>
        <Header projects={projectsList} />
        <ProjectDisplay />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
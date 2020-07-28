/**
 * ************************************
 *
 * @module  main
 * @author  Red-Lipped Batfish
 * @date
 * @description stateful component that renders sidebar, header, fetches project from the db
 *              
 * ************************************
 */
import React, { useEffect, useState } from 'react';
import { connect  } from 'react-redux';
import * as actions from '../actions/actions';
import Header from './header';
import ProjectDisplay from './projectDisplay';


// map data to props
// state is 'state' in relevant reducer
// i.e. state.projects is in projectsReducer
const mapStateToProps = state => ({
  // provide pertinent state here
  projectsList: state.projects.projectsList, 
  projectIndex: state.projects.projectIndex
});

// map methods to props
// dispatch sends query to reducers
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addProject: (e) => {
    // const formId = document.getElementById('location');
    // dispatch(actions.addProject(formId))
  },
  getProjects: (data) => {
    dispatch(actions.getProjects(data));
  }

});


const Main = (props) => {
  const { getProjects, projectsList } = props;
  const [beenFetched, setBeenFetched] = useState(false);

  // fetch array of objects from the db and invoke 'getProjects(array)'
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        if (!beenFetched) {
          setBeenFetched(true)
          getProjects(data);
        }
      }).catch((error) => console.log('error fetching projects ', error))
    
  })

  return (
    <div>
      <Header projects={!projectsList ? null : projectsList} />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ProjectDisplay />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
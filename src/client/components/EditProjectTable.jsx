/**
 * ************************************
 *
 * @module  EditProjectTable
 * @author  Red-Lipped Batfish
 * @date
 * @description functional component that renders a table to edit projects
 *              
 * ************************************
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { connect  } from 'react-redux';
import { forwardRef } from 'react';

// im so sorry
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

// this is literally how to import all the icons
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const useStyles = makeStyles({

});

// map data to props
// state is 'state' in relevant reducer
// i.e. state.projects is in projectsReducer
const mapStateToProps = state => ({
  // provide pertinent state here
  currentTaskList: state.projects.currentTaskList,
  projectsList: state.projects.projectsList,
  currentProject: state.projects.currentProject 
});

// map methods to props
// dispatch sends query to reducers
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  getProjects: (data) => {
    dispatch(actions.getProjects(data));
  },
  selectProject: (e) => {
    // const currentProject = e.currentTarget.dataset.id;
    dispatch(actions.selectProject(id));

  }
});

const EditProjectTable = (props) => {
  const [state, setState] = useState();
  const classes = useStyles();
  // const { project, currentTaskList } = props;
  // const { title, description } = project;

  const { 
    currentProject,
    projectsList,
    currentTaskList,
    getProjects,
    selectProject
  } = props;

  const aProject = projectsList[currentProject];
  const { title, description } = aProject;

  const columns = [
      { title: 'Title', field: 'title' },
      { title: 'Description', field: 'description' },
      { title: 'Tasks', field: 'tasks' },
      // { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }, },
  ]

  const tasks = currentTaskList.map(el => el.title);


  const  data = [
    { title: title, description: description, tasks: tasks.join(', ') },
  ]
  

  return (
    <div style={{maxWidth: "100%"}}>
    <MaterialTable
      title={title}
      icons={tableIcons}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) => (
          // sending a delete request to db
          // problem: need rerender table/page and fetch new db data
          // to populate sidebar menu with updated db
            fetch(`/api/projects/${Number(currentProject) + 1}`, {method: 'DELETE'})
              .then((res) => res.json())
              .then((data) => {console.log(data)})
              .catch((e) => console.log(e))
        )

          // new Promise((resolve) => {
          //   setTimeout(() => {
          //     resolve();
          //     setState((prevState) => {
          //       const data = [...prevState.data];
          //       data.splice(data.indexOf(oldData), 1);
          //       return { ...prevState, data };
          //     });
          //   }, 600);
          // }),
      }}
    />
  </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProjectTable);
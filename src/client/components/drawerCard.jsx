/**
 * ************************************
 *
 * @module  DrawerCard
 * @author  Red-Lipped Batfish
 * @date
 * @description functional component that renders one card in the sidebar comp
 * YOU NEED TO REPLACE THE CARD.JS IN: node_modules/@material-ui/core/Card with the CARD.JS IN /components
 * AFTER A FRESH node_modules INSTALL. OTHERWISE SELECTING PROJECTS IN THE SIDEBAR WILL NOT WORK
 * ************************************
 */
import React from 'react';
import { connect  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as actions from '../actions/actions';

// map methods to props
// dispatch sends query to reducers
const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addProject : (e) => {
    // dispatch(actions.addProject(formId))
  },
  selectProject: (e) => {
    // const currentProject = e.currentTarget.dataset.id;
    const { currentTarget:{ dataset:{ id } } } = e;
    dispatch(actions.selectProject(id));
  }
});

const mapStateToProps = dispatch => ({});

// additional styles added to makeStyle hook
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    border: 3,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DrawerCard = (props) => {
  const classes = useStyles();

  // props from each project object
  const { id, type, name, description, selectProject } = props;
  
  return (
    <div data-id={id} onClick={selectProject}>
      <Card className={classes.root} >
        <CardContent >
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {type=== 'new' ? <Fab color="primary" aria-label="add"><AddIcon /></Fab> : null}
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCard);
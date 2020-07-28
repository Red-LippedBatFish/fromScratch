/**
 * ************************************
 *
 * @module  sidebar
 * @author  Red-Lipped Batfish
 * @date
 * @description functional component that renders the sidebar in main
 *              Also renders list of cards from project objects in the db.
 * ************************************
 */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerCard from './drawerCard';

// custom styles added to makeStyles hook
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SideBar = (props) => {
  const { projects } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // populate list of cards to add to sidebar
  const list = (anchor) => {
    const projectCards = projects.map((project, index) => {
      return <DrawerCard key={index} id={index} name={project.title} description={project.description} />
    });
    
    // returns a list of cards
    // first card is always a 'new project' with '+' button
    return (
      <div
        className='left'
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <Typography>New Project</Typography>
          <DrawerCard type="new" />
        </List>
        <Divider />
        <Divider />
        <List>
          <Typography>Other Projects</Typography>
          {projectCards}
        </List>
      </div>
    )
  };

  // renders the hamburger menu button and the card list from above onClick
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon >{anchor}</MenuIcon>
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


export default SideBar;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { AppBar } from '@material-ui/core';


const Homepage= ()=>{
    return //components
    (<div>
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Logo
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    </div>

    )
}



export default Homepage;
import React from 'react';

import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import LoginModal from "./loginModal";


const Main = () => {
  return (
    <div>
      <h1>MAIN APP YO</h1>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Logo</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Button className="modal-button" variant="contained" color="primary">
        Sign Up
      </Button>
      <LoginModal />
    </div>
  );
};

export default Main;
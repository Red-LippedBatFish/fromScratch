/**
 * ************************************
 *
 * @module  homepage
 * @author  Red-Lipped Batfish
 * @date
 * @description functional component that renders a page with buttons that could be used to login
 *              
 * ************************************
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import LoginModal from "./loginModal";

//add modal pop up as a component

const Homepage = () => {
  return (
    <div>
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

export default Homepage;

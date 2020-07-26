import React, { Component } from 'react';

import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import Sidebar from './sidebar';
import Header from './header';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
};

export default Main;
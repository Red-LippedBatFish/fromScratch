import React, { Component } from "react";
import "./app.scss";
// import Homepage from "./components/homepage"; // use for a login page
import Main from './components/main'
export default class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

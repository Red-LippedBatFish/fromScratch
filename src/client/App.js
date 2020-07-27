import React, { Component } from "react";
import "./app.scss";
import Homepage from "./components/homepage";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Scratch Project!?</h1>
        <Homepage />
      </div>
    );
  }
}

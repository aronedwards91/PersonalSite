import React, { Component } from "react";
import logo from "../logo.svg";
import SideBar from "./SideBar/SideBar";
import "../css/App.css";
import "../css/Vars.css";

class App extends Component {
  render() {
    return (
      <div className="Split">
        <SideBar />
        <div className="App">
          
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import SideBar from "./SideBar/SideBar";
import LandingPage from "./MainArea/LandingPage";
import "../css/App.css";
import "../css/Vars.css";
import "../css/Text.css";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <SideBar />
        <LandingPage/>
      </div>
    );
  }
}

export default App;

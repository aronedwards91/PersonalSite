import React, { Component } from "react";
import SideBar from "./SideBar/SideBar";
import LandingPage from "./MainArea/LandingPage";
import "../css/Vars.css";
import "../css/Button.css";
import "../css/Text.css";
import "../css/App.css";
import "../css/SideBar.css";
import "../css/LandingPage.css";


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

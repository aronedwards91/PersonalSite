import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LandingPage from "./MainArea/LandingPage";
import SkillsPage from "./MainArea/SkillsPage";
import "../css/Vars.css";
import "../css/Button.css";
import "../css/Text.css";
import "../css/App.css";
import "../css/SideBar.css";
import "../css/LandingPage.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Main">
          <SideBar />
          <main>
            <switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/skills" component={SkillsPage} />
            </switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

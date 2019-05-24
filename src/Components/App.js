import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import LandingPage from "./MainArea/LandingPage";
import SkillsPage from "./MainArea/SkillsPage";
import "../css/Vars.css";
import "../css/Button.css";
import "../css/Text.css";
import "../css/App.css";
import "../css/SideBar.css";
import "../css/LandingPage.css";
import "../css/TextBubble.css"; //Used in Skills & Experience pages


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Main">
          <SideBar />
          <main>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/summary" exact component={LandingPage} />
              <Route path="/skills" component={SkillsPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import NavBarMobile from "./SideBar/NavBarMobile";
import LandingPage from "./MainArea/LandingPage";
import SkillsPage from "./MainArea/SkillsPage";
import ExperiencePage from "./MainArea/ExperiencePage";
import ProjectPage from "./MainArea/ProjectPage";
import Error404Page from "./Other/Error404";
import "../css/Vars.css";
import "../css/Button.css";
import "../css/App.css";
import "../css/SideBar.css";
import "../css/LandingPage.css";
import "../css/TextBubble.css"; //Used in Skills & Experience pages
import "../css/Text.css";

class App extends Component {

  tabs = {
    link1: "Summary",
    link2: "Skills",
    link3: "Experience",
    link4: "Projects"
  }

  render() {
    console.log(screen.width);
    // width < 900
    //<NavBarMobile tabs={this.tabs}/>
    return (
      <BrowserRouter>
        <div className="Main">
        <SideBar tabs={this.tabs}/>
          
          <main>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/summary" exact component={LandingPage} />
              <Route path="/skills" component={SkillsPage} />
              <Route path="/experience" component={ExperiencePage}/>
              <Route path="/projects" component={ProjectPage}/>
              <Route component={Error404Page}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

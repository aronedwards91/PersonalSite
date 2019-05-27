import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import NavBarMobile from "./SideBar/NavBarMobile";
import LandingPage from "./MainArea/LandingPage";
import SkillsPage from "./MainArea/SkillsPage";
import ExperiencePage from "./MainArea/ExperiencePage";
import ProjectPage from "./MainArea/ProjectPage";
import Error404Page from "./Other/Error404";
import Footer from "./Other/Footer";
import "../css/Vars.css";
import "../css/Button.css";
import "../css/App.css";
import "../css/SideBarSB.css";
import "../css/LandingPageLP.css";
import "../css/TextBubbleTB.css"; //Used in Skills & Experience pages
import "../css/Text.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
    this.manualViewSwitch = this.manualViewSwitch.bind(this);
  }

  componentWillMount() {
    if (screen.width < 900) {
      this.setState({ mobile: true });
    }
  }

  manualViewSwitch() {
    console.log(this.state);
    if (this.state.mobile) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  LandingPageProps = () => {
    return (
      <LandingPage mobile={this.state.mobile}>
        <Footer
          manualSwitch={this.manualViewSwitch}
          mobile={this.state.mobile}
        />
      </LandingPage>
    );
  };
  SkillsPageProps = () => {
    return (
      <SkillsPage mobile={this.state.mobile}>
        <Footer
          manualSwitch={this.manualViewSwitch}
          mobile={this.state.mobile}
        />
      </SkillsPage>
    );
  };
  ExperiencePageProps = () => {
    return (
      <ExperiencePage mobile={this.state.mobile}>
        <Footer
          manualSwitch={this.manualViewSwitch}
          mobile={this.state.mobile}
        />
      </ExperiencePage>
    );
  };
  ProjectPageProps = () => {
    return (
      <ProjectPage mobile={this.state.mobile}>
        <Footer
          manualSwitch={this.manualViewSwitch}
          mobile={this.state.mobile}
        />
      </ProjectPage>
    );
  };

  tabs = {
    link1: "Summary",
    link2: "Skills",
    link3: "Experience",
    link4: "Projects"
  };

  render() {
    return (
      <BrowserRouter>
        <div className="Main">
          {this.state.mobile ? (
            <NavBarMobile tabs={this.tabs} />
          ) : (
            <SideBar tabs={this.tabs} />
          )}
          <main>
            <Switch>
              <Route path="/" exact render={this.LandingPageProps} />
              <Route path="/summary" exact render={this.LandingPageProps} />
              <Route path="/skills" render={this.SkillsPageProps} />
              <Route path="/experience" render={this.ExperiencePageProps} />
              <Route path="/projects" render={this.ProjectPageProps} />
              <Route component={Error404Page} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

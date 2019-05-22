import React from "react";
import TechIcons from "./TechIcons";
import Summary from "./Summary";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageSort">
        <TechIcons />
        <Summary/>
      </div>
    );
  }
}

export default LandingPage;

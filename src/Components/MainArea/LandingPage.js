import React from "react";
import TechIcons from "./TechIcons";
import Summary from "./Summary";

class LandingPage extends React.Component {
  render() {
    console.log(this.props.mobile);
    return (
      <div>
        <div className={this.props.mobile ? "pageMobileLP" : "pageSort"}>
          <Summary mobile={this.props.mobile} />
          <TechIcons mobile={this.props.mobile} />
        </div>
      </div>
    );
  }
}

export default LandingPage;

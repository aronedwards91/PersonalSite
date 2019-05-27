import React from "react";
import TechIcons from "./TechIcons";
import Summary from "./Summary";

class LandingPage extends React.Component {
  render() {
    return (
      <div className={this.props.mobile ? "" : "mainLP"}>
        <div className={this.props.mobile ? "pageMobileLP" : "pageSort"}>
          <Summary mobile={this.props.mobile} />
          <TechIcons mobile={this.props.mobile} />
          {this.props.mobile ? "" : (
            <div className="footerHolderLP">{this.props.children}</div>
          )}
        </div>
        {this.props.mobile? <div className="">{this.props.children}</div> : ""}
      </div>
    );
  }
}

export default LandingPage;

import React from "react";
import strings from "../StringImporter";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          test: "test"
        };
      }
  render() {
    return (
      <div className="footer">
        <hr />
        <div className="bottomInfoAPP">
          <button className="simpleButton" onClick={() => this.props.manualSwitch()}>
            <span className="Text">
              {this.props.mobile ? "Desktop" : "Mobile"}
            </span>
          </button>
          <div className="Text">
            {strings.fullName + "  ::  Updated " + strings.YearUpdated}
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

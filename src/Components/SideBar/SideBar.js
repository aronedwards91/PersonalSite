import React from "react";
import "../../css/SideBar.css";
import "../../css/Button.css";
import strings from "../StringImporter";

class SideBar extends React.Component {
  state = {
    compact: false
  };

  render() {
    return (
      <div className="SBMain">
        <div className="SBOverlay">
          <div className="SBTextBox">
            <div className="Text SBTitle">{strings.fullName}</div>
            <div className="Text Bold">{strings.role}</div>
            <div className="Text Bold">{strings.roleArea}</div>
          </div>
          <div className="SBButtonsContainer">
            <button className="button buttonSideBar">Summary</button>
            <button className="button buttonSideBar">Skills</button>
            <button className="button buttonSideBar">Experience</button>
            <button className="button buttonSideBar">Projects</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;

import React from "react";
import "../../css/SideBar.css";
import "../../css/Button.css";

class SideBar extends React.Component {
  state = {
    compact: false
  };

  render() {
    return (
      <div className="SBMain">
        <div className="SBBackground" />
        <div className="SBOverlay">
          <div className="SBTitle">TestDel</div>
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

import React from "react";
import { withRouter } from "react-router";
import strings from "../StringImporter";
import Icons from "../../res/icons/icons";
import avatar from "../../res/headsmall.png";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compact: false
    };
  }

  sidebarNavHandler = event => {
    event.persist();
    this.props.history.push(event.target.innerText.toLowerCase());
  };

  sidebarCompactHandler = () => {
    if (this.state.compact) {
      this.setState({ compact: false });
    } else {
      this.setState({ compact: true });
    }
  };

  render() {
    let isCollapsed = this.state.compact;
    return (
      <div className={"SBMain " + (isCollapsed ? "SBCollapsed" : "")}>
        <div className="SBOverlay">
          <div className="PictureIconBox">
            <img src={avatar} alt="avatar" className="PictureIcon" />
          </div>
          <div className="SBTextBox">
            <div className="Text LargeTitle">
              {isCollapsed ? strings.smallIdentifier : strings.fullName}
            </div>
            <div className="Text Bold">{isCollapsed ? "" : strings.role}</div>
            <div className="Text Bold">
              {isCollapsed ? "" : strings.roleArea}
            </div>
          </div>
          <div className="SBButtonsContainer">
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={event => this.sidebarNavHandler(event)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : "Summary"}
              </span>
              {Icons.face}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={event => this.sidebarNavHandler(event)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : "Skills"}
              </span>
              {Icons.timeline}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={event => this.sidebarNavHandler(event)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : "Experience"}
              </span>
              {Icons.city}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={event => this.sidebarNavHandler(event)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : "Projects"}
              </span>
              {Icons.laptop}
            </button>
          </div>
          <div className="GridSpacer" />
          <button
            className="button buttonSideBarToCollapse"
            onClick={this.sidebarCompactHandler}
          >
            {Icons.arrow("smallIcon" + (isCollapsed ? " rotated180" : ""))}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);

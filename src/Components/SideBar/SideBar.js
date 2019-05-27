import React from "react";
import { withRouter } from "react-router";
import strings from "../StringImporter";
import res from "../resImporter";
import Icons from "../../res/icons/icons";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compact: false
    };
  }

  sidebarNavHandler = link => {
    this.props.history.push(link.toLowerCase());
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
        <div className="SBspaceHolder"/>
        <div className="SBOverlay">
          <div className="PictureIconBox">
            <img src={res.head} alt="avatar" className="PictureIcon" />
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
              onClick={ () => this.sidebarNavHandler(this.props.tabs.link1)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : this.props.tabs.link1}
              </span>
              {Icons.face}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={ () => this.sidebarNavHandler(this.props.tabs.link2)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : this.props.tabs.link2}
              </span>
              {Icons.timeline}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={ () => this.sidebarNavHandler(this.props.tabs.link3)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : this.props.tabs.link3}
              </span>
              {Icons.city}
            </button>
            <button
              className={"button buttonSideBar" + (isCollapsed ? " ButtonCollapsed" : "")}
              onClick={ () => this.sidebarNavHandler(this.props.tabs.link4)}
            >
              <span className="SBButtonText">
                {isCollapsed ? "" : this.props.tabs.link4}
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

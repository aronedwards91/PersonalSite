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

  sidebarBtnComp = (toLink, iconSrc) => {
    return (
      <button
        className={
          "button buttonSideBar" +
          (this.state.compact ? " ButtonCollapsed" : "")
        }
        onClick={() => this.sidebarNavHandler(toLink)}
      >
        <span className="textVertAlign">
          {this.state.compact ? "" : toLink}
        </span>
        {iconSrc}
      </button>
    );
  };

  render() {
    let isCollapsed = this.state.compact;
    return (
      <div className={"mainSB " + (isCollapsed ? "collapsedSB" : "")}>
        <div className="spaceHolderSB" />
        <div className="overlaySB">
          <div>
            <img src={res.head} alt="avatar" className="pictureIconSB" />
          </div>
          <div className="textBoxSB">
            <div className="Text LargeTitle">
              {isCollapsed ? strings.smallIdentifier : strings.fullName}
            </div>
            <div className="Text Bold">{isCollapsed ? "" : strings.role}</div>
            <div className="Text Bold">
              {isCollapsed ? "" : strings.roleArea}
            </div>
          </div>
          <div className="buttonsContainerSB">
            {this.sidebarBtnComp(this.props.tabs.link1, Icons.face)}
            {this.sidebarBtnComp(this.props.tabs.link2, Icons.timeline)}
            {this.sidebarBtnComp(this.props.tabs.link3, Icons.city)}
            {this.sidebarBtnComp(this.props.tabs.link4, Icons.laptop)}
          </div>
          <div />
          <button
            className="button buttonSideBarToCollapse"
            onClick={this.sidebarCompactHandler}
          >
            {Icons.arrow(
              "smallIconBtn" + (isCollapsed ? " rotated180Btn" : "")
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);

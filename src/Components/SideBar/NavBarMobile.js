import React from "react";
import { withRouter } from "react-router";
import strings from "../StringImporter";
import res from "../resImporter";
import "../../css/NavBarNV.css";

class NavBarMobile extends React.Component {
  sidebarNavHandler = link => {
    this.props.history.push(link.toLowerCase());
  };

  render() {
    return (
      <div className="navTopNV">
        <div className="infoNV">
          <img src={res.head} alt="avatar" className="pictureIconNV" />
          <div className="infoTextBoxNV">
            <div className="Text Bold">{strings.fullName}</div>
            <div className="Text">{strings.role}</div>
            <div className="Text">{strings.roleArea}</div>
          </div>
        </div>
        <div className="linkBoxesNV">
          <button
            className="linkButtonNV"
            onClick={() => this.sidebarNavHandler(this.props.tabs.link1)}
          >{this.props.tabs.link1}</button>
          <button
            className="linkButtonNV"
            onClick={() => this.sidebarNavHandler(this.props.tabs.link2)}
          >{this.props.tabs.link2}</button>
          <button
            className="linkButtonNV"
            onClick={() => this.sidebarNavHandler(this.props.tabs.link3)}
          >{this.props.tabs.link3}</button>
          <button
            className="linkButtonNV"
            onClick={() => this.sidebarNavHandler(this.props.tabs.link4)}
          >{this.props.tabs.link4}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBarMobile);

import React from "react";
import strings from "../StringImporter";
import res from "../resImporter";

class Error404 extends React.Component {
  render() {
    return (
      <div className="errorPage">
        <div className="TitleBox">
          <div className="Text LargeTitle">{strings.error404}</div>
        </div>
        <img src={res.error404} alt="404 Error" className="errorImg"/>
      </div>
    );
  }
}

export default Error404;

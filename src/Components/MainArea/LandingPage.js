import React from "react";
import strings from "../StringImporter";
import TechIcons from "./TechIcons";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageSort">
        <TechIcons />
        <div className="divideArea">
          <div className="SummaryBox">
            <div className="SummaryTitleArea">
              <div className="Text linedTitle">{strings.summaryTitle}</div>
            </div>
            <div className="SummaryTextArea">
              <div className="Text">{strings.summary}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

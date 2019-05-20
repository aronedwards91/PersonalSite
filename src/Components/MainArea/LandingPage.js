import React from "react";
import "../../css/LandingPage.css";
import strings from "../StringImporter";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageSort">
        <div className="skillBubbles">Hi</div>
        <div className="SummaryArea">
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

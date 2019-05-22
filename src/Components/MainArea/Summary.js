import React from "react";
import strings from "../StringImporter";

class Summary extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Summary;

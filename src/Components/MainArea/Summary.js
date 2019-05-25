import React from "react";
import strings from "../StringImporter";
import cvIcon from "../../res/cvIcon.png";
import githubImg from "../../res/icons/github.png";

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
          <div className="linksSection">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={strings.link}
              className="linkBox"
            >
              <img src={cvIcon} alt="CV" className="iconBubble" />
              <div className="Text centreText">CV</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={strings.link2}
              className="linkBox"
            >
              <img src={githubImg} alt="Github" className="iconBubble" />
              <div className="Text centreText">Github</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

import React from "react";
import strings from "../StringImporter";
import cvIcon from "../../res/cvIcon.png";
import githubImg from "../../res/icons/github.png";
import linkedinImg from "../../res/icons/linkedin.png";

class Summary extends React.Component {
  render() {
    return (
      <div className={this.props.mobile ? "" : "divideAreaLP"}>
        <div className={this.props.mobile ? "summaryBoxLP mobileMarginLP" : "summaryBoxLP"}>
          <div className="summaryTitleAreaLP">
            <div className="Text linedTitle">{strings.summaryTitle}</div>
          </div>
          <div className="summaryTextAreaLP">
            <div className="Text">{strings.summary}</div>
          </div>
          <div className="linksSectionLP">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={strings.link}
              className="linkBoxLP"
            >
              <img src={cvIcon} alt="CV" className="iconBubbleLP" />
              <div className="Text centreText">CV</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={strings.link2}
              className="linkBoxLP"
            >
              <img src={githubImg} alt="Github" className="iconBubbleLP" />
              <div className="Text centreText">Github</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={strings.link4}
              className="linkBoxLP"
            >
              <img src={linkedinImg} alt="Linkedin" className="iconBubbleLP" />
              <div className="Text centreText">Linkedin</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

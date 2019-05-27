import React from "react";
import strings from "../StringImporter";
import res from "../resImporter";

class ExperiencePage extends React.Component {
  projectComp = (imgSrc, projTitle, projHighlights, projSummary) => {
    return (
      <div className="TextArea">
        <img src={imgSrc} alt="iconPic" className="BubbleIcon" />
        <div className="TextBox">
          <div className="Text BigBold spacing">{projTitle}</div>
          <div className="Text Bold spacing">{projHighlights}</div>
          <div className="Text">{projSummary}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={this.props.mobile ? "PageMain pageMobile" : "PageMain"}>
        <div className={this.props.mobile ? "TitleBox mobilePaddingTB" : "TitleBox"}>
          <div className="Text LargeTitle">{strings.experienceTitle}</div>
        </div>
        <div className="TitleBox smallPadding">
          <div className="Text Bold">{strings.experienceSub1}</div>
        </div>
        {this.projectComp(res.icons.Business1, strings.exp1,strings.exp1Highlights,strings.exp1Summary)}
        <div className="TitleBox smallPadding">
          <div className="Text Bold">{strings.experienceSub2}</div>
        </div>
        {this.projectComp(res.icons.Business2, strings.exp2,strings.exp2Highlights,strings.exp2Summary)}
        {this.projectComp(res.icons.Business3, strings.exp3,strings.exp3Highlights,strings.exp3Summary)}
        {this.projectComp(res.icons.Business4, strings.exp4,strings.exp4Highlights,strings.exp4Summary)}
        {this.projectComp(res.icons.Business5, strings.exp5,strings.exp5Highlights,strings.exp5Summary)}
        {this.projectComp(res.icons.Business6, strings.exp6,strings.exp6Highlights,strings.exp6Summary)}
        
      </div>
    );
  }
}

export default ExperiencePage;

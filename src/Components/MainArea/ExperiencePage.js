import React from "react";
import strings from "../StringImporter";
import res from "../resImporter";

class ExperiencePage extends React.Component {
  render() {
    return (
      <div className="PageMain">
        <div className="TitleBox">
          <div className="Text LargeTitle">{strings.experienceTitle}</div>
        </div>
        <div className="TitleBox smallPadding">
          <div className="Text Bold">{strings.experienceSub1}</div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business1} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp1}</div>
            <div className="Text Bold spacing">{strings.exp1Highlights}</div>
            <div className="Text">{strings.exp1Summary}</div>
          </div>
        </div>
        <div className="TitleBox smallPadding">
          <div className="Text Bold">{strings.experienceSub2}</div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business2} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp2}</div>
            <div className="Text Bold spacing">{strings.exp2Highlights}</div>
            <div className="Text">{strings.exp2Summary}</div>
          </div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business3} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp3}</div>
            <div className="Text Bold spacing">{strings.exp3Highlights}</div>
            <div className="Text">{strings.exp3Summary}</div>
          </div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business4} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp4}</div>
            <div className="Text Bold spacing">{strings.exp4Highlights}</div>
            <div className="Text">{strings.exp4Summary}</div>
          </div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business5} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp5}</div>
            <div className="Text Bold spacing">{strings.exp5Highlights}</div>
            <div className="Text">{strings.exp5Summary}</div>
          </div>
        </div>
        <div className="TextArea">
          <img src={res.icons.Business6} alt="iconPic" className="BubbleIcon" />
          <div className="TextBox">
            <div className="Text BigBold spacing">{strings.exp6}</div>
            <div className="Text Bold spacing">{strings.exp6Highlights}</div>
            <div className="Text">{strings.exp6Summary}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;

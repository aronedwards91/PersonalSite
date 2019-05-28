import React from "react";
import strings from "../StringImporter";
import jsImg from "../../res/icons/js.png";
import agileImg from "../../res/icons/agile.png";
import expressImg from "../../res/icons/Express.png";
import fastifyImg from "../../res/icons/fastify.png";
import githubImg from "../../res/icons/github.png";
import linuxImg from "../../res/icons/linux.png";
import nodeImg from "../../res/icons/node.png";
import awsImg from "../../res/icons/aws.png";
import mongodbImg from "../../res/icons/mongodb.png";
import reactImg from "../../res/icons/react.png";

class SkillsPage extends React.Component {
  skillComp = (imgSrc, skillTitle, skillHighlights, skillSummary) => {
    return (
      <div className="bubbleAreaTB">
        <img src={imgSrc} alt="iconPic" className="bubbleIconTB" />
        <div className="TextBox">
          <div className="Text BigBold spacing">{skillTitle}</div>
          <div className="Text Bold spacing">{skillHighlights}</div>
          <div className="Text">{skillSummary}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={this.props.mobile ? "pageMainTB pageMobileTB" : "pageMainTB"}>
        <div className={this.props.mobile ? "titleBoxTB mobilePaddingTB" : "titleBoxTB"}>
          <div className="Text LargeTitle">{strings.skillTitle}</div>
        </div>
        {this.skillComp(jsImg,strings.skill1,strings.skill1Highlights,strings.skill1Summary)}
        {this.skillComp(reactImg,strings.skill2,strings.skill2Highlights,strings.skill2Summary)}
        {this.skillComp(mongodbImg,strings.skill3,strings.skill3Highlights,strings.skill3Summary)}
        {this.skillComp(expressImg,strings.skill4,strings.skill4Highlights,strings.skill4Summary)}
        {this.skillComp(nodeImg,strings.skill5,strings.skill5Highlights,strings.skill5Summary)}
        {this.skillComp(linuxImg,strings.skill6,strings.skill6Highlights,strings.skill6Summary)}
        {this.skillComp(awsImg,strings.skill7,strings.skill7Highlights,strings.skill7Summary)}
        {this.skillComp(agileImg,strings.skill8,strings.skill8Highlights,strings.skill8Summary)}
        {this.skillComp(githubImg,strings.skill9,strings.skill9Highlights,strings.skill9Summary)}
        {this.skillComp(fastifyImg,strings.skill10,strings.skill10Highlights,strings.skill10Summary)}
        {this.props.children}
      </div>
    );
  }
}

export default SkillsPage;

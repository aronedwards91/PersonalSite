import React from "react";
import agileImg from "../../res/icons/agile.png";
import expressImg from "../../res/icons/Express.png";
import fastifyImg from "../../res/icons/fastify.png";
import githubImg from "../../res/icons/github.png";
import jsImg from "../../res/icons/js.png";
import linuxImg from "../../res/icons/linux.png";
import nodeImg from "../../res/icons/node.png";
import awsImg from "../../res/icons/aws.png";

class TechIcons extends React.PureComponent {
  skillIcon = (skillCSS, imgSrc, imgText) => {
    return (
      <div className={"skillBox " + skillCSS}>
        <img src={imgSrc} alt={imgText} className="iconBubble" />
        <div className="Text centreText">{imgText}</div>
      </div>
    );
  };
  render() {
    return (
      <div className={this.props.mobile ? "" : "divideArea"}>
        <div className="TitleBox smallPadding">
          <div className="Text Bold">Skill Ranking</div>
        </div>

        <div className="techIconsLP">
          {this.skillIcon("skill1",jsImg,"JavaScript")}
          {this.skillIcon("skill2",nodeImg,"Node")}
          {this.skillIcon("skill3",expressImg,"Express")}
          {this.skillIcon("skill4",agileImg,"Agile")}
          {this.skillIcon("skill5",githubImg,"Git")}
          {this.skillIcon("skill6",linuxImg,"Linux")}
          {this.skillIcon("skill7",fastifyImg,"Fastify")}
          {this.skillIcon("skill8",awsImg,"AWS")}
          <div className="backLayer">
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default TechIcons;

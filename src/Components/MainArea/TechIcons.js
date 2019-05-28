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
      <div className={"skillBoxLP " + skillCSS}>
        <img src={imgSrc} alt={imgText} className="iconBubbleLP" />
        <div className="Text centreText">{imgText}</div>
      </div>
    );
  };
  render() {
    return (
      <div className={this.props.mobile ? "techMarginLP" : "divideAreaLP"}>
        <div className="titleBoxTB smallPadding">
          <div className="Text Bold">Skill Ranking</div>
        </div>

        <div className="techIconsLP">
          {this.skillIcon("skill1LP",jsImg,"JavaScript")}
          {this.skillIcon("skill2LP",nodeImg,"Node")}
          {this.skillIcon("skill3LP",expressImg,"Express")}
          {this.skillIcon("skill4LP",agileImg,"Agile")}
          {this.skillIcon("skill5LP",githubImg,"Git")}
          {this.skillIcon("skill6LP",linuxImg,"Linux")}
          {this.skillIcon("skill7LP",fastifyImg,"Fastify")}
          {this.skillIcon("skill8LP",awsImg,"AWS")}
          <div className="backLayerLP">
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

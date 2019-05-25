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
  render() {
    return (
      <div className="divideArea">
        <div className="TitleBox marginBigTop">
          <div className="Text Bold">Skill Ranking</div>
        </div>

        <div className="techIcons">
          <div className="skillBox skill1">
            <img src={jsImg} alt="Js" className="iconBubble" />
            <div className="Text centreText">Javascript</div>
          </div>
          <div className="skillBox skill2">
            <img src={nodeImg} alt="Node" className="iconBubble" />
            <div className="Text centreText">Node</div>
          </div>
          <div className="skillBox skill3">
            <img src={expressImg} alt="Express" className="iconBubble" />
            <div className="Text centreText">Express</div>
          </div>
          <div className="skillBox skill4">
            <img src={agileImg} alt="Agile" className="iconBubble" />
            <div className="Text centreText">Agile</div>
          </div>
          <div className="skillBox skill5">
            <img src={githubImg} alt="Github" className="iconBubble" />
            <div className="Text centreText">Github</div>
          </div>
          <div className="skillBox skill6">
            <img src={linuxImg} alt="Linux" className="iconBubble" />
            <div className="Text centreText">Linux</div>
          </div>
          <div className="skillBox skill7">
            <img src={fastifyImg} alt="Fastify" className="iconBubble" />
            <div className="Text centreText">Fastify</div>
          </div>
          <div className="skillBox skill8">
            <img src={awsImg} alt="AWS" className="iconBubble" />
            <div className="Text centreText">AWS</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechIcons;

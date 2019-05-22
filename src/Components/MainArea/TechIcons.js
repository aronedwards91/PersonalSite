import React from "react";
import agileImg from "../../res/icons/agile.png";
import expressImg from "../../res/icons/Express.png";
import fastifyImg from "../../res/icons/fastify.png";
import githubImg from "../../res/icons/github.png";
import jsImg from "../../res/icons/js.png";
import linuxImg from "../../res/icons/linux.png";
import nodeImg from "../../res/icons/node.png";

class TechIcons extends React.PureComponent {
  render() {
    return (
      <div className="divideArea">
        <div className="techIconsHeader">
          <div className="text Bold" >Skill Ranking</div>
        </div>

        <div className="techIcons">
          <img src={agileImg} alt="Agile" className="iconBubble skill4" />
          <img src={expressImg} alt="Express" className="iconBubble skill3" />
          <img src={fastifyImg} alt="Fastify" className="iconBubble skill7" />
          <img src={githubImg} alt="Github" className="iconBubble skill5" />
          <img src={jsImg} alt="Js" className="iconBubble skill1" />
          <img src={linuxImg} alt="Linux" className="iconBubble skill6" />
          <img src={nodeImg} alt="Node" className="iconBubble skill2" />
        </div>
      </div>
    );
  }
}

export default TechIcons;

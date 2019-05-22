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
        <div className="techIconsHeader" />
        <div className="techIcons">
          <img src={agileImg} alt="Agile" className="iconBubble" />
          <img src={expressImg} alt="Express" className="iconBubble" />
          <img src={fastifyImg} alt="Fastify" className="iconBubble" />
          <img src={githubImg} alt="Github" className="iconBubble" />
          <img src={jsImg} alt="Js" className="iconBubble" />
          <img src={linuxImg} alt="Linux" className="iconBubble" />
          <img src={nodeImg} alt="Node" className="iconBubble" />
        </div>
      </div>
    );
  }
}

export default TechIcons;

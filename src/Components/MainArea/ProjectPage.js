import React from "react";
import strings from "../StringImporter";
import res from "../resImporter";
import "../../css/ProjectBoxPB.css";
import githubImg from "../../res/icons/github.png";

class ProjectPage extends React.Component {
  imgComp = source => {
    return (
      <div className={this.props.mobile ? "" : "divideBoxImgPB"}>
        <img src={source} alt="projImg" className={this.props.mobile ? "projectImgPB projImgMobPB" : "projectImgPB"} />
      </div>
    );
  };

  projectComp = (titleString, techStackString ,summaryString, imgSource ,gitLink) => {
    return (
      <div
        className={
          this.props.mobile ? "projectBoxPB boxMobilePB" : "projectBoxPB"
        }
      >
        <div className={this.props.mobile ? "" : "divideBoxTextPB"}>
          <div className="Text TitleBox">{titleString}</div>
          {this.props.mobile ? this.imgComp(imgSource) : ""}
          <div className="Text Bold smallPadding">{techStackString}</div>
          <div className="Text smallPadding">{summaryString}</div>
          {gitLink ? <a
            target="_blank"
            rel="noopener noreferrer"
            href={gitLink}
            className="linkBoxLP"
          >
            <img src={githubImg} alt="Github" className="iconBubble" />
          </a> : ""}
          
        </div>
        {this.props.mobile ? "" : this.imgComp(imgSource)}
      </div>
    );
  };

  render() {
    console.log(this.props.mobile);
    return (
      <div className="PageMainPB">
        <div className="TitleBox">
          <div className="Text LargeTitle">{strings.projectsTitle}</div>
        </div>
        {this.projectComp(
          strings.proj1,
          strings.proj1TechStack,
          strings.proj1Summary,
          res.proj.project1,
          strings.link2
        )}
        {this.projectComp(
          strings.proj2,
          strings.proj2TechStack,
          strings.proj2Summary,
          res.proj.project2,
          null
        )}
        {this.projectComp(
          strings.proj3,
          strings.proj3TechStack,
          strings.proj3Summary,
          res.proj.project3,
          null
        )}
        {this.projectComp(
          strings.proj4,
          strings.proj4TechStack,
          strings.proj4Summary,
          res.proj.project4,
          null
        )}
        {this.projectComp(
          strings.proj5,
          strings.proj5TechStack,
          strings.proj5Summary,
          res.proj.project5,
          strings.link3
        )}
        {this.projectComp(
          strings.proj6,
          strings.proj6TechStack,
          strings.proj6Summary,
          res.proj.project6,
          null
        )}
        {this.props.children}
      </div>
    );
  }
}

export default ProjectPage;

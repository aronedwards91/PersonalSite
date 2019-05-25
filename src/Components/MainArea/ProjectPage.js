import React from "react";
import strings from "../StringImporter";
import res from "../resImporter";
import "../../css/ProjectBoxPB.css";

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="PageMainPB">
        <div className="TitleBox">
          <div className="Text LargeTitle">{strings.projectsTitle}</div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj1}</div>
            <div className="Text Bold smallPadding">
              {strings.proj1TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj1Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project1} alt="proj1" className="projectImgPB" />
          </div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj2}</div>
            <div className="Text Bold smallPadding">
              {strings.proj2TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj2Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project2} alt="proj2" className="projectImgPB" />
          </div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj3}</div>
            <div className="Text Bold smallPadding">
              {strings.proj3TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj3Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project3} alt="proj3" className="projectImgPB" />
          </div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj4}</div>
            <div className="Text Bold smallPadding">
              {strings.proj4TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj4Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project4} alt="proj4" className="projectImgPB" />
          </div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj5}</div>
            <div className="Text Bold smallPadding">
              {strings.proj5TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj5Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project5} alt="proj5" className="projectImgPB" />
          </div>
        </div>
        <div className="projectBoxPB">
          <div className="divideBoxTextPB">
            <div className="Text TitleBox">{strings.proj6}</div>
            <div className="Text Bold smallPadding">
              {strings.proj6TechStack}
            </div>
            <div className="Text smallPadding">{strings.proj6Summary}</div>
          </div>
          <div className="divideBoxImgPB">
            <img src={res.proj.project6} alt="proj6" className="projectImgPB" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;

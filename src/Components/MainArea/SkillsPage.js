import React from "react";
import strings from "../StringImporter";
import jsImg from "../../res/icons/js.png";
import "../../css/SkillsPage.css";


class SkillsPage extends React.Component {
    render() {
        return (
            <div className="SkMain">
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="SkSkillArea">
                    <img src={jsImg} alt="iconPic" className="SkSkillIcon"/>
                    <div className="SkSkillTextBox">
                        <div className="Text BigBold">{strings.skill1}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsPage
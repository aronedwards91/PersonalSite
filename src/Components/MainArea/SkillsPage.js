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
    render() {
        return (
            <div className="PageMain">
                <div className="TitleBox">
                    <div className="Text LargeTitle">{strings.skillTitle}</div>
                </div>
                <div className="TextArea">
                    <img src={jsImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill1}</div>
                        <div className="Text Bold spacing">{strings.skill1Highlights}</div>
                        <div className="Text">{strings.skill1Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={reactImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill2}</div>
                        <div className="Text Bold spacing">{strings.skill2Highlights}</div>
                        <div className="Text">{strings.skill2Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={mongodbImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill3}</div>
                        <div className="Text Bold spacing">{strings.skill3Highlights}</div>
                        <div className="Text">{strings.skill3Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={expressImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill4}</div>
                        <div className="Text Bold spacing">{strings.skill4Highlights}</div>
                        <div className="Text">{strings.skill4Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={nodeImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill5}</div>
                        <div className="Text Bold spacing">{strings.skill5Highlights}</div>
                        <div className="Text">{strings.skill5Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={linuxImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill6}</div>
                        <div className="Text Bold spacing">{strings.skill6Highlights}</div>
                        <div className="Text">{strings.skill6Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={awsImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill7}</div>
                        <div className="Text Bold spacing">{strings.skill7Highlights}</div>
                        <div className="Text">{strings.skill7Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={agileImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill8}</div>
                        <div className="Text Bold spacing">{strings.skill8Highlights}</div>
                        <div className="Text">{strings.skill8Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={githubImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill9}</div>
                        <div className="Text Bold spacing">{strings.skill9Highlights}</div>
                        <div className="Text">{strings.skill9Summary}</div>
                    </div>
                </div>
                <div className="TextArea">
                    <img src={fastifyImg} alt="iconPic" className="BubbleIcon"/>
                    <div className="TextBox">
                        <div className="Text BigBold spacing">{strings.skill10}</div>
                        <div className="Text Bold spacing">{strings.skill10Highlights}</div>
                        <div className="Text">{strings.skill10Summary}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsPage
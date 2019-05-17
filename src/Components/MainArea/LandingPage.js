import React from "react";
import "../../css/landingPage.css"
import strings from "../StringImporter";

class LandingPage extends React.Component {


    render() {

        return (
            <div className="pageSort">
                <div className="skillBubbles">
                Hi
                </div>
                <div className="SummaryArea">
                    <div className="SummaryBox">
                        <div className="SummaryTitle">{strings.summaryTitle}</div>
                        <div className="SummaryText">
                        {strings.summary}
                        </div>
                    </div>

                </div>
            </div> 
        )
    }
}

export default LandingPage;
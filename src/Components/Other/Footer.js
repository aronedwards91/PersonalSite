import React from "react";
import strings from "../StringImporter";

class Footer extends React.Component {
    render () {
        return(
            <div className="footer">    
                <hr/>
                <div className="bottomInfoAPP">
                    <div className="Text">{strings.fullName + "  ::  Updated " + strings.YearUpdated}</div>
                </div>

            </div>
        )
    }
}
export default Footer;
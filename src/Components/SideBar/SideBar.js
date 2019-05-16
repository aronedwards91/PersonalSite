import React from "react";
import "../../css/SideBar.css";

class SideBar extends React.Component {
  state = {
    compact: false
  };

  render() {
    return (
      <div className='SBMain'>
        <div className='SBBackground' />
        <div className='SBOverlay'>
          <div className='SBTitle'>TestDel</div>
          <button className='SBButton'>TestDel</button>
          <button className='SBButton'>TestDel</button>
          <button className='SBButton'>TestDel</button>
          <button className='SBButton'>TestDel</button>
        </div>
      </div>
    );
  }
}

export default SideBar

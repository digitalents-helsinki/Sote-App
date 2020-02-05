import React from "react";
import backArrowSvg from "../Images/back-arrow.svg";
import moreBtnSvg from "../Images/more-btn.svg";

function TopArea({ setMenuVisibility, history, displayArrow }) {
  if (displayArrow) {
    return (
      <div className="TopArea">
        <div className="flex-container">
          <img />
          <h1 className="AppName">SoTe</h1>
          <img
            className="more-btn"
            src={moreBtnSvg}
            alt="moreBtnSvg"
            onClick={() => setMenuVisibility(true)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="TopArea">
        <div className="flex-container">
          <img
            className="back-arrow"
            src={backArrowSvg}
            onClick={() => {
              history.goBack();
            }}
            alt="backArrowSvg"
          />
          <h1 className="AppName">SoTe</h1>
          <img
            className="more-btn"
            src={moreBtnSvg}
            alt="moreBtnSvg"
            onClick={() => setMenuVisibility(true)}
          />
        </div>
      </div>
    );
  }
}

export default TopArea;

import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import backArrowSvg from "../Images/back-arrow.svg";
import moreBtnSvg from "../Images/more-btn.svg";
import ProgressBar from "../Components/ProgressBar";

function TopArea({ setMenuVisibility, personData }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="TopArea">
      <div className="flex-container">
        <img
          style={{
            visibility: location.pathname === "/" ? "hidden" : "visible"
          }}
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
      <ProgressBar personData={personData} />
    </div>
  );
}

export default TopArea;

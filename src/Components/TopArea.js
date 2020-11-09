import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import backArrowSvg from "../Images/back-arrow.svg";
import moreBtnSvg from "../Images/more-btn.svg";
import ProgressBar from "../Components/ProgressBar";

function TopArea({ setMenuVisibility, personData, careType }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="TopArea">
      <div className="flex-container">
        <img
          style={{
            visibility: [
              "/",
              "/instructionPage",
              "/instructionPageTwo"
            ].includes(location.pathname)
              ? "hidden"
              : "visible"
          }}
          className="back-arrow"
          src={backArrowSvg}
          onClick={() => {
            history.goBack();
          }}
          alt=""
        />
        <h1 className="AppName">Aina-mukana</h1>
        {careType && <h2 className="care-type">{careType}</h2>}
        <img
          className="more-btn"
          style={{ visibility: careType ? "visible" : "hidden" }}
          src={moreBtnSvg}
          alt=""
          onClick={() => setMenuVisibility(true)}
        />
      </div>
      <ProgressBar personData={personData} />
    </div>
  );
}

export default TopArea;

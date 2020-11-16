import React from "react";
import Arrow from "../Images/arrow-white.svg";
import ABCDE from "../Images/ABCDE.png";

function ABCDEPage({ setABCDEVisibility, visibility, careType }) {
  return (
    <div
      className={
        "emergencyPage-container" +
        (typeof visibility === "boolean"
          ? visibility
            ? " active"
            : " inactive"
          : "")
      }
    >
      <div className="emergencyPage-topBar">
        <img
          src={Arrow}
          alt="arrow.svg"
          onClick={() => setABCDEVisibility(false)}
        ></img>
        <h2>ABCDE</h2>
      </div>
      <div className="symptoms-container">
        <div className="hatatilanne-image">
          <img src={ABCDE} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ABCDEPage;

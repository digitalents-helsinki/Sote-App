import React from "react";
import Arrow from "../Images/arrow-white.svg";
import ISBAR from "../Images/ISBAR.png";

function ISBARPage({ setISBARVisibility, visibility, careType }) {
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
          onClick={() => setISBARVisibility(false)}
        ></img>
        <h2>ISBAR</h2>
      </div>
      <div className="symptoms-container">
        <div className="hatatilanne-image">
          <img src={ISBAR} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ISBARPage;

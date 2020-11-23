import React from "react";
import Arrow from "../Images/arrow-white.svg";
import ABCDE from "../Images/ABCDE.png";
import ABCDEvertical from "../Images/ABCDE-vertical.png";
import helsinki from "../Images/helsinki.png";

function ABCDEPage({ setABCDEVisibility, visibility }) {
  
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
      <div className="wave-blue">
        <img
          src={Arrow}
          alt=""
          onClick={() => setABCDEVisibility(false)}
        ></img>
        <h2 className="responsiveh2">ABCDE-menetelmä ja sen käyttö</h2>
        <img className="helsinki"
          src={helsinki}
          alt=""
        ></img>
      </div>
      <div className="hatatilanne-container">
        <div className="hatatilanne-image">
          <img className="image1" src={ABCDE} alt="" />
          <img className="image2" src={ABCDEvertical} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ABCDEPage;

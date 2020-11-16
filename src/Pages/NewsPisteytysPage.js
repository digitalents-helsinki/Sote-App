import React from "react";
import Arrow from "../Images/arrow-white.svg";
import NEWS from "../Images/NEWS.png";

function NewsPisteytysPage({
  setNewsPisteytysVisibility,
  visibility,
  careType
}) {
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
          onClick={() => setNewsPisteytysVisibility(false)}
        ></img>
        <h2>NewsPisteytys</h2>
      </div>
      <div className="symptoms-container">
        <div className="hatatilanne-image">
          <img src={NEWS} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewsPisteytysPage;

import React from "react";
import Arrow from "../Images/arrow-white.svg";
import konsultoitava from "../Images/konsultoitava.png";

function KonsultoitavaPage({
  setKonsultoitavaVisibility,
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
          onClick={() => setKonsultoitavaVisibility(false)}
        ></img>
        <h2>Konsultoitava tilanne</h2>
      </div>
      <div className="symptoms-container">
        <div className="hatatilanne-image">
          <img src={konsultoitava} alt="" />
        </div>
      </div>
    </div>
  );
}

export default KonsultoitavaPage;

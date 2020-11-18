import React from "react";
import Arrow from "../Images/arrow-white.svg";
import konsultoitava from "../Images/konsultoitava.png";
import konsultoitavavertical from "../Images/konsultoitava-vertical.png";
import helsinki from "../Images/helsinki.png";

function KonsultoitavaPage({ setKonsultoitavaVisibility, visibility, }) {

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
          onClick={() => setKonsultoitavaVisibility(false)}
        ></img>
        <h2>Konsultoitava tilanne</h2>
        <img className="helsinki"
          src={helsinki}
          alt=""
        ></img>
      </div>
      <div className="hatatilanne-container">
        <div className="hatatilanne-image">
          <img className="image1" src={konsultoitava} alt="" />
          <img className="image2" src={konsultoitavavertical} alt="" />
        </div>
      </div>
    </div>
  );
}

export default KonsultoitavaPage;

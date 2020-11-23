import React from "react";
import Arrow from "../Images/arrow-white.svg";
import ISBAR from "../Images/ISBAR.png";
import ISBARvertical from "../Images/ISBAR-vertical.png";
import helsinki from "../Images/helsinki.png";

function ISBARPage({ setISBARVisibility, visibility }) {
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
      <div className="wave-red">
        <img
          src={Arrow}
          alt="arrow.svg"
          onClick={() => setISBARVisibility(false)}
        ></img>
        <h2 className="responsiveh2">ISBAR-raportointiohje konsultoitaessa asiakkaasta</h2>
        <img className="helsinki"
          src={helsinki}
          alt=""
        ></img>
      </div>
      <div className="hatatilanne-container">
        <div className="hatatilanne-image">
          <img className="image1" src={ISBAR} alt="" />
          <img className="image2" src={ISBARvertical} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ISBARPage;

import React from "react";
import Arrow from "../Images/arrow-white.svg";
import NEWS from "../Images/NEWS.png";
import NEWSvertical from "../Images/NEWS-vertical.png";
import helsinki from "../Images/helsinki.png";

function NewsPisteytysPage({ setNewsPisteytysVisibility, visibility }) {
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
          alt="arrow.svg"
          onClick={() => setNewsPisteytysVisibility(false)}
        ></img>
        <h2 className="responsiveh2">NEWS - Aikaisen varoituksen pisteytysjärjestelmä</h2>
        <img className="helsinki"
          src={helsinki}
          alt=""
        ></img>
      </div>
      <div className="hatatilanne-container">
        <div className="hatatilanne-image">
          <img className="image1" src={NEWS} alt="" />
          <img className="image2" src={NEWSvertical} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewsPisteytysPage;

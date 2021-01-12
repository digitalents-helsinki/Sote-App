import React from "react";
import Arrow from "../Images/arrow-white.svg";
import helsinki from "../Images/helsinki.png";

function LastReportPage({ setLastReportVisibility, visibility }) {
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
          onClick={() => setLastReportVisibility(false)}
        ></img>
        <h2 className="responsiveh2">Viimeisimmät raportit</h2>
        <img className="helsinki"
          src={helsinki}
          alt=""
        ></img>
      </div>
      <div className="hatatilanne-container">
          <div className="report-header">
              <p>report date</p>
              <div className="report-button">
                <p>+</p>
              </div>
          </div>
          <p>Test</p>
      </div>
    </div>
  );
}

export default LastReportPage;

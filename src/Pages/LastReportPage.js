import React from "react";
import Arrow from "../Images/arrow-white.svg";
import helsinki from "../Images/helsinki.png";
import reportimage from "../Images/report-overview.png";

function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}

// window.onclick = function(event) {
//   if (!event.target.matches('.report-button')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

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
        <img className="helsinki" src={helsinki} alt=""></img>
      </div>
      <div className="hatatilanne-container">
        <div className="report-header">
          <p>Raportti - 14/01/2021, 14:52</p>
          <div className="report-button">
            <p>+</p>
          </div>
        </div>
        <div className="report-header" style={{ color: "#ab2615" }}>
          <p>Raportti - 14/01/2021, 13:20</p>
          <div onClick={myFunction} className="report-button">
            <p>!</p>
          </div>
        </div>
        <div id="dropdown" className="dropdown-content">
          <img src={reportimage} alt=""></img>
        </div>
        <div className="report-header">
          <p>Raportti - 13/01/2021, 9:57</p>
          <div className="report-button">
            <p>+</p>
          </div>
        </div>
        <div className="report-header">
          <p>Raportti - 13/01/2021, 9:57</p>
          <div className="report-button">
            <p>+</p>
          </div>
        </div>
        <div className="report-header">
          <p>Raportti - 13/01/2021, 9:57</p>
          <div className="report-button">
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastReportPage;

import React from "react";
import Arrow from "../Images/arrow-white.svg";
import helsinki from "../Images/helsinki.png";
import reportimage from "../Images/report-overview.png";

function reportDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}
function reportDropdown2() {
  document.getElementById("dropdown2").classList.toggle("show");
}

function circleButton() {
  document.getElementById("circle-button").classList.toggle("opened");
}
function circleButton2() {
  document.getElementById("circle-button2").classList.toggle("opened");
}

// $('.circle-plus').on('click', function(){
//   $(this).toggleClass('opened');
// })

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
          <p>Raportti - 14/01/2021, 13:20</p>
          <div onClick={() => {reportDropdown(); circleButton();}} id="circle-button" className="report-button circle-plus closed">
            <div class="circle">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
          </div>
        </div>
        <div id="dropdown" className="dropdown-content">
          <img src={reportimage} alt=""></img>
        </div>
        <div className="report-header" style={{ color: "#ab2615" }}>
          <p>Raportti - 14/01/2021, 14:52</p>
          <div onClick={() => {reportDropdown2(); circleButton2();}} id="circle-button2" className="report-button circle-plus closed">
            <div class="circle">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
          </div>
        </div>
        <div id="dropdown2" className="dropdown-content">
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

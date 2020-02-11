import React from "react";
import Exit_icon from "../Images/exit-icon.svg";

function MenuPanel({
  setMenuVisibility,
  menuVisibility,
  setEmergencyVisibility,
  history,
  setPersonData,
  testingdata
}) {
  return (
    <div className={"menu-panel" + (menuVisibility ? " active" : "")}>
      <img
        onClick={() => setMenuVisibility(false)}
        style={{ height: "27px", float: "right" }}
        src={Exit_icon}
        alt="exit-icon"
      ></img>
      <div className="content">
        <div
          className="reset"
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        >
          <p>Aloita alusta</p>
        </div>
        <div
          className="emeregencyPage-fromMenu"
          onClick={() => {
            setEmergencyVisibility(true);
            setMenuVisibility(false);
          }}
        >
          <p>
            Hätätilanne
            <wbr />
            oireet
          </p>
        </div>
        <div
          className="emeregencyPage-fromMenu"
          onClick={() => {
            setPersonData(testingdata);
            setMenuVisibility(false);
          }}
        >
          <p>DevOps: Activate testing Data</p>
        </div>
      </div>
    </div>
  );
}

export default MenuPanel;

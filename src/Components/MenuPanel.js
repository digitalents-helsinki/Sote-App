import React from "react";
import Exit_icon from "../Images/exit-icon.svg";
import { useHistory, useLocation } from "react-router-dom";

function MenuPanel({
  setMenuVisibility,
  menuVisibility,
  setEmergencyVisibility,
  setPersonData,
  testingdata
}) {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <div
        style={{
          width: menuVisibility ? "100vw" : 0,
          opacity: menuVisibility ? 0.1 : 0,
          transition: menuVisibility
            ? "opacity 250ms"
            : "opacity 250ms, width 0ms 250ms"
        }}
        className="menu-panel-bg"
        onClick={() => setMenuVisibility(false)}
      />
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
              if (location.pathname !== "/") history.replace("/");
              setPersonData({});
              setMenuVisibility(false);
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
    </>
  );
}

export default MenuPanel;

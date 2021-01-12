import React from "react";
import Exit_icon from "../Images/exit-icon.svg";
import { useHistory, useLocation } from "react-router-dom";

function MenuPanel({
  setMenuVisibility,
  menuVisibility,
  setEmergencyVisibility,
  setKonsultoitavaVisibility,
  setABCDEVisibility,
  setNewsPisteytysVisibility,
  setISBARVisibility,
  setLastReportVisibility,
  setPersonData,
  setcontrolData,
  careType,
  setCareType
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
              setcontrolData({});
              setPersonData({});
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "-15px",
                color: "#ffffff"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9658; </span>
              Aloita alusta
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              if (careType) {
                setCareType("");
                history.push("/", { initial: false });
              }
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "-15px",
                color: "#ffffff"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9658; </span>
              Vaihda hoitoyksikköä
            </p>
          </div>

          <div>
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "-15px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9658; </span>
              Päivystystilanteiden opas
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setEmergencyVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "5px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9656; </span>
              Hätätilanne
              <wbr />
              oireet
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setKonsultoitavaVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "5px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9656; </span>
              Konsultoitava tilanne
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setABCDEVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "5px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9656; </span>
              ABCDE-menetelmä ja sen käyttö
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setNewsPisteytysVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "5px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9656; </span>
              NEWS - Aikaisen varoituksen pisteytysjärjestelmä
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setISBARVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "5px",
                color: "#f0a171"
              }}
            >
              <span style={{ fontSize: "15px" }}>&#9656; </span>
              ISBAR-raportointiohje konsultoitaessa asiakkaasta
            </p>
          </div>

          <div
            className="emergencyPage-fromMenu"
            onClick={() => {
              setLastReportVisibility(true);
              setMenuVisibility(false);
            }}
          >
            <p
              style={{
                display: "list-item",
                listStyleType: "none",
                marginLeft: "-15px",
                color: "#ffffff"
              }}
            ><span style={{fontSize: "15px"}}>&#9658; </span>
              Viimeisimmät raportit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPanel;

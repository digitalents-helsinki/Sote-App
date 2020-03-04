import React from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function ProgressBar({ personData }) {
  const location = useLocation();
  const locations = [
    "/hengitystie",
    "/hengitys",
    "/verenkierto",
    "/tajunta",
    "/iho",
    "/hengitystaajuus",
    "/happisaturaatio",
    "/systolinenverenpaine",
    "/syketaajuus",
    "/lampotila",
    "/tajunnantaso",
    "/verensokeri"
  ];
  const locationIndex = locations.findIndex(loc => loc === location.pathname);
  const progressBarWidthInPercents = ~locationIndex
    ? `calc(${(100 / locations.length) * locationIndex}% - 4px)`
    : location.pathname === "/"
    ? "0"
    : "calc(100% - 4px)";
  const progressBarShadowExpressions = [
    typeof personData["Onko hengitystie auki?"] === "boolean" &&
      typeof personData["Onko ilmatie estettä?"] === "boolean",
    personData["Hengitys - Normaali hengitys/ei ääniä"] ||
      personData["Hengitys - Vinkuna"] ||
      personData["Hengitys - Korina"] ||
      personData["Hengitys - Rohina"],
    typeof personData["Tarkista syke:"] === "boolean" &&
      typeof personData["Tuntuuko lämpörajoja raajoissa:"] === "boolean",
    personData["Tajunta - Ei poikkeavia löydöksiä."] || personData.Tajunta,
    (personData["Iho, paljastaminen - Normaali"] ||
      personData["Iho, paljastaminen - Kuiva"] ||
      personData["Iho, paljastaminen - Kostea"] ||
      personData["Iho, paljastaminen - Kylmä"] ||
      personData["Iho, paljastaminen - Kuuma"]) &&
      (personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ||
        personData.Iho),
    personData["Hengitystaajuus"],
    personData["Happisaturaatio"],
    personData["Systolinen verenpaine"],
    personData["Syketaajuus"],
    personData["Mittaa lämpötila"],
    typeof personData["Tajunnan taso"] === "boolean",
    personData["Mittaa verensokeri:"]
  ];
  const progressBarShadowWidth = `calc(${(100 / locations.length) *
    progressBarShadowExpressions.reduce(
      (trueCount, curr) => (!curr ? trueCount : trueCount + 1),
      0
    )}% - 4px)`;

  return (
    <CSSTransition
      in={!!~locationIndex}
      timeout={300}
      classNames="progress-bar-transition"
    >
      <div className="ProgressBar" style={{ opacity: ~locationIndex ? 1 : 0 }}>
        <div className="bar-background">
          <div
            style={{ width: progressBarShadowWidth }}
            className="bar-shadow-indicator"
          ></div>
          <div
            style={{ width: progressBarWidthInPercents }}
            className="bar-indicator"
          ></div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default ProgressBar;

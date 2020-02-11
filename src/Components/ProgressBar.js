import React from "react";
import { useLocation } from "react-router-dom";

function ProgressBar({ personData }) {
  const location = useLocation();
  const locations = [
    "/hengitystie",
    "/hengitys",
    "/iho",
    "/verenkierto",
    "/tajunta",
    "/hengitystaajuus",
    "/happisaturaatio",
    "/systolinenverenpaine",
    "/syketaajuus",
    "/lampotila",
    "/tajunnantaso",
    "/verensokeri"
  ];
  const locationIndex = locations.findIndex(loc => loc === location.pathname);
  const progressBarWidthInPercents = `${(100 / locations.length) *
    locationIndex}%`;
  const progressBarShadowExpressions = [
    typeof personData["Onko hengitystie auki?"] === "boolean" &&
      typeof personData["Onko ilmatie estettä?"] === "boolean",
    personData["Hengitys - Normaali hengitys/ei ääniä"] ||
      personData["Hengitys - Vinkuna"] ||
      personData["Hengitys - Korina"] ||
      personData["Hengitys - Rohina"],
    (personData["Iho, paljastaminen - Normaali"] ||
      personData["Iho, paljastaminen - Kuiva"] ||
      personData["Iho, paljastaminen - Kostea"] ||
      personData["Iho, paljastaminen - Kylmä"] ||
      personData["Iho, paljastaminen - Kuuma"]) &&
      (personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ||
        personData.Iho),
    typeof personData["Tarkista syke:"] === "boolean" &&
      typeof personData["Tuntuuko paikallista lämpöeroa:"] === "boolean",
    personData["Tajunta - Ei poikkeavia löydöksiä."] || personData.Tajunta,
    personData["Hengitystaajuus"],
    personData["Happisaturaatio"],
    personData["Systolinen verenpaine"],
    personData["Syketaajuus"],
    personData["Mittaa lämpötila"],
    typeof personData["Tajunnan taso"] === "boolean",
    personData["Mittaa verensokeri:"]
  ];
  const progressBarShadowWidthInPercents = `${(100 / locations.length) *
    progressBarShadowExpressions.reduce(
      (trueCount, curr) => (!curr ? trueCount : trueCount + 1),
      0
    )}%`;

  if (~locationIndex) {
    return (
      <div className="ProgressBar">
        <div className="bar-background">
          <div
            style={{ width: progressBarShadowWidthInPercents }}
            className="bar-shadow-indicator"
          ></div>
          <div
            style={{ width: progressBarWidthInPercents }}
            className="bar-indicator"
          ></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ProgressBar;

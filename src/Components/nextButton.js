import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const NextButton = ({ personData, NEWSscoreTotal, careType, verensokeriscore }) => {
  const history = useHistory();
  const location = useLocation();
  const locations = [
    "/",
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
  const activeStateExpressions = [
    typeof personData["Onko hengitystie auki?"] === "boolean" &&
      typeof personData["Onko ilmatie-estettä?"] === "boolean",
    personData["Hengitys - Normaali hengitys / ei ääniä"] ||
      personData["Hengitys - Vinkuna"] ||
      personData["Hengitys - Korina"] ||
      personData["Hengitys - Raskas hengitys"] ||
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
  const nextPage = locations[locationIndex + 1];
  const buttonActive = locationIndex
    ? activeStateExpressions[locationIndex - 1]
    : true;
  const clickHandler = () => {
    if (buttonActive) {
      if (location.pathname === "/verensokeri") {
        if (NEWSscoreTotal === 0 && verensokeriscore === 0) {
          window.scrollTo(0, 0);
          history.push("/instructionPageTwo");
        } else {
          window.scrollTo(0, 0);
          history.push("/instructionPage");
        }
      } else {
        history.push(nextPage);
      }
    }
  };

  return (
    <div
      className="nextButtondiv"
      style={{
        transform: careType
          ? ~locationIndex
            ? "translateY(0)"
            : "translateY(20vh)"
          : "translateY(20vh",
        opacity: careType ? (~locationIndex ? 1 : 0) : 0
      }}
    >
      <button
        className={
          buttonActive
            ? "nextButtoninactive nextButtonactive"
            : "nextButtoninactive"
        }
        onClick={clickHandler}
      >
        {" "}
        Seuraava{" "}
      </button>
    </div>
  );
};

export default NextButton;

import React, { useRef } from "react";
import downArrow from "../Images/down-arrow.svg";

function InstructionCardFirst({
  testingdata,
  personData,
  setPersonData,
  ControlCardVisibility,
  setControlCardVisibility,
  NEWSscoreTotal,
  controlData,
  setcontrolData
}) {
  const instruction_content = {
    emergencyContent: (
      <>
        <span>Kontrolloi</span> seuraavat löydökset uudestaan noin 2-3 minuutin
        kuluttua.
      </>
    ),
    mediumEmergencyContent: (
      <>
        <span>Kontrolloi</span> seuraavat löydökset uudestaan noin 5 minuutin
        päästä ennen mahdollista konsultaatiota.
      </>
    ),
    noneEmergencyContent: (
      <>
        <span>Kontrolloi</span> nollan pisteen tilanne
      </>
    )
  };

  const chooseEmergencyContent = () => {
    if (NEWSscoreTotal === 0) {
      return instruction_content.noneEmergencyContent;
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      return instruction_content.mediumEmergencyContent;
    } else if (NEWSscoreTotal >= 4) {
      return instruction_content.emergencyContent;
    }
  };

  const ctrlBtnRef = useRef(null);

  return (
    <div className="InstructionCard-first-container">
      <h3>Toimintaohje:</h3>
      <p>{chooseEmergencyContent()}</p>
      <div className="unusual-findings-list">
        <p>
          {personData["Hengitystaajuus - NEWSscore"] >= 1
            ? "Hengitystaajuus"
            : null}
        </p>
        <p>
          {personData["Happisaturaatio - NEWSscore"] >= 1
            ? "Happisaturaatio"
            : null}
        </p>
        <p>
          {personData["Systolinen verenpaine - NEWSscore"] >= 1
            ? "Systolinen verenpaine"
            : null}
        </p>
        <p>
          {personData["Syketaajuus - NEWSscore"] >= 1 ? "Syketaajuus" : null}
        </p>
        <p>
          {personData["Mittaa lämpötila - NEWSscore"] >= 1 ? "Lämpötila" : null}
        </p>
      </div>
      <div
        onClick={() => {
          const elem = document.querySelector(".instruction-page-container");
          const y =
            ctrlBtnRef.current.getBoundingClientRect().top + elem.scrollTop;
          setTimeout(() => {
            try {
              elem.scrollTo({ top: y, behavior: "smooth" });
            } catch (err) {
              console.error(err);
              elem.scrollTop = y;
            }
          }, 250);

          console.log(personData);
          setcontrolData(personData);
          console.log(controlData);

          !ControlCardVisibility
            ? setControlCardVisibility(true)
            : setControlCardVisibility(false);
          console.log(ControlCardVisibility);
        }}
        className="control-btn"
        ref={ctrlBtnRef}
      >
        <p>Kontrolloi</p>
        <div className="downArrow">
          <img src={downArrow}></img>
        </div>
      </div>
    </div>
  );
}

export default InstructionCardFirst;

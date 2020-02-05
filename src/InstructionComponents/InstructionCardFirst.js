import React from "react";

function InstructionCardFirst({
  testingdata,
  personData,
  setPersonData,
  ControlCardVisibility,
  setControlCardVisibility
}) {
  const instruction_content = {
    emergencyContent: (
      <>
        <span>Kontrolloi</span> seuraavat löydökset uudestaan noin 2-3 minuutin.
      </>
    ),
    noneEmergencyContent: (
      <>
        <span>Kontrolloi</span> seuraavat löydökset uudestaan noin 5 minuutin
        päästä ennen mahdollista konsultaatiota.
      </>
    )
  };

  return (
    <div className="InstructionCard-first-container">
      <h3>Toimintaohje:</h3>
      <p>{instruction_content.noneEmergencyContent}</p>
      <div className="unusual-findings-list">
        <p>
          {personData["Hengitystaajuus - NEWSscore"] >= 1
            ? "→  Hengitystaajuus"
            : null}
        </p>
        <p>
          {personData["Happisaturaatio - NEWSscore"] >= 1
            ? "→  Happisaturaatio"
            : null}
        </p>
        <p>
          {personData["Systolinen verenpaine - NEWSscore"] >= 1
            ? "→  Systolinen verenpaine"
            : null}
        </p>
        <p>
          {personData["Syketaajuus - NEWSscore"] >= 1 ? "→  Syketaajuus" : null}
        </p>
        <p>
          {personData["Mittaa lämpötila - NEWSscore"] >= 1
            ? "→  Lämpötila"
            : null}
        </p>
      </div>
      <div
        onClick={() => {
          !ControlCardVisibility
            ? setControlCardVisibility(true)
            : setControlCardVisibility(false);
          console.log(ControlCardVisibility);
        }}
        className="control-btn"
      >
        Kontrolloi mittaus
      </div>
    </div>
  );
}

export default InstructionCardFirst;

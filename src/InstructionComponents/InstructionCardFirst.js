import React from "react";

function InstructionCardFirst({ testingdata, personData, setPersonData }) {
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
          {testingdata["Hengitystaajuus - NEWSscore"]
            ? "Hengitystaajuus"
            : null}
        </p>
        <p>
          {testingdata["Happisaturaatio - NEWSscore"]
            ? "Happisaturaatio"
            : null}
        </p>
        <p>
          {testingdata["Systolinen verenpaine - NEWSscore"]
            ? "Systolinen verenpaine"
            : null}
        </p>
        <p>{testingdata["Syketaajuus - NEWSscore"] ? "Syketaajuus" : null}</p>
        <p>
          {testingdata["Mittaa lämpötila - NEWSscore"]
            ? "Mittaa lämpötila"
            : null}
        </p>
      </div>
      <div className="control-btn">Kontrolloi mittaus</div>
    </div>
  );
}

export default InstructionCardFirst;

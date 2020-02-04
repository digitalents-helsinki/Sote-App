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
          {testingdata["Hengitystaajuus - NEWSscore"] !== 0 ? (
            <>&rarr; Hengitystaajuus</>
          ) : null}
        </p>
        <p>
          {testingdata["Happisaturaatio - NEWSscore"] !== 0 ? (
            <>&rarr; Happisaturaatio</>
          ) : null}
        </p>
        <p>
          {testingdata["Systolinen verenpaine - NEWSscore"] !== 0 ? (
            <>&rarr; Systolinen verenpaine</>
          ) : null}
        </p>
        <p>
          {testingdata["Syketaajuus - NEWSscore"] !== 0 ? (
            <>&rarr; Syketaajuus</>
          ) : null}
        </p>
        <p>
          {testingdata["Mittaa lämpötila - NEWSscore"] !== 0 ? (
            <>&rarr; Lämpötila</>
          ) : null}
        </p>
      </div>
      <div className="control-btn">Kontrolloi mittaus</div>
    </div>
  );
}

export default InstructionCardFirst;

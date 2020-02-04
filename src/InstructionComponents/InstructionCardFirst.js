import React from "react";

function InstructionCardFirst() {
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
        <p>&rarr; Poop</p>
        <p>&rarr; Poop</p>
        <p>&rarr; Poop</p>
        <p>&rarr; Poop</p>
        <p>&rarr; Poop</p>
      </div>
      <div className="control-btn">Kontrolloi mittaus</div>
    </div>
  );
}

export default InstructionCardFirst;

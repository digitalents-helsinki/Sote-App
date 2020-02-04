import React, { useState } from "react";

function ControlledScoreCard() {
  // If the RISK LEVEL stayed the same after control, render PYSYI SAMANA. If the not render MUUTTUI
  const newRiskLevel = {
    stayedSame: " PYSYI SAMANA",
    changed: " MUUTTUI"
  };

  return (
    <div className="controlled-scoreCard-container">
      <h3>{"RISKILUOKKA" + newRiskLevel.stayedSame}</h3>
      <p>{"Kontrolloidut NEWS-pisteet:" + " 2p."}</p>
      <h3>{"KONTROLLOITU RISKILUOKKA:" + " KOHTALAINEN RISKI"}</h3>
    </div>
  );
}

export default ControlledScoreCard;

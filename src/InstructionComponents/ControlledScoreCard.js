import React, { useState } from "react";

function ControlledScoreCard() {
  const riskLevel = {};

  return (
    <div className="controlled-scoreCard-container">
      <p>{"Kontrolloidut NEWS-pisteet:" + " 2p."}</p>
      <h3>{"KONTROLLOITU RISKILUOKKA:" + " KOHTALAINEN RISKI"}</h3>
    </div>
  );
}

export default ControlledScoreCard;

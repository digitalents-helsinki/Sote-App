import React, { useState, useEffect } from "react";

function ControlledScoreCard({ NEWSscoreTotal, personData }) {
  // If the RISK LEVEL stayed the same after control, render PYSYI SAMANA. If the not render MUUTTUI
  const newRiskLevel = {
    stayedSame: " PYSYI SAMANA",
    changed: " MUUTTUI"
  };
  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);

  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "#377d4f"
      });
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      setCardText("kohtalainen riski");
      setCardStyle({
        backgroundColor: "#284e78"
      });
    } else if (
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4
    ) {
      setCardText("Korkea riski");
      setCardStyle({
        backgroundColor: "#ab2615"
      });
    }
  }, [NEWSscoreTotal, personData]);
  return (
    <div
      style={cardStyle}
      className={
        "controlled-scoreCard-container" +
        (controlled - scoreCardVisibility ? " active" : "")
      }
    >
      <h3>RISKILUOKKA: {cardText}</h3>
      <p>Kontrolloidut NEWS-pisteet: {NEWSscoreTotal}p.</p>
      <h3>{"KONTROLLOITU RISKILUOKKA: " + cardText}</h3>
    </div>
  );
}

export default ControlledScoreCard;

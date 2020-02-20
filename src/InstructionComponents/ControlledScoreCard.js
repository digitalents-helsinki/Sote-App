import React, { useState, useEffect } from "react";

function ControlledScoreCard({
  NEWSscoreTotal,
  personData,
  ControlRiskCardVisibility,
  controlData,
  ControlNEWSscoreTotal
}) {
  const controlData_RiskLevel = () => {
    if (ControlNEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      controlData["Tajunnan taso"] === false ||
      controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      ControlNEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (ControlNEWSscoreTotal >= 1 && ControlNEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);

  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "#377d4f"
      });
    } else if (
      personData["Tajunnan taso"] === false ||
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
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      setCardText("Kohtalainen riski");
      setCardStyle({
        backgroundColor: "#284e78"
      });
    }
  }, [NEWSscoreTotal, personData]);

  return (
    <div
      style={cardStyle}
      className={
        "controlled-scoreCard-container" +
        (ControlRiskCardVisibility ? " active" : "")
      }
    >
      {NEWSscoreTotal !== 0 && (
        <h3>
          Riskiluokka{" "}
          {cardText === controlData_RiskLevel() ? "pysyi samana." : "muuttui."}
        </h3>
      )}
      <p>Kontrolloidut NEWS-pisteet: {NEWSscoreTotal}p.</p>
      <h3>{"KONTROLLOITU RISKILUOKKA: " + cardText}</h3>
    </div>
  );
}
export default ControlledScoreCard;

import React, { useState, useEffect } from "react";

function ControlledScoreCard({
  NEWSscoreTotal,
  personData,
  ControlRiskCardVisibility,
  controlData
}) {
  const controlData_RiskLevel = () => {
    if (controlData === 0) {
      return "Lievä riski";
    } else if (controlData >= 1 && controlData <= 3) {
      return "Kohtalainen riski";
    } else if (
      controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      controlData >= 4
    ) {
      return "Korkea riski";
    }
  };

  console.log(controlData);

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
        (ControlRiskCardVisibility ? " active" : "")
      }
    >
      <h3>
        Riskiluokka{" "}
        {cardText === controlData_RiskLevel() ? "pysyi samana." : "muuttui."}
      </h3>
      <p>Kontrolloidut NEWS-pisteet: {NEWSscoreTotal}p.</p>
      <h3>{"KONTROLLOITU RISKILUOKKA: " + cardText}</h3>
    </div>
  );
}
export default ControlledScoreCard;

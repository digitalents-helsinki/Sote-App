import React, { useState, useEffect } from "react";

function ControlledScoreCard({
  NEWSscoreTotal,
  personData,
  ControlRiskCardVisibility,
  controlData
}) {
  const controlData_RiskLevel = () => {
    console.log(NEWSscoreTotal);
    if (NEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
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
  console.log("cardtext", cardText);
  console.log("controlData_RiskLevel", controlData_RiskLevel());

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

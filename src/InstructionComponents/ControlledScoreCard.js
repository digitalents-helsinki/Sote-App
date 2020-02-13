import React, { useState, useEffect } from "react";

function ControlledScoreCard({
  NEWSscoreTotal,
  personData,
  ControlRiskCardVisibility,
  controlData
}) {
  const controlData_RiskLevel = () => {
    if (personData === 0) {
      console.log("Lievä riski");
      return "Lievä riski";
    } else if (
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      personData >= 4
    ) {
      return "Korkea riski";
    } else if (personData >= 1 && personData <= 3) {
      console.log("Lievä riski");
      return "Kohtalainen riski";
    }
  };

  console.log("ControlData", controlData);
  console.log("PersonData", personData);

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
      setCardText("kohtalainen riski");
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

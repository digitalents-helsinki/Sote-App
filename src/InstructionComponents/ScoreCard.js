import React, { useState, useEffect } from "react";

function ScoreCard({ NEWSscoreTotal, personData }) {
  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);
  const [riskLevel, setRiskLevel] = useState(0);

  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      setRiskLevel(0);
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "#377d4f"
      });
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      setRiskLevel(NEWSscoreTotal);
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
      setRiskLevel(NEWSscoreTotal);
      setCardText("Korkea riski");
      setCardStyle({
        backgroundColor: "#ad3e2f"
      });
    }
  }, [riskLevel, NEWSscoreTotal]);

  return (
    <div style={cardStyle} className="scoreCard-container">
      <p>NEWS-pisteitä yhteensä {riskLevel}p.</p>
      <h3>RISKILUOKKA: {cardText}</h3>
    </div>
  );
}

export default ScoreCard;

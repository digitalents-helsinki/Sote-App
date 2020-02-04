import React, { useState, useEffect } from "react";

function ScoreCard({ NEWSscoreTotal }) {
  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);
  const [riskLevel, setRiskLevel] = useState(0);

  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      setRiskLevel(0);
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "green"
      });
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      setRiskLevel(NEWSscoreTotal);
      setCardText("kohtalainen riski");
      setCardStyle({
        backgroundColor: "blue"
      });
    } else if (NEWSscoreTotal >= 3) {
      setRiskLevel(NEWSscoreTotal);
      setCardText("Korkea riski");
      setCardStyle({
        backgroundColor: "red"
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

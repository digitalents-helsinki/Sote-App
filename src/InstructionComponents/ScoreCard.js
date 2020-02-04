import React, { useState, useEffect } from "react";

function ScoreCard({ NEWSscoreTotal }) {
  const [cardStyle, setCardStyle] = useState(null);
  const [cardText, setCardText] = useState(null);

  let riskLevel;
  useEffect(() => {
    if (NEWSscoreTotal === 0) {
      riskLevel = 1;
      setCardText("Lievä riski");
      setCardStyle({
        backgroundColor: "green"
      });
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      riskLevel = 2;
      setCardText("kohtalainen riski");
      setCardStyle({
        backgroundColor: "blue"
      });
    } else if (NEWSscoreTotal >= 3) {
      riskLevel = 3;
      setCardText("Korkea riski");
      setCardStyle({
        backgroundColor: "red"
      });
    }
  }, [riskLevel]);

  return (
    <div style={cardStyle} className="scoreCard-container">
      <p>NEWS-pisteitä yhteensä {riskLevel}p.</p>
      <h3>RISKILUOKKA: {cardText}</h3>
    </div>
  );
}

export default ScoreCard;

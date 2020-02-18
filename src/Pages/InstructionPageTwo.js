import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import Report from "../InstructionComponents/Report";

function InstructionPage({ personData, controlData }) {
  const NEWSscoreTotal =
    personData["Hengitystaajuus - NEWSscore"] +
    personData["Happisaturaatio - NEWSscore"] +
    personData["Systolinen verenpaine - NEWSscore"] +
    personData["Syketaajuus - NEWSscore"] +
    personData["Mittaa lämpötila - NEWSscore"];

  return (
    <div className="instruction-page-container slidable">
      <div className="instruction-page">
        <ControlledScoreCard
          NEWSscoreTotal={NEWSscoreTotal}
          personData={personData}
          controlData={controlData}
        />
        <InstructionCardSecond
          NEWSscoreTotal={NEWSscoreTotal}
          personData={personData}
          controlData={controlData}
        />
        <Report personData={personData} />
      </div>
    </div>
  );
}

export default InstructionPage;

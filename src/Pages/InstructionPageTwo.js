import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import Report from "../InstructionComponents/Report";

function InstructionPage({ personData, controlData }) {
  const NEWSscoreTotal =
    (personData["Tajunnan taso"] === false ? 3 : 0) +
    personData["Hengitystaajuus - NEWSscore"] +
    personData["Happisaturaatio - NEWSscore"] +
    personData["Systolinen verenpaine - NEWSscore"] +
    personData["Syketaajuus - NEWSscore"] +
    personData["Mittaa lämpötila - NEWSscore"];
  console.log(NEWSscoreTotal);
  const ControlNEWSscoreTotal =
    (controlData["Tajunnan taso"] === false ? 3 : 0) +
    controlData["Hengitystaajuus - NEWSscore"] +
    controlData["Happisaturaatio - NEWSscore"] +
    controlData["Systolinen verenpaine - NEWSscore"] +
    controlData["Syketaajuus - NEWSscore"] +
    controlData["Mittaa lämpötila - NEWSscore"];

  return (
    <div className="instruction-page-container slidable">
      <div className="instruction-page">
        <ControlledScoreCard
          NEWSscoreTotal={NEWSscoreTotal}
          personData={personData}
          controlData={controlData}
          ControlNEWSscoreTotal={ControlNEWSscoreTotal}
        />
        <InstructionCardSecond
          NEWSscoreTotal={NEWSscoreTotal}
          personData={personData}
          controlData={controlData}
          ControlNEWSscoreTotal={ControlNEWSscoreTotal}
        />
        <Report personData={personData} />
      </div>
    </div>
  );
}

export default InstructionPage;

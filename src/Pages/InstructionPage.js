import React, { useState } from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import InstructionNewsComponent from "../InstructionComponents/InstructionNewsComponent";

function InstructionPage({
  personData,
  setPersonData,
  history,
  controlData,
  setcontrolData,
  NEWSscoreTotal,
  ControlNEWSscoreTotal
}) {
  const [ControlCardVisibility, setControlCardVisibility] = useState(false);
  const [ControlRiskCardVisibility, setControlRiskCardVisibility] = useState(
    false
  );

  return (
    <div className="instruction-page-container slidable">
      <div className="instruction-page">
        <ScoreCard
          NEWSscoreTotal={NEWSscoreTotal}
          personData={personData}
          ControlNEWSscoreTotal={ControlNEWSscoreTotal}
        />
        <InstructionCardFirst
          personData={personData}
          setPersonData={setPersonData}
          ControlCardVisibility={ControlCardVisibility}
          setControlCardVisibility={setControlCardVisibility}
          NEWSscoreTotal={NEWSscoreTotal}
          controlData={controlData}
          setcontrolData={setcontrolData}
        />
        <InstructionNewsComponent
          history={history}
          personData={personData}
          setPersonData={setPersonData}
          ControlCardVisibility={ControlCardVisibility}
          controlData={controlData}
          setcontrolData={setcontrolData}
          ControlRiskCardVisibility={ControlRiskCardVisibility}
          setControlRiskCardVisibility={setControlRiskCardVisibility}
        />
      </div>
    </div>
  );
}

export default InstructionPage;

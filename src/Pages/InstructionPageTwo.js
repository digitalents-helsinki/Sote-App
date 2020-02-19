import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import Report from "../InstructionComponents/Report";

function InstructionPageTwo({
  personData,
  controlData,
  NEWSscoreTotal,
  ControlNEWSscoreTotal
}) {
  console.log(NEWSscoreTotal);

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

export default InstructionPageTwo;

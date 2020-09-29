import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import ControlReport from "../InstructionComponents/ControlReport";
import FirstReport from "../InstructionComponents/FirstReport";

function InstructionPageTwo({
  personData,
  controlData,
  NEWSscoreTotal,
  ControlNEWSscoreTotal,
  careType
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
          careType={careType}
        />
        <FirstReport personData={personData} controlData={controlData} />
        <ControlReport personData={personData} />
      </div>
    </div>
  );
}

export default InstructionPageTwo;

import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import ControlReport from "../InstructionComponents/ControlReport";

function InstructionPageTwo({
  personData,
  controlData,
  NEWSscoreTotal,
  ControlNEWSscoreTotal,
  careType,
  setEmergencyVisibility
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
          setEmergencyVisibility={setEmergencyVisibility}
        />

        <ControlReport personData={personData} controlData={controlData} />
      </div>
    </div>
  );
}

export default InstructionPageTwo;

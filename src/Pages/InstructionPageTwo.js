import React from "react";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import Report from "../InstructionComponents/Report";
import Report2 from "../InstructionComponents/Report2";


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
        <Report personData={personData} />
        <Report2 
          personData={personData}
          controlData={controlData} />
      </div>
    </div>
  );
}

export default InstructionPageTwo;

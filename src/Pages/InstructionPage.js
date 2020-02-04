import React from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";

function InstructionPage() {
  return (
    <div className="instruction-page">
      <ScoreCard />
      <InstructionCardFirst />
      <ControlledScoreCard />
    </div>
  );
}

export default InstructionPage;

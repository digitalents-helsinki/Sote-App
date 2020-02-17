import React, { useState } from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import InstructionNewsComponent from "../InstructionComponents/InstructionNewsComponent";
import Report from "../InstructionComponents/Report";
import checkmark from "../Images/checkmark.svg";

function InstructionPage({
  personData,
  setPersonData,
  history,
  controlData,
  setcontrolData,
  NEWSscoreTotal
}) {
  const [ControlCardVisibility, setControlCardVisibility] = useState(false);
  const [ControlRiskCardVisibility, setControlRiskCardVisibility] = useState(
    false
  );

  console.log(NEWSscoreTotal);

  // console.log(testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Syketaajuus - NEWSscore"], testingdata["Mittaa lämpötila - NEWSscore"])
  // console.log(NEWSscoreTotal, "beep");

  return (
    <div className="instruction-page">
      <ScoreCard NEWSscoreTotal={NEWSscoreTotal} personData={personData} />
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
  );
}

// function InstructionPage({ history, personData, setPersonData }) {

//   return (
//     <div className="instruction-page">
//       <p>{testingdata["Onko hengitystie auki?"] ? "Kyllä" : "Ei"}</p>
//       <p>{testingdata["Onko ilmatie estettä?"] ? "Kyllä" : "Ei"}</p>
//       <hr></hr>
//       <h5>Hengitys</h5>
//       <p>
//         {testingdata["Hengitys - Normaali hengitys/ei ääniä"] ? "Kyllä" : null}
//       </p>
//       <p>{testingdata["Onko ilmatie estettä?"] ? "Kyllä" : "Ei"}</p>
//     </div>
//   );
// }
export default InstructionPage;

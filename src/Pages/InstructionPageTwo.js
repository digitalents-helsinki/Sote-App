import React, { useState } from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import InstructionNewsComponent from "../InstructionComponents/InstructionNewsComponent";
import Report from "../InstructionComponents/Report";

function InstructionPage({ personData, setPersonData, history }) {
  const [ControlCardVisibility, setControlCardVisibility] = useState(false);
  const [ControlRiskCardVisibility, setControlRiskCardVisibility] = useState(
    false
  );
  const [controlData, setcontrolData] = useState({});

  const NEWSscoreTotal =
    personData["Hengitystaajuus - NEWSscore"] +
    personData["Happisaturaatio - NEWSscore"] +
    personData["Systolinen verenpaine - NEWSscore"] +
    personData["Syketaajuus - NEWSscore"] +
    personData["Mittaa lämpötila - NEWSscore"];
  console.log(NEWSscoreTotal);

  // console.log(testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Syketaajuus - NEWSscore"], testingdata["Mittaa lämpötila - NEWSscore"])
  // console.log(NEWSscoreTotal, "beep");

  return (
    <div className="instruction-page">
      <ControlledScoreCard
        NEWSscoreTotal={NEWSscoreTotal}
        personData={personData}
        ControlRiskCardVisibility={ControlRiskCardVisibility}
      />
      <InstructionCardSecond NEWSscoreTotal={NEWSscoreTotal} />
      <Report personData={personData} />
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

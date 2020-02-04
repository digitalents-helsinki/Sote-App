import React, { useState } from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import InstructionCardSecond from "../InstructionComponents/InstructionCardSecond";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import InstructionNewsComponent from "../InstructionComponents/InstructionNewsComponent";
import Report from "../InstructionComponents/Report";

function InstructionPage({ history, personData, setPersonData }) {
  const [controlNEWSscore, setcontrolNEWSscore] = useState(null);
  console.log(personData);
  let NEWSscoreTotal;

  if (
    personData["Hengitystaajuus - NEWSscore"] === 3 ||
    personData["Happisaturaatio - NEWSscore"] === 3 ||
    personData["Systolinen verenpaine - NEWSscore"] === 3 ||
    personData["Syketaajuus - NEWSscore"] === 3 ||
    personData["Mittaa lämpötila - NEWSscore"] === 3
  ) {
    NEWSscoreTotal = 4;
  } else {
    NEWSscoreTotal =
      personData["Hengitystaajuus - NEWSscore"] +
      personData["Happisaturaatio - NEWSscore"] +
      personData["Systolinen verenpaine - NEWSscore"] +
      personData["Syketaajuus - NEWSscore"] +
      personData["Mittaa lämpötila - NEWSscore"];
  }
  console.log(NEWSscoreTotal);
  // console.log(testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Syketaajuus - NEWSscore"], testingdata["Mittaa lämpötila - NEWSscore"])
  // console.log(NEWSscoreTotal, "beep");

  return (
    <div className="instruction-page">
      <ScoreCard NEWSscoreTotal={NEWSscoreTotal} />
      <InstructionCardFirst
        personData={personData}
        setPersonData={setPersonData}
      />
      <InstructionNewsComponent
        personData={personData}
        controlNEWSscore={controlNEWSscore}
        setcontrolNEWSscore={setcontrolNEWSscore}
      />
      <ControlledScoreCard />
      <InstructionCardSecond />
      <Report />
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

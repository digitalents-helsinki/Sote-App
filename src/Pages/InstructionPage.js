import React from "react";
import ScoreCard from "../InstructionComponents/ScoreCard";
import InstructionCardFirst from "../InstructionComponents/InstructionCardFirst";
import ControlledScoreCard from "../InstructionComponents/ControlledScoreCard";
import InstructionNewsComponent from "../InstructionComponents/InstructionNewsComponent";

let testingdata = {
  "Onko hengitystie auki?": true,
  "Onko ilmatie estettä?": false,
  "Hengitys - Normaali hengitys/ei ääniä": true,
  "Hengitys - Vinkuna": true,
  "Hengitys - Korina": true,
  "Hengitys - Rohina": true,
  "Iho, paljastaminen - Normaali": true,
  "Iho, paljastaminen - Kuiva": true,
  "Iho, paljastaminen - Kostea": true,
  "Iho, paljastaminen - Kylmä": true,
  "Iho, paljastaminen - Kuuma": true,
  "Iho, paljastaminen - Ei poikkeavia löydöksiä": true,
  Iho: "Testing",
  "Tuntuuko paikallista lämpöeroa:": false,
  "Tarkista syke:": true,
  "Tajunta - Ei poikkeavia löydöksiä.": true,
  Tajunta: "Testing",
  Hengitystaajuus: 15,
  "Hengitystaajuus - NEWSscore": 0,
  Happisaturaatio: 95,
  "Happisaturaatio - NEWSscore": 0,
  "Systolinen verenpaine": 150,
  "Systolinen verenpaine - NEWSscore": 0,
  Syketaajuus: 60,
  "Syketaajuus - NEWSscore": 3,
  "Mittaa lämpötila": 37,
  "Mittaa lämpötila - NEWSscore": 0,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 10
};

function InstructionPage() {
  let NEWSscoreTotal;

  if (
    testingdata["Hengitystaajuus - NEWSscore"] === 3 ||
    testingdata["Happisaturaatio - NEWSscore"] === 3 ||
    testingdata["Systolinen verenpaine - NEWSscore"] === 3 ||
    testingdata["Syketaajuus - NEWSscore"] === 3 ||
    testingdata["Mittaa lämpötila - NEWSscore"] === 3
  ) {
    NEWSscoreTotal = 4;
  } else {
    NEWSscoreTotal =
      testingdata["Hengitystaajuus - NEWSscore"] +
      testingdata["Happisaturaatio - NEWSscore"] +
      testingdata["Systolinen verenpaine - NEWSscore"] +
      testingdata["Syketaajuus - NEWSscore"] +
      testingdata["Mittaa lämpötila - NEWSscore"];
  }
  // console.log(testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Hengitystaajuus - NEWSscore"], testingdata["Syketaajuus - NEWSscore"], testingdata["Mittaa lämpötila - NEWSscore"])
  // console.log(NEWSscoreTotal, "beep");

  return (
    <div className="instruction-page">
      <ScoreCard NEWSscoreTotal={NEWSscoreTotal} />
      <InstructionCardFirst />
      <InstructionNewsComponent />
      <ControlledScoreCard />
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

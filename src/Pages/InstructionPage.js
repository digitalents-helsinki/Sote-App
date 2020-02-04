import React from "react";
import TopArea from "../Components/TopArea";

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
  "Hengitystaajuus - NEWSscore": 3,
  Happisaturaatio: 95,
  "Happisaturaatio - NEWSscore": 1,
  "Systolinen verenpaine": 150,
  "Systolinen verenpaine - NEWSscore": 0,
  Syketaajuus: 60,
  "Syketaajuus - NEWSscore": 0,
  "Mittaa lämpötila": 37,
  "Mittaa lämpötila - NEWSscore": 0,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 10
};

function InstructionPage({ history, personData, setPersonData }) {
  let NEWSscoreTotal =
    testingdata["Hengitystaajuus - NEWSscore"] +
    testingdata["Happisaturaatio - NEWSscore"] +
    testingdata["Systolinen verenpaine - NEWSscore"] +
    testingdata["Mittaa lämpötila - NEWSscore"] +
    testingdata["Mittaa verensokeri: - NEWSscore"];

  console.log(NEWSscoreTotal, "beep");

  return (
    <div className="instruction-page">
      <p>{testingdata["Onko hengitystie auki?"] ? "Kyllä" : "Ei"}</p>
      <p>{testingdata["Onko ilmatie estettä?"] ? "Kyllä" : "Ei"}</p>
      <hr></hr>
      <h5>Hengitys</h5>
      <p>
        {testingdata["Hengitys - Normaali hengitys/ei ääniä"] ? "Kyllä" : null}
      </p>
      <p>{testingdata["Onko ilmatie estettä?"] ? "Kyllä" : "Ei"}</p>
    </div>
  );
}

export default InstructionPage;

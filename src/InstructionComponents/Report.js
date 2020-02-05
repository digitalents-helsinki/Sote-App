import React from "react";

function Report({ personData }) {
  return (
    <div className="report-container">
      <h2>Raportti:</h2>

      <div className="reportElement">
        <h3>Hengitystie:</h3>
        <div className="flex">
          <p className="subject">{"Onko hengitystie auki?"}</p>
          <p className="answer">
            {personData["Onko hengitystie auki?"] ? "Kyllä" : "Ei"}
          </p>
        </div>
        <div className="flex">
          <p className="subject">{"Onko ilmatie estettä?"}</p>
          <p className="answer">
            {personData["Onko ilmatie estettä?"] ? "Kyllä" : "Ei"}
          </p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Hengitys:</h3>
        <div className="flex">
          <p className="subject">{"Korvin kuultavat äänet?"}</p>
          <p className="answer">
            {personData["Hengitys - Normaali hengitys/ei ääniä"]
              ? "Normaali"
              : null}
            {personData["Hengitys - Vinkuna"] ? "Vinkuna" : null}
            {personData["Hengitys - Korina"] ? "Korina" : null}
            {personData["Hengitys - Rohina"] ? "Rohina" : null}}
          </p>
        </div>
      </div>

      <div className="reportElement">
        <h3>Verenkierto:</h3>
        <div className="flex">
          <p className="subject">{"Syke"}</p>
          <p className="answer">
            {personData["Hengitys - Rohina"] ? "Kyllä" : "Ei"}
          </p>
        </div>
        <div className="flex">
          <p className="subject">{"Tuntuuko paikallista lämpöeroa?"}</p>
          <p className="answer">
            {personData["Tuntuuko paikallista lämpöeroa:"] ? "Kyllä" : "Ei"}
          </p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Tajunta:</h3>
        <div className="flex">
          <p className="subject">{"Ei poikkeavia löydöksiä"}</p>
          <p className="answer">
            {personData["Tuntuuko paikallista lämpöeroa:"]
              ? "Ei poikkeavia löydöksiä."
              : null}
          </p>
          <p className="answer">
            {personData.Tajunta ? personData.Tajunta : null}
          </p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Iho, paljastaminen:</h3>
        <div className="flex">
          <p className="subject">{"Miltä iho tuntuu?"}</p>
          <p className="answer">
            {personData["Iho, paljastaminen - Normaali"] ? "Normaali" : null}
            {personData["Iho, paljastaminen - Kuiva"] ? "Vinkuna" : null}
            {personData["Iho, paljastaminen - Kostea"] ? "Korina" : null}
            {personData["Iho, paljastaminen - Kylmä"] ? "Rohina" : null}
            {personData["Iho, paljastaminen - Kuuma"] ? "Rohina" : null}
          </p>
        </div>
        <div className="flex">
          <p className="subject">{"Onko iho muutoksia?"}</p>
          <p className="answer">{personData.Iho ? personData.Iho : null}</p>
        </div>
      </div>

      <hr />

      <div className="vitalValues">
        <h3>Vitaali-arvot:</h3>
        <div className="flex">
          <p className="vital-subject">{"hengitystaajuus:"}</p>
          <p className="vital-answer">{personData.Hengitystaajuus}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Happisaturaatio:"}</p>
          <p className="vital-answer">{personData.Happisaturaatio}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Systolinen verenpaine:"}</p>
          <p className="vital-answer">{personData["Systolinen verenpaine"]}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Syketaajuus:"}</p>
          <p className="vital-answer">{personData.Syketaajuus}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Tajunnan taso:"}</p>
          <p className="vital-answer">
            {personData["Tajunnan taso"] ? "Kyllä" : "Ei"}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Lämpötila:"}</p>
          <p className="vital-answer">{personData["Mittaa lämpötila"]}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Verensokeri:"}</p>
          <p className="vital-answer">{personData["Mittaa verensokeri:"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Report;

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
          <div className="answer">
            <p>
              {personData["Hengitys - Normaali hengitys/ei ääniä"]
                ? "Normaali"
                : null}
            </p>
            <p>{personData["Hengitys - Vinkuna"] ? "Vinkuna" : null}</p>
            <p>{personData["Hengitys - Korina"] ? "Korina" : null}</p>
            <p>{personData["Hengitys - Rohina"] ? "Rohina" : null}</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Verenkierto:</h3>
        <div className="flex">
          <p className="subject">{"Syke"}</p>
          <p className="answer">
            {personData["Tarkista syke:"] ? "Säännöllinen" : "Epäsäännöllinen"}
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
          <p style={{ width: "100%" }} className="answer">
            {personData["Tajunta - Ei poikkeavia löydöksiä."]
              ? "Ei poikkeavia löydöksiä."
              : personData.Tajunta}
          </p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Iho, paljastaminen:</h3>
        <div className="flex">
          <p className="subject">{"Miltä iho tuntuu?"}</p>
          <div className="answer">
            <p>
              {personData["Iho, paljastaminen - Normaali"] ? "Normaali" : null}
            </p>
            <p>{personData["Iho, paljastaminen - Kuiva"] ? "Kuiva" : null}</p>
            <p>{personData["Iho, paljastaminen - Kostea"] ? "Kostea" : null}</p>
            <p>{personData["Iho, paljastaminen - Kylmä"] ? "Kylmä" : null}</p>
            <p>{personData["Iho, paljastaminen - Kuuma"] ? "Kuuma" : null}</p>
          </div>
        </div>
        <div className="flex">
          <p className="subject">Onko iho muutoksia?</p>
          <p className="answer">
            {personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"]
              ? "Kyllä"
              : "Ei"}
          </p>
        </div>
        {personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ? (
          <p
            style={{
              fontWeight: "200",
              fontSize: "0.9rem",
              lineHeight: "1.6rem"
            }}
            className="answer"
          >
            {personData.Iho}
          </p>
        ) : null}
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

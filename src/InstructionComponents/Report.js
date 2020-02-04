import React from "react";

function Report() {
  return (
    <div className="report-container">
      <h2>Raportti:</h2>

      <div className="reportElement">
        <h3>Hengitystie:</h3>
        <div className="flex">
          <p className="subject">{"Onko hengitystie auki?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="subject">{"Onko ilmatie estettä?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Hengitys:</h3>
        <div className="flex">
          <p className="subject">{"Korvin kuultavat äänet?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
      </div>

      <div className="reportElement">
        <h3>Verenkierto:</h3>
        <div className="flex">
          <p className="subject">{"Syke"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="subject">{"Tuntuuko paikallista lämpöeroa?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Tajunta:</h3>
        <div className="flex">
          <p className="subject">{"Ei poikkeavia löydöksiä"}</p>
          <p className="answer">{"" /*The answer*/}</p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Iho, paljastaminen:</h3>
        <div className="flex">
          <p className="subject">{"Miltä iho tuntuu?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="subject">{"Onko iho muutoksia?"}</p>
          <p className="answer">{"hollaa" /*The answer*/}</p>
        </div>
      </div>

      <hr />

      <div className="vitalValues">
        <h3>Vitaali-arvot:</h3>
        <div className="flex">
          <p className="vital-subject">{"hengitystaajuus:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Happisaturaatio:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Systolinen verenpaine:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Syketaajuus:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Tajunnan taso:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Lämpötila:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Verensokeri:"}</p>
          <p className="vital-answer">{"0" /*The answer*/}</p>
        </div>
      </div>
    </div>
  );
}

export default Report;

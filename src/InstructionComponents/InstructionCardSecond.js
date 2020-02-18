import React from "react";

function InstructionCardSecond({ NEWSscoreTotal, personData, controlData }) {
  const singleHighRiskEval = () => {
    if (
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3
    ) {
      return true;
    }
  };

  /*const Check_HighRisk_to_LowRisk = () => {
    if (
      (controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4) && 
    ) {
      return true
    }
  }*/

  //RISKILUOKKA: KORKEA RISKI
  if (NEWSscoreTotal >= 4 || singleHighRiskEval()) {
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {singleHighRiskEval() && (
          <p style={{ color: "#ab2615" }}>
            *Koska yksittäisestä mittauksesta tuli korkean riskiluokan arvio.
          </p>
        )}
        {true && (
          <p style={{ color: "#ab2615" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        <p>
          &rarr; <span>Soita 112.</span>
        </p>
        <p style={{ fontWeight: "600" }}>
          Muistathan tarkastaa mahdolliset hoidonrajaukset/-linjaukset ennen 112
          soittoa.
        </p>
        <p>Tarvittaessa mittaa uudestaan vitaalit ambulanssia odottaessa.</p>
      </div>
    );
  } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
    //RISKILUOKKA: KOHTALAINEN RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi <span>välittömästi</span> oma SH/lääkäri.
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            SH konsultoi omaa lääkäriä tai tekee arviokäynnin tarkastaakseen
            tilanteen saman päivän/seuraavan päivän aikana.
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Jos konsultoit lääkäriä suoraan, hän ohjeistaa tilanteessa.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Jos oma SH ei paikalla voit konsultoida oman alueesi
            päivystyspoliklinikan vuorovastaavaa tai{" "}
            <span>
              virka-ajan ulkopuolista lääkäriä ISBAR-raportointiohjeen mukaan.
            </span>
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Odota ohjetta.
          </p>
        </div>
      </div>
    );
  } else {
    //RISKILUOKKA: LIEVÄ RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön SH tai hoitavaa lääkäriä.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön sh, jos paikalle tai suoraan{" "}
            <span>geriatrista lääkäriä</span> (kts. erillinen konsultointiohje).
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Odota ohjetta.
          </p>
        </div>
      </div>
    );
  }
}

export default InstructionCardSecond;

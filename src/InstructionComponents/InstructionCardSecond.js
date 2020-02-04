import React from "react";

function InstructionCardSecond() {
  if (/*if Risk level high*/ false) {
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <p>
          &rarr; <span>Soita 112.</span>
        </p>
        <p>Tarvittaessa mittaa uudestaan vitaalit ambulanssia odottaessa.</p>
      </div>
    );
  } else if (/*if risk level medium*/ false) {
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <p>
          <span>Virka-aikana</span> konsultoi <span>välittömästi</span> oma
          SH/lääkäri.
        </p>
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
        <p>
          <span>Virka-ajan ulkopuolella,</span> jos oma SH ei paikalla voit
          konsultoida oman alueesi päivystyspoliklinikan vuorovastaavaa tai{" "}
          <span>
            virka-ajan ulkopuolista lääkäriä ISBAR-raportointiohjeen mukaan.
          </span>
        </p>
        <p>Odota ohjetta.</p>
      </div>
    );
  } /*if risk level low*/ else {
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <p>
          <span>Virka-aikana:</span> konsultoi oman yksikön SH tai hoitavaa
          lääkäriä.
        </p>
        <p>
          <span>Virka-ajan ulkopuolella:</span> konsultoi oman yksikön sh, jos
          paikalle tai suoraan <span>geriatrista lääkäriä</span> (kts. erillinen
          konsultointiohje).
        </p>
        <p>Odota ohjetta.</p>
      </div>
    );
  }
}

export default InstructionCardSecond;

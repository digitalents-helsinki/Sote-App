import React from "react";

function InstructionCardSecond({
  NEWSscoreTotal,
  personData,
  controlData,
  ControlNEWSscoreTotal,
  careType
}) {
  //INSTRUCTIONS FOR DIFFERENT RISK TYPES

  const highRiskInstructions = {
    Kotihoito: (
      <>
        <p>
          &rarr; <span>Soita 112.</span>
        </p>
        <p style={{ fontWeight: "600" }}>
          Muistathan tarkastaa mahdolliset hoidonrajaukset/-linjaukset ennen 112
          soittoa.
        </p>
        <p>Tarvittaessa mittaa uudestaan vitaalit ambulanssia odottaessa.</p>
      </>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
        <div className="content">
          <p>Konsultoi omaa lääkäriä.</p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p>
            Konsultoi geriatrista lääkäriä erillisen ohjeen mukaan (Virka-ajan
            ulkopuolinen konsultointiohje kotihoidon ja ympärivuorokautisen
            hoivan henkilöstölle). Huom. klo 21 jälkeen soita HUS-akuutin
            päivystyspoliklinikan vuorovastaavalle sairaanhoitajalle.
          </p>
        </div>
      </>
    )
  };

  const highToLowRiskInstructions = {
    Kotihoito: (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>VÄLITTÖMÄSTI</span> virka-aikana omaa
              sairaanhoitajaa / lääkäriä.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              klo 21.00 asti konsultoi <span>VÄLITTÖMÄSTI</span> geriatrista
              päivystäjää.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              klo 21 jälkeen konsultoi <span>VÄLITTÖMÄSTI</span> HUS-akuutin
              päivystyksen vuorovastaavaa sairaanhoitajaa.
            </p>
          </div>
        </div>
      </>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p>
              Konsultoi <span>VÄLITTÖMÄSTI</span> omaa sairaanhoitajaa/lääkäriä.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Sairaanhoitaja arvioi asiakkaan tilanteen ja konsultoi
              tarvittaessa omaa lääkäriä.
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
              Konsultoi omaa sairaanhoitajaa jos paikalla.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Jos oma sairaanhoitaja ei ole paikalla, konsultoi virka-ajan
              ulkopuolisen konsultaatio-ohjeen mukaan{" "}
              <span>
                (Virka-ajan ulkopuolinen konsultointiohje kotihoidon ja
                ympärivuorokautisen hoivan henkilöstölle). Konsultoi
                ISBAR-raportointiohjeen mukaan.
              </span>
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              <span>Klo 21</span> jälkeen konsultoi tarvittaessa HUS-akuutin
              päivystyksen vuorovastaavaa, ellei oma sairaanhoitaja ole
              paikalla. <span>Konsultoi ISBAR-raportointiohjeen mukaan.</span>
            </p>
          </div>
        </div>
      </>
    )
  };

  const highToNoRiskInstructions = {
    Kotihoito: (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi <span>VÄLITTÖMÄSTI</span> virka-aikana omaa
              sairaanhoitajaa / lääkäriä.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              klo 21.00 asti konsultoi <span>VÄLITTÖMÄSTI</span> geriatrista
              päivystäjää.
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              klo 21 jälkeen konsultoi <span>VÄLITTÖMÄSTI</span> HUS-akuutin
              päivystyksen vuorovastaavaa sairaanhoitajaa.
            </p>
          </div>
        </div>
      </>
    ),

    "Ympärivuorokautinen hoiva": (
      <>
        <div>
          <h3 style={{ marginTop: "30px" }}>Virka-aikana:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi oman yksikön sairaanhoitajaa tai hoitavaa lääkäriä.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Konsultoi oman yksikön sairaanhoitajaa, jos paikalla tai suoraan{" "}
              <span>geriatrista lääkäriä</span> (kts. erillinen
              konsultointiohje).
            </p>
          </div>
          <div className="content">
            <p style={{ fontSize: "20px" }}>&rarr;</p>
            <p style={{ display: "inline", marginLeft: "15px" }}>
              Odota ohjetta.
            </p>
          </div>
          <h3 style={{ marginTop: "30px" }}>
            Tarvittaessa jos haluat arvioida asiakasta uudestaan, aloita
            sovellus alusta.
          </h3>
        </div>
      </>
    )
  };

  const CheckNEWSSCORErisk = () => {
    if (NEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      personData["Tajunnan taso"] === false ||
      personData["Hengitystaajuus - NEWSscore"] === 3 ||
      personData["Happisaturaatio - NEWSscore"] === 3 ||
      personData["Systolinen verenpaine - NEWSscore"] === 3 ||
      personData["Syketaajuus - NEWSscore"] === 3 ||
      personData["Mittaa lämpötila - NEWSscore"] === 3 ||
      NEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (NEWSscoreTotal >= 1 && NEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const CheckControlNEWSSCORErisk = () => {
    if (ControlNEWSscoreTotal === 0) {
      return "Lievä riski";
    } else if (
      controlData["Tajunnan taso"] === false ||
      controlData["Hengitystaajuus - NEWSscore"] === 3 ||
      controlData["Happisaturaatio - NEWSscore"] === 3 ||
      controlData["Systolinen verenpaine - NEWSscore"] === 3 ||
      controlData["Syketaajuus - NEWSscore"] === 3 ||
      controlData["Mittaa lämpötila - NEWSscore"] === 3 ||
      ControlNEWSscoreTotal >= 4
    ) {
      return "Korkea riski";
    } else if (ControlNEWSscoreTotal >= 1 && ControlNEWSscoreTotal <= 3) {
      return "Kohtalainen riski";
    }
  };

  const checkForSingleThreePointCase = () => {
    return (
      NEWSscoreTotal <= 3 &&
      (personData["Tajunnan taso"] === false ||
        personData["Hengitystaajuus - NEWSscore"] === 3 ||
        personData["Happisaturaatio - NEWSscore"] === 3 ||
        personData["Systolinen verenpaine - NEWSscore"] === 3 ||
        personData["Syketaajuus - NEWSscore"] === 3 ||
        personData["Mittaa lämpötila - NEWSscore"] === 3)
    );
  };

  const NEWSscoreRiskChange = () => {
    if (
      (CheckControlNEWSSCORErisk() === "Korkea riski" &&
        CheckNEWSSCORErisk() === "Kohtalainen riski") ||
      (CheckControlNEWSSCORErisk() === "Kohtalainen riski" &&
        CheckNEWSSCORErisk() === "Lievä riski") ||
      (CheckControlNEWSSCORErisk() === "Korkea riski" &&
        CheckNEWSSCORErisk() === "Lievä riski")
    )
      return true;
  };

  // console.log("CheckNEWSSCORErisk", CheckNEWSSCORErisk());
  // console.log("CheckControlNEWSSCORErisk", CheckControlNEWSSCORErisk());
  // console.log("NEWSscoreRiskChange", NEWSscoreRiskChange());

  if (
    CheckControlNEWSSCORErisk() === "Korkea riski" &&
    CheckNEWSSCORErisk() === "Lievä riski"
  ) {
    //RISKILUOKKA: KORKEASTA LIEVÄÄN
    return (
      <div className="InstructionCard-second-container">
        {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        {highToNoRiskInstructions[careType]}
      </div>
    );
  } else if (
    CheckControlNEWSSCORErisk() === "Korkea riski" &&
    CheckNEWSSCORErisk() === "Kohtalainen riski"
  ) {
    // RISKILUOKKA: KORKEASTA KOHTALAISEEN
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        {highToLowRiskInstructions[careType]}
      </div>
    );
  } else if (
    CheckControlNEWSSCORErisk() === "Korkea riski" ||
    CheckNEWSSCORErisk() === "Korkea riski"
  ) {
    //RISKILUOKKA: KORKEA RISKI
    return (
      <div className="InstructionCard-second-container">
        <h3>Toimintaohje:</h3>
        <hr />
        {checkForSingleThreePointCase() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska yksittäisestä mittauksesta tuli korkean riskiluokan arvio.
          </p>
        )}
        {NEWSscoreRiskChange() && (
          <p style={{ color: "#ab2615", fontWeight: "bold" }}>
            *Koska riskiluokka oli aluksi korkea.
          </p>
        )}
        {highRiskInstructions[careType]}
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
            Konsultoi oman yksikön sairaanhoitajaa tai hoitavaa lääkäriä.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>Virka-ajan ulkopuolella:</h3>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Konsultoi oman yksikön sairaanhoitajaa, jos paikalla tai suoraan{" "}
            <span>geriatrista lääkäriä</span> (kts. erillinen konsultointiohje).
          </p>
        </div>
        <div className="content">
          <p style={{ fontSize: "20px" }}>&rarr;</p>
          <p style={{ display: "inline", marginLeft: "15px" }}>
            Odota ohjetta.
          </p>
        </div>
        <h3 style={{ marginTop: "30px" }}>
          Tarvittaessa jos haluat arvioida asiakasta uudestaan, aloita sovellus
          alusta.
        </h3>
      </div>
    );
  }
}

export default InstructionCardSecond;

import React from "react";
import DoubleButton from "../Components/DoubleButton";

function TajunnantasoPage({ history }) {
  const red = "#AD3E2F";
  const green = "#377D4F";

  const open_hoitoOje = className => {
    return;
  };

  return (
    <div className="Page">
      <h1>Tajunnan taso:</h1>
      <p>
        Asiakkaan käytös/tajunta. Tarvittaessa konsultoi kolleegaa/omaista
        saadaksesi lisätietoa asiakkaan käyttäytymisestä/tajunnan tasosta.
      </p>
      <DoubleButton
        header={""}
        value1={"Normaali"}
        value2={"Poikkeava"}
        buttonColor_1={green}
        buttonColor_2={red}
        hoitoOhje_header={""}
        hoito_ohje={""}
        eventHandler={open_hoitoOje}
        hoitoOhjeOn={""}
        hoitoOhjeOn_YesNo={""}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/verensokeri");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default TajunnantasoPage;

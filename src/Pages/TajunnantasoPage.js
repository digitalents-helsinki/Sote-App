import React from "react";
import DoubleButton from "../Components/DoubleButton";

function TajunnantasoPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";
  if (personData["Tajunnan taso"] || personData["Tajunnan taso"] === false) {
    buttonActive = "nextButtonactive";
  }

  return (
    <div className="Page">
      <h1>Tajunnan taso:</h1>
      <p>
        Asiakkaan käytös/tajunta. Tarvittaessa konsultoi kolleegaa/omaista
        saadaksesi lisätietoa asiakkaan käyttäytymisestä/tajunnan tasosta.
      </p>
      <DoubleButton
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={e => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/verensokeri");
            } else {
              return;
            }
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

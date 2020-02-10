import React from "react";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";

function TajunnantasoPage({ personData, setPersonData }) {
  const buttonActive = typeof personData["Tajunnan taso"] === "boolean";

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
      <NextButton nextPage={"/verensokeri"} buttonActive={buttonActive} />
    </div>
  );
}

export default TajunnantasoPage;

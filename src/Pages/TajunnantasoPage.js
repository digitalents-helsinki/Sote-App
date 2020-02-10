import React from "react";
import Page from "../Components/Page";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";

function TajunnantasoPage({ personData, setPersonData }) {
  const buttonActive = typeof personData["Tajunnan taso"] === "boolean";

  return (
    <Page
      title="Tajunnan taso:"
      paragraph="Asiakkaan käytös/tajunta. Tarvittaessa konsultoi kolleegaa/omaista saadaksesi lisätietoa asiakkaan käyttäytymisestä/tajunnan tasosta."
    >
      <DoubleButton
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      />
      <NextButton nextPage={"/verensokeri"} buttonActive={buttonActive} />
    </Page>
  );
}

export default TajunnantasoPage;

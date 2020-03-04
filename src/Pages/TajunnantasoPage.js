import React from "react";
import Page from "../Components/Page";
import DoubleButton from "../Components/DoubleButton";

function TajunnantasoPage({ personData, setPersonData }) {
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
    </Page>
  );
}

export default TajunnantasoPage;

import React from "react";
import DoubleButton from "../Components/DoubleButton";
import Page from "../Components/Page";

function VerenkiertoPage({ personData, setPersonData }) {
  return (
    <Page title="Verenkierto">
      <DoubleButton
        header={"Tarkista syke:"}
        values={["Säännöllinen", "Epäsäännöllinen"]}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButton
        header={"Tuntuuko lämpörajoja raajoissa:"}
        bodyText={
          "molemminpuolisia (ranne/nilkka, kyynärpää/polvi, olkavarsi/nivunen)"
        }
        redFirst={true}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default VerenkiertoPage;

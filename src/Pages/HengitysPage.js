import React from "react";
import Page from "../Components/Page";
import Checkbox from "../Components/Checkbox";

function HengitysPage({ personData, setPersonData }) {
  const Title = "Hengitys";

  return (
    <Page title={Title} paragraph="Onko korviin kuultavia ääniä?">
      <Checkbox
        checkboxlabel={"Normaali hengitys / ei ääniä"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Rohina"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Vinkuna"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Korina"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Raskas hengitys"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default HengitysPage;

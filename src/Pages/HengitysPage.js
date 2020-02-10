import React from "react";
import Page from "../Components/Page";
import Checkbox from "../Components/Checkbox";
import NextButton from "../Components/NextButton";

function HengitysPage({ personData, setPersonData }) {
  const Title = "Hengitys";
  const buttonActive =
    personData["Hengitys - Normaali hengitys/ei ääniä"] ||
    personData["Hengitys - Vinkuna"] ||
    personData["Hengitys - Korina"] ||
    personData["Hengitys - Rohina"];

  return (
    <Page title={Title} paragraph="Onko korvin kuultavia ääniä?">
      <Checkbox
        checkboxlabel={"Normaali hengitys/ei ääniä"}
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
      <NextButton nextPage={"/iho"} buttonActive={buttonActive} />
    </Page>
  );
}

export default HengitysPage;

import React from "react";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";
import Page from "../Components/Page";

function HengitystiePage({ personData, setPersonData }) {
  const buttonActive = [
    typeof personData["Onko hengitystie auki?"],
    typeof personData["Onko ilmatie estettä?"]
  ].every(type => type === "boolean");

  return (
    <Page title="Hengitystie" paragraph="Tarkista asiakkaan hengitystiet">
      <DoubleButton
        header={"Onko hengitystie auki?"}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={"Avaa hengitystiet taivuttamalla leuasta ja otsalta."}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButton
        header={"Onko ilmatie estettä?"}
        redFirst={true}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={"Poista ilmatie-este."}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton buttonActive={buttonActive} nextPage={"/hengitys"} />
    </Page>
  );
}

export default HengitystiePage;

import React from "react";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";

function HengitystiePage({ personData, setPersonData }) {
  const buttonActive = [
    typeof personData["Onko hengitystie auki?"],
    typeof personData["Onko ilmatie estettä?"]
  ].every(type => type === "boolean");

  return (
    <div className="Page">
      <h1>Hengitystie</h1>
      <p>Tarkista asiakkaan hengitystiet</p>
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
    </div>
  );
}

export default HengitystiePage;

import React from "react";
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
    <div className="Page">
      <h1>{Title}</h1>
      <p>Onko korvin kuultavia ääniä?</p>
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
    </div>
  );
}

export default HengitysPage;

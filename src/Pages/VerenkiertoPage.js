import React from "react";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";

function VerenkiertoPage({ personData, setPersonData }) {
  const buttonActive = [
    typeof personData["Tarkista syke:"],
    typeof personData["Tuntuuko paikallista lämpöeroa:"]
  ].every(type => type === "boolean");

  return (
    <div className="Page">
      <h1>Verenkierto</h1>
      <p></p>
      <DoubleButton
        header={"Tarkista syke:"}
        values={["Säännöllinen", "Epäsäännöllinen"]}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButton
        header={"Tuntuuko paikallista lämpöeroa:"}
        bodyText={
          "molemminpuolisia/ toispuolisia (ranne/nilkka, kyynärpää/ polvi, olkavarsi/nivunen)?"
        }
        redFirst={true}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton nextPage={"/tajunta"} buttonActive={buttonActive} />
    </div>
  );
}

export default VerenkiertoPage;

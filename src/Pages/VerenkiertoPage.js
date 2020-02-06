import React from "react";
import DoubleButton from "../Components/DoubleButton";

function VerenkiertoPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";
  if (
    (personData["Tarkista syke:"] || personData["Tarkista syke:"] === false) &&
    (personData["Tuntuuko paikallista lämpöeroa:"] ||
      personData["Tuntuuko paikallista lämpöeroa:"] === false)
  ) {
    buttonActive = "nextButtonactive";
  }

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
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              history.push("/tajunta");
              window.scrollTo(0, 0);
            } else {
              return;
            }
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default VerenkiertoPage;

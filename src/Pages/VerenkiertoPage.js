import React from "react";
import DoubleButon from "../Components/DoubleButton";

function VerenkiertoPage({ history, personData, setPersonData }) {
  const red = "#AD3E2F";
  const green = "#377D4F";

  const open_hoitoOje = className => {
    /*       Uncomment this if you want to activate the eventHandler in double-button component*/

    /*        var [element] = document.getElementsByClassName(className)
        element.classList.toggle('active')*/
    return;
  };

  return (
    <div className="Page">
      <h1>Verenkierto</h1>
      <p></p>
      <DoubleButon
        header={"Tarkista syke:"}
        value1={"Säännöllinen"}
        value2={"Epäsäännöllinen"}
        buttonColor_1={green}
        buttonColor_2={red}
        hoito_ohje={""}
        eventHandler={open_hoitoOje}
        hoitoOhjeOn={""}
        hoitoOhjeOn_YesNo={""}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButon
        header={"Tuntuuko paikallista lämpöeroa:"}
        bodyText={
          "molemminpuolisia/ toispuolisia (ranne/nilkka, kyynärpää/ polvi, olkavarsi/nivunen)?"
        }
        value1={"Kyllä"}
        value2={"Ei"}
        buttonColor_1={red}
        buttonColor_2={green}
        hoito_ohje={""}
        eventHandler={open_hoitoOje}
        hoitoOhjeOn={""}
        hoitoOhjeOn_YesNo={""}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/tajunta");
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

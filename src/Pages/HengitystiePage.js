import React from "react";
import DoubleButon from "../Components/DoubleButton";

function HengitystiePage({ history, personData, setPersonData }) {
  const red = "#AD3E2F";
  const green = "#377D4F";
  const open_hoitoOje = className => {
    var [element] = document.getElementsByClassName(className);
    element.classList.toggle("active");
  };
  return (
    <div className="Page">
      <h1>Hengitystie</h1>
      <p>Tarkista asiakkaan hengitystiet</p>
      <DoubleButon
        header={"Onko hengitystie auki?"}
        value1={"Kyllä"}
        value2={"Ei"}
        buttonColor_1={green}
        buttonColor_2={red}
        hoitoOhje_header={"Hoito-ohje"}
        hoito_ohje={"Avaa hengitystiet taivuttamalla leuasta ja otsalta."}
        eventHandler={open_hoitoOje}
        hoitoOhjeOn={"hoito-ohje_1"}
        hoitoOhjeOn_YesNo={"Kyllä"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButon
        header={"Onko ilmatie estettä?"}
        value1={"Kyllä"}
        value2={"Ei"}
        buttonColor_1={red}
        buttonColor_2={green}
        hoitoOhje_header={"Hoito-ohje"}
        hoito_ohje={"Poista ilmatie-este."}
        eventHandler={open_hoitoOje}
        hoitoOhjeOn={"hoito-ohje_2"}
        hoitoOhjeOn_YesNo={"Ei"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/hengitys");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default HengitystiePage;

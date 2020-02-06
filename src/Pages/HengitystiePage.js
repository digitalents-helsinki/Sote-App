import React from "react";
import DoubleButton from "../Components/DoubleButton";

function HengitystiePage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";

  if (
    (personData["Onko hengitystie auki?"] ||
      personData["Onko hengitystie auki?"] === false) &&
    (personData["Onko ilmatie estettä?"] ||
      personData["Onko ilmatie estettä?"] === false)
  ) {
    buttonActive = "nextButtonactive";
  }

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
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={e => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/hengitys");
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

export default HengitystiePage;

import React from "react";
import Textarea from "../Components/Textarea";
import Checkbox from "../Components/Checkbox";

function TajuntaPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";

  if (
    personData["Tajunta - Ei poikkeavia löydöksiä."] === true ||
    personData.Tajunta
  ) {
    buttonActive = "nextButtonactive";
  }
  return (
    <div className="Page">
      <h1>Tajunta</h1>
      <p>
        Tarkista tajunta ja kirjoita mahdoliset löydökset/käyttätyminen alla
        olevaan tekstikenttään.
      </p>
      <Checkbox
        checkboxlabel={"Ei poikkeavia löydöksiä."}
        subject={"Tajunta"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Textarea
        name={"Tajunta"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              history.push("/hengitystaajuus");
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

export default TajuntaPage;

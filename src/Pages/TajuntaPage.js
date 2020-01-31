import React from "react";
import Textarea from "../Components/Textarea";
import Checkbox from "../Components/Checkbox";

function TajuntaPage({ history, personData, setPersonData }) {
  return (
    <div className="Page">
      <h1>Tajunta</h1>
      <p>
        Tarkista tajunta ja kirjoita mahdoliset löydökset/käyttätyminen alla
        olevaan tekstikenttään.
      </p>
      <Checkbox
        checkboxlabel={"Ei poikkeavia löydöksiä."}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Textarea
        name={"tajunta"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/hengitystaajuus");
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

import React from "react";
import Textarea from "../Components/Textarea";
import Checkbox from "../Components/Checkbox";

function TajuntaPage({ history }) {
  return (
    <div className="Page">
      <h1>Tajunta</h1>
      <p>
        Tarkista tajunta ja kirjoita mahdoliset löydökset/käyttätyminen alla
        olevaan tekstikenttään.
      </p>
      <Checkbox checkboxlabel={"Ei poikkeavia löydöksiä."} />
      <Textarea />
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

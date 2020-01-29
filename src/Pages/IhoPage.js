import React from "react";
import Checkbox from "../Components/Checkbox";
import Textarea from "../Components/Textarea";

function IhoPage({ history, personData, setPersonData }) {
  return (
    <div className="Page">
      <h1>Iho, paljastaminen</h1>
      <p>Miltä iho tuntuu:</p>
      <Checkbox
        checkboxlabel={"Normaali"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kuiva"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kostea"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kylmä"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kuuma"}
        personData={personData}
        setPersonData={setPersonData}
      />

      <h4 style={{ fontSize: "0.9rem", lineHeight: "1.8rem" }}>
        Kirjaa asiakkaan ihomuutokset ja muut löydökset:
      </h4>
      <Textarea
        name={"Iho"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/verenkierto");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default IhoPage;

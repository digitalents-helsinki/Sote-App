import React from "react";
import Checkbox from "../Components/Checkbox";

function HengitysPage({ history, personData, setPersonData }) {
  return (
    <div className="Page">
      <h1>Hengitys</h1>
      <p>Onko korvin kuultavia ääniä?</p>
      <Checkbox
        checkboxlabel={"Normaali hengitys/ei ääniä"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Rohina"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Vinkuna"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Korina"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/iho");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default HengitysPage;

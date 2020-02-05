import React from "react";
import Checkbox from "../Components/Checkbox";

function HengitysPage({ history, personData, setPersonData }) {
  const Title = "Hengitys";
  return (
    <div className="Page">
      <h1>{Title}</h1>
      <p>Onko korvin kuultavia ääniä?</p>
      <Checkbox
        checkboxlabel={"Normaali hengitys/ei ääniä"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Rohina"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Vinkuna"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Korina"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            window.scrollTo(0, 0);
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

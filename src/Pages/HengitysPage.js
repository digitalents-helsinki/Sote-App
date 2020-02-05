import React from "react";
import Checkbox from "../Components/Checkbox";

function HengitysPage({ history, personData, setPersonData }) {
  const Title = "Hengitys";
  let buttonActive = "nextButtoninactive";

  if (
    personData["Hengitys - Normaali hengitys/ei ääniä"] ||
    personData["Hengitys - Vinkuna"] ||
    personData["Hengitys - Korina"] ||
    personData["Hengitys - Rohina"]
  ) {
    buttonActive = "nextButtonactive";
  }

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
          className={buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              history.push("/iho");
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

export default HengitysPage;

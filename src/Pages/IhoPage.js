import React from "react";
import Checkbox from "../Components/Checkbox";
import Textarea from "../Components/Textarea";

function IhoPage({ history, personData, setPersonData }) {
  const Title = "Iho, paljastaminen";
  let buttonActive = "nextButtoninactive";

  if (
    (personData["Iho, paljastaminen - Normaali"] ||
      personData["Iho, paljastaminen - Kuiva"] ||
      personData["Iho, paljastaminen - Kostea"] ||
      personData["Iho, paljastaminen - Kylmä"] ||
      personData["Iho, paljastaminen - Kuuma"]) &&
    (personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ||
      personData.Iho)
  ) {
    buttonActive = "nextButtonactive";
  }

  const hookIntoTextAreaSetPersonData = value => {
    if (personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"]) {
      setPersonData({
        ...value,
        "Iho, paljastaminen - Ei poikkeavia löydöksiä": false
      });
    } else {
      setPersonData(value);
    }
  };

  return (
    <div className="Page">
      <h1>{Title}</h1>
      <p>Miltä iho tuntuu:</p>
      <Checkbox
        checkboxlabel={"Normaali"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kuiva"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kostea"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kylmä"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      <Checkbox
        checkboxlabel={"Kuuma"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />

      <h4 style={{ fontSize: "1rem", lineHeight: "1.8rem", marginTop: "60px" }}>
        Kirjaa asiakkaan ihomuutokset ja muut löydökset:
      </h4>

      <Checkbox
        checkboxlabel={"Ei poikkeavia löydöksiä"}
        subject={Title}
        personData={personData}
        setPersonData={setPersonData}
      />
      {personData["Iho"] &&
        personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] && (
          <p
            style={{
              color: "#AD3E2F",
              textAlign: "start",
              marginBottom: "0px"
            }}
          >
            Jos valitset: Ei poikkeavia löydöksiä, kirjoittamasi löydökset eivät
            kirjaudu raporttiin.
          </p>
        )}
      <Textarea
        name={"Iho"}
        personData={personData}
        setPersonData={hookIntoTextAreaSetPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/verenkierto");
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

export default IhoPage;

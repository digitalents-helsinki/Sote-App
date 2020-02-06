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

  const hookIntoTextAreaSetPersonData = value => {
    if (personData["Tajunta - Ei poikkeavia löydöksiä."]) {
      setPersonData({
        ...value,
        "Tajunta - Ei poikkeavia löydöksiä.": false
      });
    } else {
      setPersonData(value);
    }
  };

  return (
    <div className="Page">
      <h1>Tajunta</h1>
      <p>
        Tarkista tajunta ja kirjoita mahdolliset löydökset/käyttäytyminen alla
        olevaan tekstikenttään.
      </p>
      <Checkbox
        checkboxlabel={"Ei poikkeavia löydöksiä."}
        subject={"Tajunta"}
        personData={personData}
        setPersonData={setPersonData}
      />
      {personData["Tajunta"] &&
        personData["Tajunta - Ei poikkeavia löydöksiä."] && (
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
        name={"Tajunta"}
        personData={personData}
        setPersonData={hookIntoTextAreaSetPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
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

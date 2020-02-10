import React from "react";
import Textarea from "../Components/Textarea";
import Checkbox from "../Components/Checkbox";
import NextButton from "../Components/NextButton";
import Page from "../Components/Page";

function TajuntaPage({ personData, setPersonData }) {
  const buttonActive =
    personData["Tajunta - Ei poikkeavia löydöksiä."] || personData.Tajunta;

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
    <Page
      title="Tajunta"
      paragraph="Tarkista tajunta ja kirjoita mahdolliset löydökset/käyttäytyminen alla olevaan tekstikenttään."
    >
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
      <NextButton nextPage={"/hengitystaajuus"} buttonActive={buttonActive} />
    </Page>
  );
}

export default TajuntaPage;

import React from "react";
import Checkbox from "../Components/Checkbox";
import Textarea from "../Components/Textarea";
import Page from "../Components/Page";

function IhoPage({ personData, setPersonData }) {
  const Title = "Iho, paljastaminen";

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
    <Page title={Title} paragraph="Miltä iho tuntuu kauttaaltaan?">
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

      <h4 style={{ fontSize: "1rem", lineHeight: "1.8rem", marginTop: "30px" }}>
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
    </Page>
  );
}

export default IhoPage;

import React from "react";
import Checkbox from "../Components/Checkbox";
import Textarea from "../Components/Textarea";

function IhoPage({ history, personData, setPersonData }) {
  const Title = "Iho, paljastaminen";

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
      <Textarea
        name={"Iho"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            window.scrollTo(0, 0);
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

import React from "react";
import Checkbox from "../Components/Checkbox";
import Textarea from "../Components/Textarea";

function IhoPage({ history }) {
  return (
    <div className="Page">
      <h1>Iho, paljastaminen</h1>
      <p>Miltä iho tuntuu:</p>
      <Checkbox checkboxlabel={"Normaali"} />
      <Checkbox checkboxlabel={"Kuiva"} />
      <Checkbox checkboxlabel={"Kostea"} />
      <Checkbox checkboxlabel={"Kylmä"} />
      <Checkbox checkboxlabel={"Kuuma"} />

      <h4 style={{ fontSize: "0.9rem", lineHeight: "1.8rem" }}>
        Kirjaa asiakkaan ihomuutokset ja muut löydökset:
      </h4>
      <Textarea />
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

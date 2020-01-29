import React from "react";
import Checkbox from "../Components/Checkbox";

function HengitysPage({ history }) {
  return (
    <div className="Page">
      <h1>Hengitys</h1>
      <p>Onko korvin kuultavia ääniä?</p>
      <Checkbox checkboxlabel={"Normaali hengitys/ei ääniä"} />
      <Checkbox checkboxlabel={"Rohina"} />
      <Checkbox checkboxlabel={"Vinkuna"} />
      <Checkbox checkboxlabel={"Korina"} />
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

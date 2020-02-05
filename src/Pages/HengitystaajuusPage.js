import React from "react";
import NewsComponent from "../Components/NewsComponent";

function HengitystaajuusPage({ history, personData, setPersonData }) {
  return (
    <div className="Page">
      <h1>Hengitystaajuus</h1>
      <p>
        Laske rintakehän liikkeet minuutin ajalta. Asiakkaan pitäisi olla
        puhumatta tämän ajan.
      </p>
      <NewsComponent
        name={"Hengitystaajuus"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/happisaturaatio");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default HengitystaajuusPage;

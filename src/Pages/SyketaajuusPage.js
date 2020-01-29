import React from "react";
import NewsComponent from "../Components/NewsComponent";

function SyketaajuusPage({ history }) {
  return (
    <div className="Page">
      <h1>Syketaajuus</h1>
      <p>Tunnustele ranteesta tai tarvittaessa kyynärpäästä</p>
      <NewsComponent
        cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
      />
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/lampotila");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default SyketaajuusPage;

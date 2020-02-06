import React from "react";
import NewsComponent from "../Components/NewsComponent";

function SyketaajuusPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";

  if (personData["Syketaajuus"]) {
    buttonActive = "nextButtonactive";
  }
  return (
    <div className="Page">
      <h1>Syketaajuus</h1>
      <p>Tunnustele ranteesta tai tarvittaessa kyynärpäästä</p>
      <NewsComponent
        cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
        name={"Syketaajuus"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/lampotila");
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
export default SyketaajuusPage;

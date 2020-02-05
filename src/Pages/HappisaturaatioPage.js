import React from "react";
import NewsComponent from "../Components/NewsComponent";

function HappisaturaatioPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";
  if (personData["Happisaturaatio"]) {
    buttonActive = "nextButtonactive";
  }
  return (
    <div className="Page">
      <h1>Happisaturaatio</h1>
      <p>Aseta Spo2 mittari asiakkaan sormeen noin 1-2 minuutin ajaksi.</p>
      <NewsComponent
        name={"Happisaturaatio"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[91, [92, 93], [94, 95], 96, null, null, null]}
      />
      <div className="nextButtondiv">
        <button
          className={buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/systolinenverenpaine");
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

export default HappisaturaatioPage;

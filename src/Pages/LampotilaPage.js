import React from "react";
import NewsComponent from "../Components/NewsComponent";

function LampotilaPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";

  if (personData["Mittaa lämpötila"]) {
    buttonActive = "nextButtonactive";
  }
  return (
    <div className="Page">
      <h1>Mittaa lämpötila:</h1>
      <p>Mittaa lämpö kainalosta/korvasta</p>
      <NewsComponent
        cells={[
          35.0,
          null,
          [35.1, 36.0],
          [36.1, 38.0],
          [38.1, 39.0],
          39.1,
          null
        ]}
        name={"Mittaa lämpötila"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/tajunnantaso");
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

export default LampotilaPage;

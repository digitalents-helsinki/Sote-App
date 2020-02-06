import React from "react";
import NewsComponent from "../Components/NewsComponent";

function VerensokeriPage({ history, personData, setPersonData }) {
  let buttonActive = "nextButtoninactive";

  if (personData["Mittaa verensokeri:"]) {
    buttonActive = "nextButtonactive";
  }
  return (
    <div className="Page">
      <h1>Mittaa verensokeri:</h1>
      <p style={{ marginBottom: "30px" }}>
        Mittaa aina kun tajunnantason häiriö tai diabeetikko.
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        Jos ei tarvetta mittaukselle,{" "}
        <span style={{ color: "#AD3E2F", textDecoration: "underline" }}>
          ohita
        </span>
      </p>
      <NewsComponent
        cells={[4, [5, 6], null, [7, 14], [15, 20], [20, 24], 25]}
        name={"Mittaa verensokeri:"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <div className="nextButtondiv">
        <button
          className={"nextButtoninactive " + buttonActive}
          onClick={() => {
            if (buttonActive === "nextButtonactive") {
              window.scrollTo(0, 0);
              history.push("/instructionPage");
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
export default VerensokeriPage;

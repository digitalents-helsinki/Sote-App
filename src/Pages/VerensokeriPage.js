import React from "react";
import NewsComponent from "../Components/NewsComponent";
import Page from "../Components/Page";
import NextButton from "../Components/NextButton";

function VerensokeriPage({
  history,
  personData,
  setPersonData,
  NEWSscoreTotal
}) {
  const buttonActive = personData["Mittaa verensokeri:"];

  return (
    <Page
      title="Mittaa verensokeri:"
      paragraph="Mittaa aina kun tajunnantason häiriö tai diabeetikko."
    >
      <p style={{ fontSize: "0.9rem", marginTop: "-30px" }}>
        Jos ei tarvetta mittaukselle,{" "}
        <span
          style={{ color: "#AD3E2F", textDecoration: "underline" }}
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/instructionPage");
          }}
        >
          ohita
        </span>
      </p>
      <NewsComponent
        cells={[4, [5, 6], null, [7, 14], [15, 20], [20, 24], 25]}
        name={"Mittaa verensokeri:"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton
        buttonActive={buttonActive}
        onClick={() => {
          if (buttonActive) {
            if (NEWSscoreTotal === 0) {
              window.scrollTo(0, 0);
              history.push("/instructionPageTwo");
            } else {
              window.scrollTo(0, 0);
              history.push("/instructionPage");
            }
          }
        }}
      />
    </Page>
  );
}
export default VerensokeriPage;

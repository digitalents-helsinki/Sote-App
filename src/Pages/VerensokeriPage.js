import React from "react";
import NewsComponent from "../Components/NewsComponent";
import Page from "../Components/Page";

function VerensokeriPage({
  history,
  personData,
  setPersonData,
  NEWSscoreTotal,
  ControlNEWSscoreTotal
}) {
  return (
    <Page
      title="Mittaa verensokeri:"
      paragraph="Mittaa aina kun tajunnantason häiriö tai diabeetikko."
    >
      <p
        className="page-paragraph"
        style={{ fontSize: "0.9rem", marginTop: "-30px" }}
      >
        Jos ei tarvetta mittaukselle,{" "}
        <span
          style={{ color: "#AD3E2F", textDecoration: "underline" }}
          onClick={() => {
            window.scrollTo(0, 0);
            if (!NEWSscoreTotal && !ControlNEWSscoreTotal) {
              history.push("/instructionPageTwo");
            } else {
              history.push("/instructionPage");
            }
          }}
        >
          ohita
        </span>
      </p>
      <NewsComponent
        cells={[3.9, [4, 6], null, [6.1, 14.9], [15, 20], [20.1, 24.9], 25]}
        name={"Mittaa verensokeri:"}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}
export default VerensokeriPage;

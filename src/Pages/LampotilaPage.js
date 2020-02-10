import React from "react";
import Page from "../Components/Page";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function LampotilaPage({ personData, setPersonData }) {
  const buttonActive = personData["Mittaa lämpötila"];

  return (
    <Page
      title="Mittaa lämpötila:"
      paragraph="Mittaa lämpö kainalosta/korvasta"
    >
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
      <NextButton nextPage={"/tajunnantaso"} buttonActive={buttonActive} />
    </Page>
  );
}

export default LampotilaPage;

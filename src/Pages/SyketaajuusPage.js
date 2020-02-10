import React from "react";
import Page from "../Components/Page";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function SyketaajuusPage({ personData, setPersonData }) {
  const buttonActive = personData["Syketaajuus"];

  return (
    <Page
      title="Syketaajuus"
      paragraph="Tunnustele ranteesta tai tarvittaessa kyynärpäästä"
    >
      <NewsComponent
        cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
        name={"Syketaajuus"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton nextPage={"/lampotila"} buttonActive={buttonActive} />
    </Page>
  );
}
export default SyketaajuusPage;

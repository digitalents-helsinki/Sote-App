import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";
import Page from "../Components/Page";

function HappisaturaatioPage({ personData, setPersonData }) {
  const buttonActive = personData["Happisaturaatio"];

  return (
    <Page
      title="Happisaturaatio"
      paragraph="Aseta Spo2 mittari asiakkaan sormeen noin 1-2 minuutin ajaksi."
    >
      <NewsComponent
        name={"Happisaturaatio"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[91, [92, 93], [94, 95], 96, null, null, null]}
      />
      <NextButton
        nextPage={"/systolinenverenpaine"}
        buttonActive={buttonActive}
      />
    </Page>
  );
}

export default HappisaturaatioPage;

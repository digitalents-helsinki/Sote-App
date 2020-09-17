import React from "react";
import NewsComponent from "../Components/NewsComponent";
import Page from "../Components/Page";

function HappisaturaatioPage({ personData, setPersonData }) {
  return (
    <Page
      title="Happisaturaatio"
      paragraph="Aseta Spo2 mittari asiakkaan sormeen noin 1-2 minuutin ajaksi."
      paragraph2="Huomioi asiakkaan keuhkosairaus Spo2 arvoa tulkittaessa."
    >
      <NewsComponent
        name={"Happisaturaatio"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[91, [92, 93], [94, 95], 96, null, null, null]}
      />
    </Page>
  );
}

export default HappisaturaatioPage;

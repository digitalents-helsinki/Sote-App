import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function HappisaturaatioPage({ personData, setPersonData }) {
  const buttonActive = personData["Happisaturaatio"];

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
      <NextButton
        nextPage={"/systolinenverenpaine"}
        buttonActive={buttonActive}
      />
    </div>
  );
}

export default HappisaturaatioPage;

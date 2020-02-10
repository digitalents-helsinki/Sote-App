import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function LampotilaPage({ personData, setPersonData }) {
  const buttonActive = personData["Mittaa lämpötila"];

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
      <NextButton nextPage={"/tajunnantaso"} buttonActive={buttonActive} />
    </div>
  );
}

export default LampotilaPage;

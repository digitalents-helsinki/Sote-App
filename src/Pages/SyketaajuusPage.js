import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function SyketaajuusPage({ personData, setPersonData }) {
  const buttonActive = personData["Syketaajuus"];

  return (
    <div className="Page">
      <h1>Syketaajuus</h1>
      <p>Tunnustele ranteesta tai tarvittaessa kyynärpäästä</p>
      <NewsComponent
        cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
        name={"Syketaajuus"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton nextPage={"/lampotila"} buttonActive={buttonActive} />
    </div>
  );
}
export default SyketaajuusPage;

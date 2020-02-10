import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function HengitystaajuusPage({ personData, setPersonData }) {
  const buttonActive = personData["Hengitystaajuus"];

  return (
    <div className="Page">
      <h1>Hengitystaajuus</h1>
      <p>
        Laske rintakehän liikkeet minuutin ajalta. Asiakkaan pitäisi olla
        puhumatta tämän ajan.
      </p>
      <NewsComponent
        name={"Hengitystaajuus"}
        personData={personData}
        setPersonData={setPersonData}
        cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
      />
      <NextButton nextPage={"/happisaturaatio"} buttonActive={buttonActive} />
    </div>
  );
}

export default HengitystaajuusPage;

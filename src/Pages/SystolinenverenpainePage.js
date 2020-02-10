import React from "react";
import NewsComponent from "../Components/NewsComponent";
import NextButton from "../Components/NextButton";

function SystolinenverenpainePage({ personData, setPersonData }) {
  const buttonActive = personData["Systolinen verenpaine"];

  return (
    <div className="Page">
      <h1>Systolinen verenpaine</h1>
      <p>Mittaa verenpaine istuen voinnin salliessa</p>
      <NewsComponent
        cells={[90, [91, 100], [101, 110], [111, 219], null, null, 220]}
        name={"Systolinen verenpaine"}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton nextPage={"/syketaajuus"} buttonActive={buttonActive} />
    </div>
  );
}

export default SystolinenverenpainePage;

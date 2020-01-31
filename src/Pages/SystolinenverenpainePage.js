import React from "react";
import NewsComponent from "../Components/NewsComponent";

function SystolinenverenpainePage({ history, personData, setPersonData }) {
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
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            history.push("/syketaajuus");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default SystolinenverenpainePage;

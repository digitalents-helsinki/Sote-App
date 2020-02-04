import React from "react";
import NewsComponent from "../Components/NewsComponent";

function InstructionNewsComponent() {
  return (
    <div className="instruction-news-component">
      <h1>Header poop</h1>
      <p>text poop text poop text poop text poop text poop</p>
      <NewsComponent
        name={"Hengitystaajuus"}
        personData={null}
        setPersonData={null}
        cells={[null, null, null, null, null, null, null]}
      />
    </div>
  );
}

export default InstructionNewsComponent;

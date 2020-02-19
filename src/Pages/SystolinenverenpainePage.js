import React from "react";
import NewsComponent from "../Components/NewsComponent";
import Page from "../Components/Page";

function SystolinenverenpainePage({ personData, setPersonData }) {
  return (
    <Page
      title="Systolinen verenpaine"
      paragraph="Mittaa verenpaine istuen voinnin salliessa"
    >
      <NewsComponent
        cells={[90, [91, 100], [101, 110], [111, 219], null, null, 220]}
        name={"Systolinen verenpaine"}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default SystolinenverenpainePage;

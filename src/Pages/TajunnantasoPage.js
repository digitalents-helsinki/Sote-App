import React from "react";
import Page from "../Components/Page";
// import DoubleButton from "../Components/DoubleButton";
import Button from "../Components/Button";
import Tajunnantaso from "../Components/Tajunnantaso";

function TajunnantasoPage({ personData, setPersonData }) {
  return (
    <Page
      title="Tajunnan taso:"
      paragraph="Reagoiko puheelle, kosketukselle, kivulle tai avaako silmät?"
    >
      {/* <DoubleButton
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      /> */}
      <Button
        values={["Normaali", 5]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      />
      <Tajunnantaso
        cells={["Normaali", 5]}
        name={"Tajunnantaso"}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default TajunnantasoPage;

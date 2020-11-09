import React from "react";
import Page from "../Components/Page";
// import DoubleButton from "../Components/DoubleButton";
import Button from "../Components/Button";
// import TajunnantasoComponent from "../Components/Tajunnantaso";
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
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        Tajunnantaso={Tajunnantaso}
        name={"Tajunnan taso"}
        // Tajunnantaso={TajunnantasoComponent}
      />
      <Tajunnantaso
        cells={["Normaali", "Poikkeava"]}
        name={"Tajunnan taso"}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default TajunnantasoPage;

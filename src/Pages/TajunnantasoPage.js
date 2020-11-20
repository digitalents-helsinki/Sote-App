import React from "react";
import Page from "../Components/Page";
import DoubleButton from "../Components/DoubleButton";
// import Button from "../Components/Button";
// import TajunnantasoComponent from "../Components/Tajunnantaso";
// import Tajunnantaso from "../Components/Tajunnantaso";

function TajunnantasoPage({ personData, setPersonData }) {
  return (
    <Page
      title="Tajunnan taso:"
      paragraph="Reagoiko puheelle, kosketukselle, kivulle tai avaako silmät?"
    >
      <DoubleButton
        values={["Normaali", "Poikkeava"]}
        personData={personData}
        setPersonData={setPersonData}
        name={"Tajunnan taso"}
      />
      <div className="news-huomio">
        <div id="news">* NEWS-pisteet:</div>{" "}
        <br />
        <div id="green">Normaali = 0p</div>{" , "}
        <div id="red">Poikkeava = 3p</div>
      </div>
    </Page>
  );
}

export default TajunnantasoPage;

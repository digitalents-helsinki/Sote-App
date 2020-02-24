import React from "react";
import Page from "../Components/Page";
import { useHistory, useLocation } from "react-router-dom";

function CareTypeSelectionPage({ setCareType }) {
  const history = useHistory();
  const location = useLocation();
  const clickHandler = value => {
    setCareType(value);
    if (!location.state.initial) history.goBack();
    else history.push("/start");
  };
  return (
    <Page>
      <h3 className="care-type-selection-title">Valitse hoitotyyppi</h3>
      <button
        className="care-type-selection-button"
        onClick={() => clickHandler("Kotihoito")}
      >
        Kotihoito
      </button>
      <button
        className="care-type-selection-button"
        onClick={() => clickHandler("Ympärivuorokautinen hoiva")}
      >
        Ympärivuorokautinen hoiva
      </button>
    </Page>
  );
}

export default CareTypeSelectionPage;

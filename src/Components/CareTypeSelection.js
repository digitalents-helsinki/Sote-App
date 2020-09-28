import React from "react";
import Page from "./Page";
import { useHistory, useLocation } from "react-router-dom";

function CareTypeSelection({ setCareType }) {
  const history = useHistory();
  const location = useLocation();
  const clickHandler = value => {
    setCareType(value);
    if (location.state && !location.state.initial) history.goBack();
    else history.push("/"); // hack for animation
  };
  return (
    <Page>
      <h3 className="care-type-selection-title">Valitse hoitoyksikkö</h3>
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

export default CareTypeSelection;

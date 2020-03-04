import React, { useState } from "react";
import Page from "../Components/Page";
import CareTypeSelection from "../Components/CareTypeSelection";

function LandingPage({
  props,
  setEmergencyVisibility,
  history,
  setCareType,
  careType
}) {
  const emergencyText = {
    Kotihoito: (
      <p className="attentionText page-paragraph">
        Jos tilanne on todellinen
        <br />
        hätätilanne, soita suoraan 112.
      </p>
    ),
    "Ympärivuorokautinen hoiva": (
      <p className="attentionText page-paragraph">
        a) Todellinen hätätilanne
        <br />
        <span style={{ color: "#000", fontWeight: "300" }}>
          Soita konsultoivalle lääkärille.
          <br />
          Huomioi hoitosuunnitelma, hoidon rajaukset ja linjaukset
        </span>
        <br />
        b) Konsultoiva tilanne
      </p>
    )
  }[careType];

  const [staticCareType] = useState(careType); // prevent rerendering on caretype change (for nice animation)
  if (staticCareType) {
    return (
      <Page>
        <p className="page-paragraph">
          Sovellus ohjaa sinua
          <br />
          päivystystilanteen läpikäymisessä
        </p>
        {emergencyText}
        <p
          className="emergencyPage-link page-paragraph"
          onClick={() => setEmergencyVisibility(true)}
        >
          Todelliset <span>hätätilanneoireet</span>
        </p>
      </Page>
    );
  } else {
    return (
      <CareTypeSelection
        setCareType={setCareType}
        history={history}
        {...props}
      />
    );
  }
}

export default LandingPage;

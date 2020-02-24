import React from "react";
import Page from "../Components/Page";
import CareTypeSelectionPage from "../Pages/CareTypeSelectionPage";

function LandingPage({
  props,
  setEmergencyVisibility,
  history,
  setCareType,
  careType
}) {
  if (careType) {
    return (
      <Page>
        <p className="page-paragraph">
          Sovellus ohjaa sinua
          <br />
          päivystystilanteen läpikäymisessä
        </p>
        <p className="attentionText page-paragraph">
          Jos tilanne on todellinen
          <br />
          hätätilanne, soita suoraan 112.
        </p>
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
      <CareTypeSelectionPage
        setCareType={setCareType}
        history={history}
        {...props}
      />
    );
  }
}

export default LandingPage;

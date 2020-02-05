import React from "react";

function LandingPage({ props, setEmergencyVisibility, history }) {
  return (
    <div className="Page">
      <p>
        Sovellus ohjaa sinua
        <br />
        päivystystilanteen läpikäymisessä
      </p>
      <p className="attentionText">
        Jos tilanne on todellinen
        <br />
        hätätilanne, soita suoraan 112.
      </p>
      <p
        className="emergencyPage-link"
        onClick={() => setEmergencyVisibility(true)}
      >
        Todelliset <span>hätätilanneoireet</span>
      </p>
      <div className="nextButtondiv">
        <button
          className="nextButtoninactive nextButtonactive"
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/hengitystie");
          }}
        >
          {" "}
          Seuraava{" "}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";

function Report({ controlData }) {
  const red = "#ad3e2f";
  const orange = "#db5400";
  const lightOrange = "#f0a171";
  const green = "#377d4f";

  const hengitystaajuusStyle = () => {
    if (controlData.Hengitystaajuus <= 8 || controlData.Hengitystaajuus >= 25) {
      return red;
    } else if (
      controlData.Hengitystaajuus >= 9 &&
      controlData.Hengitystaajuus <= 11
    ) {
      return lightOrange;
    } else if (
      controlData.Hengitystaajuus >= 12 &&
      controlData.Hengitystaajuus <= 20
    ) {
      return green;
    } else if (
      controlData.Hengitystaajuus >= 21 &&
      controlData.Hengitystaajuus <= 24
    ) {
      return orange;
    }
  };

  const happisaturaatioStyle = () => {
    if (controlData.Happisaturaatio <= 91) {
      return red;
    } else if (
      controlData.Happisaturaatio >= 92 &&
      controlData.Happisaturaatio <= 93
    ) {
      return orange;
    } else if (
      controlData.Happisaturaatio >= 94 &&
      controlData.Happisaturaatio <= 95
    ) {
      return lightOrange;
    } else if (controlData.Happisaturaatio >= 96) {
      return green;
    }
  };

  const systolinenVerenpaineStyle = () => {
    if (
      controlData["Systolinen verenpaine"] <= 90 ||
      controlData["Systolinen verenpaine"] >= 220
    ) {
      return red;
    } else if (
      controlData["Systolinen verenpaine"] >= 91 &&
      controlData["Systolinen verenpaine"] <= 100
    ) {
      return orange;
    } else if (
      controlData["Systolinen verenpaine"] >= 101 &&
      controlData["Systolinen verenpaine"] <= 110
    ) {
      return lightOrange;
    } else if (
      controlData["Systolinen verenpaine"] >= 111 &&
      controlData["Systolinen verenpaine"] <= 219
    ) {
      return green;
    }
  };

  const SyketaajuusStyle = () => {
    if (controlData.Syketaajuus <= 40 || controlData.Syketaajuus >= 131) {
      return red;
    } else if (
      controlData.Syketaajuus >= 111 &&
      controlData.Syketaajuus <= 130
    ) {
      return orange;
    } else if (
      (controlData.Syketaajuus >= 41 && controlData.Syketaajuus <= 50) ||
      (controlData.Syketaajuus >= 91 && controlData.Syketaajuus <= 110)
    ) {
      return lightOrange;
    } else if (controlData.Syketaajuus >= 51 && controlData.Syketaajuus <= 90) {
      return green;
    }
  };

  const lampotilaStyle = () => {
    if (controlData["Mittaa lämpötila"] <= 35) {
      return red;
    } else if (controlData["Mittaa lämpötila"] >= 39.1) {
      return orange;
    } else if (
      (controlData["Mittaa lämpötila"] >= 35.1 &&
        controlData["Mittaa lämpötila"] <= 36) ||
      (controlData["Mittaa lämpötila"] >= 38.1 &&
        controlData["Mittaa lämpötila"] <= 39)
    ) {
      return lightOrange;
    } else if (
      controlData["Mittaa lämpötila"] >= 36.1 &&
      controlData["Mittaa lämpötila"] <= 38
    ) {
      return green;
    }
  };

  const verensokeriStyle = () => {
    if (
      controlData["Mittaa verensokeri:"] <= 4 ||
      controlData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (controlData["Mittaa verensokeri:"] >= 5 &&
        controlData["Mittaa verensokeri:"] <= 6) ||
      (controlData["Mittaa verensokeri:"] >= 20 &&
        controlData["Mittaa verensokeri:"] <= 24)
    ) {
      return orange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 15 &&
      controlData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 7 &&
      controlData["Mittaa verensokeri:"] <= 14
    ) {
      return green;
    }
  };

  let startTimeStamp = new Date();
  let startTime = startTimeStamp.toLocaleString([], {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'});

  return (
    <div className="report-container">

      <h2>Raportti:</h2>
      <i style={{ marginLeft: "15px", color: "gray" }}>{startTime}</i>

      <div className="reportElement">
        <h3>Hengitystie:</h3>

        <div className="flex">
          <p className="subject">{"Onko hengitystie auki?"}</p>
          <div className="answer">
            {controlData["Onko hengitystie auki?"] ? (
              <p style={{ color: green }}>Kyllä</p>
            ) : (
              <p style={{ color: red }}>Ei</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="subject">{"Onko ilmatie estettä?"}</p>
          <div className="answer">
            {controlData["Onko ilmatie estettä?"] ? (
              <p style={{ color: red }}>Kyllä</p>
            ) : (
              <p style={{ color: green }}>Ei</p>
            )}
          </div>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Hengitys:</h3>
        <div className="flex">
          <p className="subject">{"Korviin kuultavat äänet?"}</p>
          <div className="answer">
            <p style={{ color: green }}>
              {controlData["Hengitys - Normaali hengitys/ei ääniä"]
                ? "Normaali"
                : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Hengitys - Vinkuna"] ? "Vinkuna" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Hengitys - Korina"] ? "Korina" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Hengitys - Rohina"] ? "Rohina" : null}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Verenkierto:</h3>
        <div className="flex">
          <p className="subject">{"Syke"}</p>
          <div className="answer">
            {controlData["Tarkista syke:"] ? (
              <p style={{ color: green }}>Säännöllinen</p>
            ) : (
              <p style={{ color: red }}>Epäsäännöllinen</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="subject">{"Tuntuuko paikallista lämpöeroa?"}</p>
          <div className="answer">
            {controlData["Tuntuuko lämpörajoja raajoissa:"] ? (
              <p style={{ color: red }}>Kyllä</p>
            ) : (
              <p style={{ color: green }}>Ei</p>
            )}
          </div>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Tajunta:</h3>
        <div className="flex">
          <p style={{ width: "100%", fontWeight: "200" }} className="answer">
            {controlData["Tajunta - Ei poikkeavia löydöksiä."]
              ? "Ei poikkeavia löydöksiä."
              : controlData.Tajunta}
          </p>
        </div>
      </div>

      <hr />

      <div className="reportElement">
        <h3>Iho, paljastaminen:</h3>
        <div className="flex">
          <p className="subject">{"Miltä iho tuntuu?"}</p>
          <div className="answer">
            <p style={{ color: green }}>
              {controlData["Iho, paljastaminen - Normaali"] ? "Normaali" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Iho, paljastaminen - Kuiva"] ? "Kuiva" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Iho, paljastaminen - Kostea"] ? "Kostea" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Iho, paljastaminen - Kylmä"] ? "Kylmä" : null}
            </p>
            <p style={{ color: red }}>
              {controlData["Iho, paljastaminen - Kuuma"] ? "Kuuma" : null}
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="subject">Onko iho muutoksia?</p>
          <div className="answer">
            {controlData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ? (
              <p style={{ color: green }}>Ei</p>
            ) : (
              <p style={{ color: red }}>Kyllä</p>
            )}
          </div>
        </div>
        {controlData.Iho ? (
          <p
            style={{
              fontWeight: "200",
              fontSize: "0.9rem",
              lineHeight: "1.6rem"
            }}
            className="answer"
          >
            {controlData.Iho}
          </p>
        ) : null}
      </div>

      <hr />

      <div className="vitalValues">
        <h3>Vitaali-arvot:</h3>
        <div className="flex">
          <p className="vital-subject">{"hengitystaajuus:"}</p>
          <p className="vital-answer" style={{ color: hengitystaajuusStyle() }}>
            {controlData.Hengitystaajuus}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Happisaturaatio:"}</p>
          <p className="vital-answer" style={{ color: happisaturaatioStyle() }}>
            {controlData.Happisaturaatio}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Systolinen verenpaine:"}</p>
          <p
            className="vital-answer"
            style={{ color: systolinenVerenpaineStyle() }}
          >
            {controlData["Systolinen verenpaine"]}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Syketaajuus:"}</p>
          <p className="vital-answer" style={{ color: SyketaajuusStyle() }}>
            {controlData.Syketaajuus}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Tajunnan taso:"}</p>
          <div className="vital-answer">
            {controlData["Tajunnan taso"] ? (
              <p style={{ color: green }}>Normaali</p>
            ) : (
              <p style={{ color: red }}>Poikkeava</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Lämpötila:"}</p>
          <p className="vital-answer" style={{ color: lampotilaStyle() }}>
            {controlData["Mittaa lämpötila"]}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Verensokeri:"}</p>
          <p className="vital-answer" style={{ color: verensokeriStyle() }}>
            {controlData["Mittaa verensokeri:"]}
          </p>
        </div>{" "}
        <br></br> <hr></hr>
      </div>
    </div>
  );
}

export default Report;

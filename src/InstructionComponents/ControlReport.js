import React from "react";

function Report({ personData }) {
  const red = "#ad3e2f";
  const orange = "#db5400";
  const lightOrange = "#f0a171";
  const green = "#377d4f";

  const hengitystaajuusStyle = () => {
    if (personData.Hengitystaajuus <= 8 || personData.Hengitystaajuus >= 25) {
      return red;
    } else if (
      personData.Hengitystaajuus >= 9 &&
      personData.Hengitystaajuus <= 11
    ) {
      return lightOrange;
    } else if (
      personData.Hengitystaajuus >= 12 &&
      personData.Hengitystaajuus <= 20
    ) {
      return green;
    } else if (
      personData.Hengitystaajuus >= 21 &&
      personData.Hengitystaajuus <= 24
    ) {
      return orange;
    }
  };

  const happisaturaatioStyle = () => {
    if (personData.Happisaturaatio <= 91) {
      return red;
    } else if (
      personData.Happisaturaatio >= 92 &&
      personData.Happisaturaatio <= 93
    ) {
      return orange;
    } else if (
      personData.Happisaturaatio >= 94 &&
      personData.Happisaturaatio <= 95
    ) {
      return lightOrange;
    } else if (personData.Happisaturaatio >= 96) {
      return green;
    }
  };

  const systolinenVerenpaineStyle = () => {
    if (
      personData["Systolinen verenpaine"] <= 90 ||
      personData["Systolinen verenpaine"] >= 220
    ) {
      return red;
    } else if (
      personData["Systolinen verenpaine"] >= 91 &&
      personData["Systolinen verenpaine"] <= 100
    ) {
      return orange;
    } else if (
      personData["Systolinen verenpaine"] >= 101 &&
      personData["Systolinen verenpaine"] <= 110
    ) {
      return lightOrange;
    } else if (
      personData["Systolinen verenpaine"] >= 111 &&
      personData["Systolinen verenpaine"] <= 219
    ) {
      return green;
    }
  };

  const SyketaajuusStyle = () => {
    if (personData.Syketaajuus <= 40 || personData.Syketaajuus >= 131) {
      return red;
    } else if (personData.Syketaajuus >= 111 && personData.Syketaajuus <= 130) {
      return orange;
    } else if (
      (personData.Syketaajuus >= 41 && personData.Syketaajuus <= 50) ||
      (personData.Syketaajuus >= 91 && personData.Syketaajuus <= 110)
    ) {
      return lightOrange;
    } else if (personData.Syketaajuus >= 51 && personData.Syketaajuus <= 90) {
      return green;
    }
  };

  const lampotilaStyle = () => {
    if (personData["Mittaa lämpötila"] <= 35) {
      return red;
    } else if (personData["Mittaa lämpötila"] >= 39.1) {
      return orange;
    } else if (
      (personData["Mittaa lämpötila"] >= 35.1 &&
        personData["Mittaa lämpötila"] <= 36) ||
      (personData["Mittaa lämpötila"] >= 38.1 &&
        personData["Mittaa lämpötila"] <= 39)
    ) {
      return lightOrange;
    } else if (
      personData["Mittaa lämpötila"] >= 36.1 &&
      personData["Mittaa lämpötila"] <= 38
    ) {
      return green;
    }
  };

  const verensokeriStyle = () => {
    if (
      personData["Mittaa verensokeri:"] <= 4 ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (personData["Mittaa verensokeri:"] >= 5 &&
        personData["Mittaa verensokeri:"] <= 6) ||
      (personData["Mittaa verensokeri:"] >= 20 &&
        personData["Mittaa verensokeri:"] <= 24)
    ) {
      return orange;
    } else if (
      personData["Mittaa verensokeri:"] >= 15 &&
      personData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      personData["Mittaa verensokeri:"] >= 7 &&
      personData["Mittaa verensokeri:"] <= 14
    ) {
      return green;
    }
  };

  let timeStamp = new Date();
  let time = timeStamp.toTimeString();
  // const timeStamp = () => {
  //   new Date().toString;
  // };

  return (
    <div className="report-container">
      <p style={{ color: "gray" }}>*Time stamp*</p>

      <h2>Raportti 2:</h2>

      <div className="reportElement">
        <h3>Hengitystie:</h3>
        <div className="flex">
          <p className="subject">{"Onko hengitystie auki?"}</p>
          <div className="answer">
            {personData["Onko hengitystie auki?"] ? (
              <p style={{ color: green }}>Kyllä</p>
            ) : (
              <p style={{ color: red }}>Ei</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="subject">{"Onko ilmatie estettä?"}</p>
          <div className="answer">
            {personData["Onko ilmatie estettä?"] ? (
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
              {personData["Hengitys - Normaali hengitys/ei ääniä"]
                ? "Normaali"
                : null}
            </p>
            <p style={{ color: red }}>
              {personData["Hengitys - Vinkuna"] ? "Vinkuna" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Hengitys - Korina"] ? "Korina" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Hengitys - Rohina"] ? "Rohina" : null}
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
            {personData["Tarkista syke:"] ? (
              <p style={{ color: green }}>Säännöllinen</p>
            ) : (
              <p style={{ color: red }}>Epäsäännöllinen</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="subject">{"Tuntuuko paikallista lämpöeroa?"}</p>
          <div className="answer">
            {personData["Tuntuuko lämpörajoja raajoissa:"] ? (
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
            {personData["Tajunta - Ei poikkeavia löydöksiä."] ? (
              "Ei poikkeavia löydöksiä."
            ) : (
              <div style={{ fontWeight: "bold", color: red }}>
                {personData.Tajunta}
              </div>
            )}
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
              {personData["Iho, paljastaminen - Normaali"] ? "Normaali" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Iho, paljastaminen - Kuiva"] ? "Kuiva" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Iho, paljastaminen - Kostea"] ? "Kostea" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Iho, paljastaminen - Kylmä"] ? "Kylmä" : null}
            </p>
            <p style={{ color: red }}>
              {personData["Iho, paljastaminen - Kuuma"] ? "Kuuma" : null}
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="subject">Onko iho muutoksia?</p>
          <div className="answer">
            {personData["Iho, paljastaminen - Ei poikkeavia löydöksiä"] ? (
              <p style={{ color: green }}>Ei</p>
            ) : (
              <p style={{ color: red }}>Kyllä</p>
            )}
          </div>
        </div>
        {personData.Iho ? (
          <p
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              lineHeight: "1.6rem",
              color: red
            }}
            className="answer"
          >
            {personData.Iho}
          </p>
        ) : null}
      </div>

      <hr />

      <div className="vitalValues">
        <h3>Vitaali-arvot:</h3>
        <div className="flex">
          <p className="vital-subject">{"hengitystaajuus:"}</p>
          <p className="vital-answer" style={{ color: hengitystaajuusStyle() }}>
            {personData.Hengitystaajuus}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Happisaturaatio:"}</p>
          <p className="vital-answer" style={{ color: happisaturaatioStyle() }}>
            {personData.Happisaturaatio}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Systolinen verenpaine:"}</p>
          <p
            className="vital-answer"
            style={{ color: systolinenVerenpaineStyle() }}
          >
            {personData["Systolinen verenpaine"]}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Syketaajuus:"}</p>
          <p className="vital-answer" style={{ color: SyketaajuusStyle() }}>
            {personData.Syketaajuus}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Tajunnan taso:"}</p>
          <div className="vital-answer">
            {personData["Tajunnan taso"] ? (
              <p style={{ color: green }}>Normaali</p>
            ) : (
              <p style={{ color: red }}>Poikkeava</p>
            )}
          </div>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Lämpötila:"}</p>
          <p className="vital-answer" style={{ color: lampotilaStyle() }}>
            {personData["Mittaa lämpötila"]}
          </p>
        </div>
        <div className="flex">
          <p className="vital-subject">{"Verensokeri:"}</p>
          <p className="vital-answer" style={{ color: verensokeriStyle() }}>
            {personData["Mittaa verensokeri:"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Report;

import React from "react";

function Report({ personData, controlData }) {
  // personData = controlled score, controlData = original score.
  const red = "#ad3e2f";
  const orange = "#db5400";
  const lightOrange = "#f0a171";
  const green = "#377d4f";
  const bold = "600";

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

  const hengitystaajuusBold = () => {
    if (personData.Hengitystaajuus <= 8 || personData.hengitystaajuus >= 25) {
      return bold;
    }
  };

  const hengitystaajuusStyle2 = () => {
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

  const hengitystaajuusBold2 = () => {
    if (controlData.Hengitystaajuus <= 8 || controlData.hengitystaajuus >= 25) {
      return bold;
    }
  };

  const hengitystaajuus = () => {
    if (controlData.Hengitystaajuus === undefined) {
      return null;
    } else {
      return personData.Hengitystaajuus;
    }
  };

  const hengitystaajuus2 = () => {
    if (controlData.Hengitystaajuus === undefined) {
      return personData.Hengitystaajuus;
    } else {
      return controlData.Hengitystaajuus;
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

  const happisaturaatioBold = () => {
    if (personData.Happisaturaatio <= 91) {
      return bold;
    }
  };

  const happisaturaatioStyle2 = () => {
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

  const happisaturaatioBold2 = () => {
    if (controlData.Happisaturaatio <= 91) {
      return bold;
    }
  };

  const happisaturaatio = () => {
    if (controlData.Happisaturaatio === undefined) {
      return null;
    } else {
      return personData.Happisaturaatio;
    }
  };

  const happisaturaatio2 = () => {
    if (controlData.Happisaturaatio === undefined) {
      return personData.Happisaturaatio;
    } else {
      return controlData.Happisaturaatio;
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

  const systolinenVerenpaineBold = () => {
    if (
      personData["Systolinen verenpaine"] <= 90 ||
      personData["Systolinen verenpaine"] >= 220
    ) {
      return bold;
    }
  };

  const systolinenVerenpaineStyle2 = () => {
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

  const systolinenVerenpaineBold2 = () => {
    if (
      controlData["Systolinen verenpaine"] <= 90 ||
      controlData["Systolinen verenpaine"] >= 220
    ) {
      return bold;
    }
  };

  const systolinenVerenpaine = () => {
    if (controlData["Systolinen verenpaine"] === undefined) {
      return null;
    } else {
      return personData["Systolinen verenpaine"];
    }
  };

  const systolinenVerenpaine2 = () => {
    if (controlData["Systolinen verenpaine"] === undefined) {
      return personData["Systolinen verenpaine"];
    } else {
      return controlData["Systolinen verenpaine"];
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

  const SyketaajuusBold = () => {
    if (personData.Syketaajuus <= 40 || personData.Syketaajuus >= 131) {
      return bold;
    }
  };

  const SyketaajuusStyle2 = () => {
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

  const SyketaajuusBold2 = () => {
    if (controlData.Syketaajuus <= 40 || controlData.Syketaajuus >= 131) {
      return bold;
    }
  };

  const syketaajuus = () => {
    if (controlData.Syketaajuus === undefined) {
      return null;
    } else {
      return personData.Syketaajuus;
    }
  };

  const syketaajuus2 = () => {
    if (controlData.Syketaajuus === undefined) {
      return personData.Syketaajuus;
    } else {
      return controlData.Syketaajuus;
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

  const lampotilaBold = () => {
    if (personData["Mittaa lämpötila"] <= 35) {
      return bold;
    }
  };

  const lampotilaStyle2 = () => {
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

  const lampotilaBold2 = () => {
    if (controlData["Mittaa lämpötila"] <= 35) {
      return bold;
    }
  };

  const lampotila = () => {
    if (controlData["Mittaa lämpötila"] === undefined) {
      return null;
    } else {
      return personData["Mittaa lämpötila"];
    }
  };

  const lampotila2 = () => {
    if (controlData["Mittaa lämpötila"] === undefined) {
      return personData["Mittaa lämpötila"];
    } else {
      return controlData["Mittaa lämpötila"];
    }
  };

  const verensokeriStyle = () => {
    if (
      personData["Mittaa verensokeri:"] <= 3.9 ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (personData["Mittaa verensokeri:"] >= 4 &&
        personData["Mittaa verensokeri:"] <= 6) ||
      (personData["Mittaa verensokeri:"] >= 20.1 &&
        personData["Mittaa verensokeri:"] <= 24.9)
    ) {
      return orange;
    } else if (
      personData["Mittaa verensokeri:"] >= 15 &&
      personData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      personData["Mittaa verensokeri:"] >= 6.1 &&
      personData["Mittaa verensokeri:"] <= 14.9
    ) {
      return green;
    }
  };

  const verensokeriBold = () => {
    if (
      personData["Mittaa verensokeri:"] <= 3.9 ||
      personData["Mittaa verensokeri:"] >= 25
    ) {
      return bold;
    }
  };

  const verensokeriStyle2 = () => {
    if (
      controlData["Mittaa verensokeri:"] <= 3.9 ||
      controlData["Mittaa verensokeri:"] >= 25
    ) {
      return red;
    } else if (
      (controlData["Mittaa verensokeri:"] >= 4 &&
        controlData["Mittaa verensokeri:"] <= 6) ||
      (controlData["Mittaa verensokeri:"] >= 20.1 &&
        controlData["Mittaa verensokeri:"] <= 24.9)
    ) {
      return orange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 15 &&
      controlData["Mittaa verensokeri:"] <= 20
    ) {
      return lightOrange;
    } else if (
      controlData["Mittaa verensokeri:"] >= 6.1 &&
      controlData["Mittaa verensokeri:"] <= 14.9
    ) {
      return green;
    }
  };

  const verensokeriBold2 = () => {
    if (
      controlData["Mittaa verensokeri:"] <= 3.9 ||
      controlData["Mittaa verensokeri:"] >= 25
    ) {
      return bold;
    }
  };

  let endTimeStamp = new Date().toLocaleTimeString(["en-GB"], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  // let endTime = endTimeStamp.toLocaleString([], {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit"
  // });

  return (
    <div className="report-container">
      <div className="sote-box">
        <h3>ABCDE-raportti:</h3>
        <p>{endTimeStamp}</p>
      </div>
      <div className="white-box">
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
            <p className="subject">{"Onko ilmatie-estettä?"}</p>
            <div className="answer">
              {personData["Onko ilmatie-estettä?"] ? (
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
                {personData["Hengitys - Normaali hengitys / ei ääniä"]
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
              <p style={{ color: red }}>
                {personData["Hengitys - Raskas hengitys"]
                  ? "Raskas hengitys"
                  : null}
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
            <p className="subject">{"Tuntuuko lämpörajoja raajoissa?"}</p>
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
            <p
              style={{
                width: "100%",
                fontWeight: "200",
                overflowWrap: "break-word"
              }}
              className="answer"
            >
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
                {personData["Iho, paljastaminen - Normaali"]
                  ? "Normaali"
                  : null}
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
                color: red,
                overflowWrap: "break-word"
              }}
              className="answer"
            >
              {personData.Iho}
            </p>
          ) : null}
        </div>
      </div>

      <div className="sote-box">
        <h3>Vitaali-arvot:</h3>
      </div>

      {/* -----------------------  TIMESTAMPS  ----------------------- */}

      <div className="white-box">
        <table>
          <tbody>
            <tr>
              <td>{"Hengitystaajuus:"}</td>
              <td
                style={{
                  color: hengitystaajuusStyle2(),
                  fontWeight: hengitystaajuusBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Hengitystaajuus_timestamp ? (controlData.Hengitystaajuus_timestamp) : (personData.Hengitystaajuus_timestamp)}
                </span>
                <br />
                {/* {controlData.Hengitystaajuus} */}
                {hengitystaajuus2()}
              </td>
              <td></td>
              <td
                style={{
                  color: hengitystaajuusStyle(),
                  fontWeight: hengitystaajuusBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData.Hengitystaajuus_timestamp}
                </span>
                <br />
                {/* {personData.Hengitystaajuus} */}
                {hengitystaajuus()}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                {"Happisaturaatio:"}
                <br />
                <p style={{ fontWeight: "bold" }}>
                  Huomioi asiakkaan keuhkosairaus SpO2 arvoa tulkittaessa.
                </p>
              </td>
              <td
                style={{
                  color: happisaturaatioStyle2(),
                  fontWeight: happisaturaatioBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Happisaturaatio_timestamp ? (controlData.Happisaturaatio_timestamp) : (personData.Happisaturaatio_timestamp)}
                </span>
                <br />
                {/* {controlData.Happisaturaatio} */}
                {happisaturaatio2()}
              </td>
              <td></td>
              <td
                style={{
                  color: happisaturaatioStyle(),
                  fontWeight: happisaturaatioBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData.Happisaturaatio_timestamp}
                </span>
                <br />
                {/* {personData.Happisaturaatio} */}
                {happisaturaatio()}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                {"Systolinen"} <br />
                {"Verenpaine:"}
              </td>
              <td
                style={{
                  color: systolinenVerenpaineStyle2(),
                  fontWeight: systolinenVerenpaineBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Systolinen verenpaine_timestamp"] ? (controlData["Systolinen verenpaine_timestamp"]) : (personData["Systolinen verenpaine_timestamp"])}
                </span>
                <br />
                {/* {controlData["Systolinen verenpaine"]} */}
                {systolinenVerenpaine2()}
              </td>
              <td></td>
              <td
                style={{
                  color: systolinenVerenpaineStyle(),
                  fontWeight: systolinenVerenpaineBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData["Systolinen verenpaine_timestamp"]}
                </span>
                <br />
                {/* {personData["Systolinen verenpaine"]} */}
                {systolinenVerenpaine()}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>{"Syketaajuus:"}</td>
              <td
                style={{
                  color: SyketaajuusStyle2(),
                  fontWeight: SyketaajuusBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData.Syketaajuus_timestamp ? (controlData.Syketaajuus_timestamp) : (personData.Syketaajuus_timestamp)}
                </span>
                <br />
                {/* {controlData.Syketaajuus} */}
                {syketaajuus2()}
              </td>
              <td></td>
              <td
                style={{
                  color: SyketaajuusStyle(),
                  fontWeight: SyketaajuusBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData.Syketaajuus_timestamp}
                </span>
                <br />
                {/* {personData.Syketaajuus} */}
                {syketaajuus()}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>{"Tajunnan taso:"}</td>
              {controlData["Tajunnan taso"] ? (
                <td style={{ color: green }}>Normaali</td>
              ) : (
                <td style={{ color: red, fontWeight: "bold" }}>Poikkeava</td>
              )}
              <td></td>
              {personData["Tajunnan taso"] ? (
                <td style={{ color: green }}>Normaali</td>
              ) : (
                <td style={{ color: red, fontWeight: "bold" }}>Poikkeava</td>
              )}
            </tr>
            <tr></tr>
            <tr>
              <td>{"Lämpötila:"}</td>
              <td
                style={{
                  color: lampotilaStyle2(),
                  fontWeight: lampotilaBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Mittaa lämpötila_timestamp"] ? (controlData["Mittaa lämpötila_timestamp"]) : (personData["Mittaa lämpötila_timestamp"])}
                </span>
                <br />
                {/* {controlData["Mittaa lämpötila"]} */}
                {lampotila2()}
              </td>
              <td></td>
              <td
                style={{ color: lampotilaStyle(), fontWeight: lampotilaBold() }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData["Mittaa lämpötila_timestamp"]}
                </span>
                <br />
                {/* {personData["Mittaa lämpötila"]} */}
                {lampotila()}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                {"Verensokeri:"}
                <br />
                <p style={{ fontWeight: "bold" }}>
                  Huomioi insuliini DM paasto VS tavoite.
                </p>
              </td>
              <td
                style={{
                  color: verensokeriStyle2(),
                  fontWeight: verensokeriBold2()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {controlData["Mittaa verensokeri:_timestamp"]}
                </span>
                <br />
                {controlData["Mittaa verensokeri:"]
                  ? controlData["Mittaa verensokeri:"]
                  : "Ei mitattu"}
              </td>
              <td></td>
              <td
                style={{
                  color: verensokeriStyle(),
                  fontWeight: verensokeriBold()
                }}
              >
                <span
                  style={{
                    display: "contents",
                    color: "rgb(33, 33, 33)",
                    fontWeight: "400"
                  }}
                >
                  {personData["Mittaa verensokeri:_timestamp"]}
                </span>
                <br />
                {personData["Mittaa verensokeri:"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="vitalValues">

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
          <p className="vital-subject" style={{ color: red }}>
            Huomioi asiakkaan keuhkosairaus SpO2 arvoa tulkittaessa.
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
      </div> */}
    </div>
  );
}

export default Report;

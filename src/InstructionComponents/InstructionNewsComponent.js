import React from "react";
import NewsComponent from "../Components/NewsComponent";
import DoubleButton from "../Components/DoubleButton";

function InstructionNewsComponent({
  history,
  setPersonData,
  personData,
  ControlCardVisibility,
  setControlCardVisibility,
  controlData,
  setcontrolData
}) {

  return (
    <div>
      {controlData["Hengitystaajuus - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Hengitystaajuus</h1>
          <p>
            Laske rintakehän liikkeet minuutin ajalta. Asiakkaan pitäisi olla
            puhumatta tämän ajan.
          </p>
          <NewsComponent
            name={"Hengitystaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[8, null, [9, 11], [12, 20], null, [21, 24], 25]}
          />
        </div>
      ) : null}

      {controlData["Happisaturaatio - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Happisaturaatio</h1>
          <p style={{ marginBottom: "0px" }}>
            Aseta Spo2 mittari asiakkaan sormeen noin 1-2 minuutin ajaksi.
          </p>
          <p style={{ marginTop: "20px" }}>
            Huomioi asiakkaan keuhkosairaus Spo2 arvoa tulkittaessa.
          </p>
          <NewsComponent
            name={"Happisaturaatio"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[91, [92, 93], [94, 95], 96, null, null, null]}
          />
        </div>
      ) : null}

      {controlData["Systolinen verenpaine - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Systolinen verenpaine</h1>
          <p>Mittaa verenpaine istuen voinnin salliessa.</p>
          <NewsComponent
            name={"Systolinen verenpaine"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[90, [91, 100], [101, 110], [111, 219], null, null, 220]}
          />
        </div>
      ) : null}

      {controlData["Syketaajuus - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Syketaajuus</h1>
          <p>Tunnustele ranteesta tai tarvittaessa kyynärpäästä.</p>
          <NewsComponent
            name={"Syketaajuus"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[40, null, [41, 50], [51, 90], [91, 110], [111, 130], 131]}
          />
        </div>
      ) : null}

      {controlData["Mittaa lämpötila - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Lämpötila</h1>
          <p>Mittaa lämpötila kainalosta/korvasta.</p>
          <NewsComponent
            name={"Mittaa lämpötila"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[
              35.0,
              null,
              [35.1, 36.0],
              [36.1, 38.0],
              [38.1, 39.0],
              39.1,
              null
            ]}
          />
        </div>
      ) : null}

      {controlData["Tajunnan taso"] === false ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Tajunnan taso:</h1>
          <p>
            Asiakkaan käytös/tajunta. Tarvittaessa konsultoi kolleegaa/omaista
            saadaksesi lisätietoa asiakkaan käyttäytymisestä/tajunnan tasosta.
          </p>
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
        </div>
      ) : null}

      {controlData["Mittaa verensokeri:"] >= 0.1 && controlData["Mittaa verensokeri: - NEWSscore"] >= 1 ? (
        <div
          className={
            "instruction-news-component" +
            (ControlCardVisibility ? " active" : "")
          }
        >
          <h1>Verensokeri</h1>
          <p>Mittaa verensokeri.</p>
          <NewsComponent
            name={"Mittaa verensokeri:"}
            personData={personData}
            setPersonData={setPersonData}
            cells={[3.9, [4, 6], null, [6.1, 14.9], [15, 20], [20.1, 24.9], 25]}
          />
        </div>
      ) : null}

      <div
        onClick={() => {
          // console.log("beep");
          window.scrollTo(0, 0);
          history.push("/instructionPageTwo");
          // console.log(controlData);
        }}
        className={"controlDone-btn" + (ControlCardVisibility ? " active" : "")}
      >
        Kontrolli valmis
      </div>
    </div>
  );
}

export default InstructionNewsComponent;

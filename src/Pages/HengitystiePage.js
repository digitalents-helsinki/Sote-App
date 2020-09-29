import React, { useState } from "react";
import DoubleButton from "../Components/DoubleButton";
import Page from "../Components/Page";

function HengitystiePage({ personData, setPersonData, careType }) {
  const [hoitoOhje_handler_1, setHoitoOhje_handler_1] = useState(false);
  const [hoitoOhje_handler_2, setHoitoOhje_handler_2] = useState(false);

  const elvytysInstruction = {
    Kotihoito: (
      <span>
        <span style={{ fontWeight: "600" }}>Aloita elvytys,</span> jos henkilö
        menee{" "}
        <span style={{ fontWeight: "600" }}>
          tajuttomaksi eikä hengitä normaalisti.
        </span>{" "}
        Ilmoita muuttuneesta tilanteesta hätäkeskukseen.
      </span>
    ),
    "Ympärivuorokautinen hoiva": (
      <span>
        <span style={{ fontWeight: "600" }}>
          Mikäli potilaalla ei rajoituksia
        </span>{" "}
        elvytyksen suhteen, aloita painelupuhalluselvytys, jos henkilö menee{" "}
        <span style={{ fontWeight: "600" }}>
          tajuttomaksi eikä hengitä normaalisti.
        </span>{" "}
        Ilmoita muuttuneesta tilanteesta hätäkeskukseen, jos on aiemmin tehty
        hälytys.
      </span>
    )
  }[careType];

  const hoitoOhje_1 = (
    <span>
      <span>
        Avaa hengitystiet kohottamalla toisen käden kahdella sormella leuan
        kärkeä ylöspäin ja taivuttamalla päätä taaksepäin toisella kädellä otsaa
        painaen.{" "}
        <span style={{ fontWeight: "600" }}>
          Hengittääkö potilas normalisti?
        </span>
      </span>
      <br />
      <br />
      <span
        style={{ fontWeight: "600" }}
        onClick={() => setHoitoOhje_handler_1(!hoitoOhje_handler_1)}
      >
        Kyllä {hoitoOhje_handler_1 ? "↓" : "→"}
      </span>

      <br />
      <span>
        {hoitoOhje_handler_1 && (
          <>
            <br />
            Jos{" "}
            <span style={{ fontWeight: "600" }}>
              ilmavirtaus tuntuu omalla poskella tai kädenselällä ja rintakehä
              nousee säännöllisesti,
            </span>{" "}
            käännä asiakas{" "}
            <span style={{ fontWeight: "600" }}>
              kylkiasentoon hengityksen turvaamiseksi{" "}
            </span>
            ja jatka tutkimusta. <br />
          </>
        )}
      </span>

      <br />
      <span
        style={{ fontWeight: "600" }}
        onClick={() => setHoitoOhje_handler_2(!hoitoOhje_handler_2)}
      >
        Ei {hoitoOhje_handler_2 ? "↓" : "→"}
      </span>

      <br />
      <span>
        {hoitoOhje_handler_2 && (
          <>
            <span style={{ fontWeight: "600" }}>
              <br />
              Jos ei reagoi, eikä hengitä normalisti,
            </span>{" "}
            soita 112 ja <span style={{ fontWeight: "600" }}>aloita PPE</span> =
            painelu-puhalluselvytys.{" "}
            <span style={{ fontWeight: "600" }}>Huom:</span> jos asiakkaalla{" "}
            <span style={{ fontWeight: "600" }}>DNR → konsultoi lääkäri</span>
          </>
        )}
      </span>
    </span>
  );

  const hoitoOhje_2 = (
    <span>
      <span style={{ display: "inline-flex", flexDirection: "row" }}>
        <span style={{ marginRight: "10px" }}>→</span>
        <span>
          Poista ilmatie-este taivuttamalla autettavan ylävartaloa alaspäin
          tukien vartalosta. Lyö sen jälkeen{" "}
          <span style={{ fontWeight: "600" }}>
            kämmenellä napakasti 5 kertaa lapaluiden väliin.
          </span>{" "}
          Mikäli vierasesine ei poistu nielusta ja olet paikalla yksin,{" "}
          <span style={{ fontWeight: "600" }}>soita 112.</span>
        </span>
      </span>

      <br />
      <br />

      <span style={{ display: "inline-flex", flexDirection: "row" }}>
        <span style={{ marginRight: "10px" }}>→</span>
        <span>
          Jatka ensiapua puristus- eli Heimlich-otteella.{" "}
          <span style={{ fontWeight: "600" }}>
            Asetu autettavan taakse ja aseta toinen kätesi nyrkissä autettavan
            pallean alle.
          </span>{" "}
          Tartu nyrkkiin toisella kädelläsi. Nykäise rivakalla otteella taakse-
          ja ylöspäin.{" "}
          <span style={{ fontWeight: "600" }}>
            Toista nykäisyt tarvittaessa viisi kertaa.
          </span>{" "}
          Mikäli tuke ei poistu,{" "}
          <span style={{ fontWeight: "600" }}>
            vuorottele 5 lyöntiä lapaluiden väliin, 5 nykäisyä.
          </span>
        </span>
      </span>
      <br />
      <br />
      <span style={{ display: "inline-flex", flexDirection: "row" }}>
        <span style={{ marginRight: "10px" }}>→</span>
        {elvytysInstruction}
      </span>
    </span>
  );

  return (
    <Page title="Hengitystie" paragraph="Tarkista asiakkaan hengitystiet">
      <DoubleButton
        header={"Onko hengitystie auki?"}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={hoitoOhje_1}
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButton
        header={"Onko ilmatie-estettä?"}
        redFirst={true}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={hoitoOhje_2}
        personData={personData}
        setPersonData={setPersonData}
      />
    </Page>
  );
}

export default HengitystiePage;

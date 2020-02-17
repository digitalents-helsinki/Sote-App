import React from "react";
import DoubleButton from "../Components/DoubleButton";
import NextButton from "../Components/NextButton";
import Page from "../Components/Page";

function HengitystiePage({ personData, setPersonData }) {
  const buttonActive = [
    typeof personData["Onko hengitystie auki?"],
    typeof personData["Onko ilmatie estettä?"]
  ].every(type => type === "boolean");

  return (
    <Page title="Hengitystie" paragraph="Tarkista asiakkaan hengitystiet">
      <DoubleButton
        header={"Onko hengitystie auki?"}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={
          <>
            Avaa hengitystiet kohottamalla toisen käden kahdella sormella leuan
            kärkeä ylöspäin ja taivuttamalla päätä taaksepäin toisella kädellä
            otsaa painaen.{" "}
            <span style={{ fontWeight: "600" }}>
              Hengittääkö potilas normalisti?
            </span>
            <br />
            <br />
            Jos{" "}
            <span style={{ fontWeight: "600" }}>
              ilmavirtaus tuntuu omalla poskella tai kädenselällä ja rintakehä
              nousee säännöllisesti,
            </span>{" "}
            käännä asiakas{" "}
            <span style={{ fontWeight: "600" }}>
              kylkiasentoon hengityksen turvaamiseksi
            </span>{" "}
            ja jatka tutkimusta.
            <br />
            <br />
            <span style={{ fontWeight: "600" }}>
              Jos ei reagoi, eikä hengitä normaalisti,
            </span>{" "}
            soita 112 ja <span style={{ fontWeight: "600" }}>aloita PPE</span> =
            painelu-puhallaselvytys. HUOM: jos asiakkaalla{" "}
            <span style={{ fontWeight: "600" }}>DNR -> konsultoi lääkäri.</span>
          </>
        }
        personData={personData}
        setPersonData={setPersonData}
      />
      <DoubleButton
        header={"Onko ilmatie estettä?"}
        redFirst={true}
        hoitoOhjeHeader={"Hoito-ohje"}
        hoitoOhje={""}
        personData={personData}
        setPersonData={setPersonData}
      />
      <NextButton buttonActive={buttonActive} nextPage={"/hengitys"} />
    </Page>
  );
}

export default HengitystiePage;

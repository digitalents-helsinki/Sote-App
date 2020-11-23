import React from "react";

var EmergencySymptomsContent = {
  aivoverenkierronhairio: {
    header: "AIVOVERENKIERRONHÄIRIÖ",
    span: "(UUSI OIRE)",

    instructions: (
      <>
        Puhe "puuroutunut", ohimennyt puheentuotonhäiriö, ohimennyt puoliero
        raajassa, sekavuus, puoliero raajoissa, raajapuoliheikkous, suupieli
        roikkuu, näköhäiriö, päänsärky, pahoinvointi.
      </>
    )
  },

  elottomuus: {
    Kotihoito: {
      header: "ELOTTOMUUS",
      span: " ",

      instructions: (
        <>
          Ei reagoi, ei hengitysliikkeitä tai harvoja, epäsäännöllisiä,
          äänekkäitä hengitysliikkeitä &rarr;{" "}
          <span style={{ fontWeight: "600" }}>
            SOITA 112. HUOM: Mikäli on DNR-päätös,
          </span>{" "}
          soitto omalle hoitajalle tai lääkärille, ei 112.{" "}
        </>
      )
    },
    "Ympärivuorokautinen hoiva": {
      header: "ELOTTOMUUS",
      span: " ",

      instructions: (
        <>
          Ei reagoi, ei hengitysliikkeitä tai harvoja, epäsäännöllisiä,
          äänekkäitä hengitysliikkeitä &rarr;{" "}
          <span style={{ fontWeight: "600" }}>
            Soita konsultoivalle lääkärille.
          </span>{" "}
          Huomioi hoitosuunnitelma, hoidon rajaukset ja linjaukset.{" "}
          <span style={{ fontWeight: "600" }}>
            Mikäli potilaalla ei rajoituksia
          </span>{" "}
          elvytyksen suhteen, aloita painelupuhalluselvytys.
        </>
      )
    }
  },

  hengenahdistus: {
    header: "HENGENAHDISTUS",
    span: " ",

    instructions: (
      <>
        Äkillisesti alkanut, apuhengityslihakset käytössä, puhuu maksimissaan
        yksittäisiä sanoja, hengitystaajuus yli 25/min.
      </>
    )
  },

  hyperglykemia: {
    header: "HYPERGLYKEMIA, kohonnut verensokeri",
    span: " ",

    instructions: (
      <>
        Verensokeri yli 25 mmol/l tai{" "}
        <span style={{ fontWeight: "600" }}>HIGH</span> (mittarinäyttö),{" "}
        <span style={{ fontWeight: "600" }}>ja OIREITA</span> (kuivumisen
        merkit, jano, väsymys, tajunnantason lasku, runsasvirtsaisuus).
      </>
    )
  },

  hypoglykemia: {
    header: "HYPOGLYKEMIA, alhainen verensokeri",
    span: " ",

    instructions: (
      <>
        Verensokeri alle 4 mmol/l ja lisäksi{" "}
        <span style={{ fontWeight: "600" }}>voimakkaat oireet</span> tai{" "}
        <span style={{ fontWeight: "600" }}>tajuton.</span>
      </>
    )
  },

  kouristaminen: {
    header: "KOURISTAMINEN",
    span: " ",

    instructions: <>Raajat ja vartalon lihakset kouristelevat, ei kontaktia.</>
  },

  myrkytysJaTajunta: {
    header: "MYRKYTYS JA TAJUNNANTASON LASKU TAI MUU LÖYDÖS",
    span: " ",

    instructions: (
      <>
        Insuliinit, verenohennuslääke, rauhoittavat lääkkeet, opioidit (vahvat
        kipulääkkeet), beetasalpaaja (esim. Bisoprolol), kalsium-salpaaja (esim.
        Amplodipin, Dilzem), neuroleptit (esim. Ketipinor, Risperdal),
        paracetamol, NSAID-lääkkeet (mm. Burana ym.), digoksiini.
      </>
    )
  },

  rintakipu: {
    header: "RINTAKIPU, EIKÄ 3 NITROA AUTA",
    span: " ",

    instructions: (
      <>
        Äkillisesti alkanut, puristava, kylmähikinen, säteilee vasempaan käteen,
        lapojen väliin, leukaperiin.
      </>
    )
  },

  tajuton: {
    header: "TAJUTON",
    span: " ",

    instructions: <>Hengitysliikkeitä, ilmavirtaus tuntuu, rannesyke tuntuu.</>
  },

  trauma: {
    header: "TRAUMA",
    span: " ",

    instructions: (
      <>
        Ei pääse ylös, ei pysty varaamaan, mahdollinen virheasento tai päähän
        kohdistuva trauma ja{" "}
        <span style={{ fontWeight: "600" }}>alentunut tajunnantaso.</span>
      </>
    )
  },

  vitaalihairio: {
    header: "VITAALIHÄIRIÖ",
    span: " ",

    instructions: (
      <>
        <span style={{ fontWeight: "600" }}>
          NEWS-pisteet: yksittäisestä mittauksesta 3 pistettä
        </span>{" "}
        tai{" "}
        <span style={{ fontWeight: "600" }}>yhteensä vähintään 4 pistettä</span>{" "}
        ja{" "}
        <span style={{ fontWeight: "600" }}>
          poikkeaa lähtötilanteesta. &rarr; Kts. News-taulukko.
        </span>
      </>
    )
  },

  voimakasallergia: {
    header: "VOIMAKAS ALLERGINEN REAKTIO",
    span: " ",

    instructions: (
      <>
        Ihon kuumotusta, punoitusta, pistelyä ja kutinaa, turvotusta kasvojen
        alueella, äänen käheys, yskänpuuskat, hengitys vinkuu, sydämen
        runsaslyöntisyys.
      </>
    )
  },

  voimakasverenvuoto: {
    header: "VOIMAKAS VERENVUOTO",
    span: " ",

    instructions: <>Haava, nenä, sukupuolialue, peräaukko.</>
  }
};

export default EmergencySymptomsContent;

import React from "react";
import Arrow from "../Images/arrow-white.svg";
import hatatilanne from "../Images/hatatilanne.png";
import SymptomCard from "../Components/SymptomCard";
import ESC from "../Components/EmergencySymptomsContent";
import helsinki from "../Images/helsinki.png";

function EmergencyPage({ setEmergencyVisibility, visibility, careType }) {
  return (
    <div
      className={
        "emergencyPage-container" +
        (typeof visibility === "boolean"
          ? visibility
            ? " active"
            : " inactive"
          : "")
      }
    >
      <div className="emergencyPage-topBar">
        <img
          src={Arrow}
          alt="arrow.svg"
          onClick={() => setEmergencyVisibility(false)}
        ></img>
        <h2>Hätätilanneoireet</h2>
      <img className="helsinki"
        src={helsinki}
        alt=""
      ></img>
      </div>
      <div className="symptoms-container">
        <SymptomCard content={ESC.aivoverenkierronhairio} />
        <SymptomCard
          content={
            careType ? ESC.elottomuus[careType] : ESC.elottomuus.Kotihoito
          }
        />
        <SymptomCard content={ESC.hengenahdistus} />
        <SymptomCard content={ESC.hyperglykemia} />
        <SymptomCard content={ESC.hypoglykemia} />
        <SymptomCard content={ESC.kouristaminen} />
        <SymptomCard content={ESC.myrkytysJaTajunta} />
        <SymptomCard content={ESC.rintakipu} />
        <SymptomCard content={ESC.tajuton} />
        <SymptomCard content={ESC.trauma} />
        <SymptomCard content={ESC.vitaalihairio} />
        <SymptomCard content={ESC.voimakasallergia} />
        <SymptomCard content={ESC.voimakasverenvuoto} />
        <div className="hatatilanne-image">
          <img src={hatatilanne} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmergencyPage;

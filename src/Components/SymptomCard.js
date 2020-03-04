import React, { useRef, useState } from "react";
import Dropdown from "../Images/dropdown.svg";

function SymptomCard(props) {
  const instructionsRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState("rotate(0deg)");

  const handler = () => {
    if (instructionsRef.current.style.height === "0px") {
      instructionsRef.current.style.height = "auto";

      const instructionsHeight = instructionsRef.current.clientHeight;

      instructionsRef.current.style.height = "0px";
      setTimeout(
        () => (instructionsRef.current.style.height = instructionsHeight + "px")
      );
      setTimeout(() => (instructionsRef.current.style.opacity = "1"), 150);

      setDropdownStyle("rotate(-180deg)");
    } else {
      setTimeout(() => (instructionsRef.current.style.height = "0px"), 150);
      instructionsRef.current.style.opacity = "0";

      setDropdownStyle("rotate(0deg)");
    }
  };

  return (
    <div className="symptom-card">
      <div className="header-content" onClick={handler}>
        <h4>
          {props.content.header}
          <br />
          <span>{props.content.span}</span>
        </h4>
        <div className="dropdown-btn">
          <img
            style={{ transform: dropdownStyle }}
            src={Dropdown}
            alt="dropdown"
          ></img>
        </div>
      </div>
      <div
        className="instructions"
        style={{ height: "0px", opacity: "0" }}
        ref={instructionsRef}
      >
        <p>{props.content.instructions}</p>
      </div>
    </div>
  );
}

export default SymptomCard;

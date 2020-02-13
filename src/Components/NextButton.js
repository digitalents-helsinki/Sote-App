import React from "react";
import { createPortal } from "react-dom";
import { useHistory, useLocation } from "react-router-dom";

const NextButton = ({ onClick, buttonActive, nextPage }) => {
  const history = useHistory();
  const clickHandler =
    onClick ||
    (() => {
      if (buttonActive) {
        history.push(nextPage);
      }
    });

  const component = (
    <div className="nextButtondiv">
      <button
        className={
          buttonActive
            ? "nextButtoninactive nextButtonactive"
            : "nextButtoninactive"
        }
        onClick={clickHandler}
      >
        {" "}
        Seuraava{" "}
      </button>
    </div>
  );

  return createPortal(component, document.getElementById("portal-root"));
};

export default NextButton;

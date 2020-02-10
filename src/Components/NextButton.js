import React from "react";
import { useHistory } from "react-router-dom";

const NextButton = ({ onClick, buttonActive, nextPage }) => {
  const history = useHistory();
  const clickHandler =
    onClick ||
    (() => {
      if (buttonActive) {
        window.scrollTo(0, 0);
        history.push(nextPage);
      }
    });

  return (
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
};

export default NextButton;

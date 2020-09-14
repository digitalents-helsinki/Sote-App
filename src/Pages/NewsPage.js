import React from "react";
import Arrow from "../Images/arrow-white.svg";

function NewsPage({ setNewsVisibility, visibility }) {
  return (
    <div
      className={
        "newsPage-container" +
        (typeof visibility === "boolean"
          ? visibility
            ? " active"
            : " inactive"
          : "")
      }
    >
      <div className="newsPage-topBar">
        <img
          src={Arrow}
          alt="arrow.svg"
          onClick={() => setNewsVisibility(false)}
        ></img>
        <h2>NEWS</h2>
      </div>
    </div>
  );
}

export default NewsPage;

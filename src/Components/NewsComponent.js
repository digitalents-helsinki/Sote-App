import React, { useRef } from "react";

// When implementing a Newscomponent on any of the pages, pass in the State-Variables: "personData" and "setPersonData" to update the global variable as props. Also pass in a "name" prop to indicate what the key in the "personData" object should be.
function NewsComponent(props) {
  const newsRef = useRef(null);
  //  const keyvalue = `${props.name} - NEWSscore`;

  function renderCells() {
    function calculateActiveState(cell, idx) {
      if (!props.personData[props.name] || cell === null) {
        return "";
      }
      if (Array.isArray(cell)) {
        if (
          props.personData[props.name] >= cell[0] &&
          props.personData[props.name] <= cell[1]
        ) {
          return "active";
        }
      } else if (
        (!idx && props.personData[props.name] <= cell) ||
        (idx && props.personData[props.name] >= cell)
      ) {
        return "active";
      }
      return "";
    }

    return props.cells.map((cell, idx) => {
      if (cell === null) {
        return (
          <div
            className={`news-meter-cell n${idx + 1} ${calculateActiveState(
              cell,
              idx
            )}`}
            key={idx}
          ></div>
        );
      } else if (Array.isArray(cell)) {
        return (
          <div
            className={`news-meter-cell n${idx + 1} ${calculateActiveState(
              cell,
              idx
            )}`}
            key={idx}
          >{`${cell[0]}-${cell[1]}`}</div>
        );
      } else {
        return (
          <div
            className={`news-meter-cell n${idx + 1} ${calculateActiveState(
              cell,
              idx
            )}`}
            key={idx}
          >{`${!idx ? "≤ " : "≥ "}${cell}`}</div>
        );
      }
    });
  }

  return (
    <div className="news-container">
      <input
        className="news-input"
        type="number"
        placeholder={
          props.personData[props.name] ? props.personData[props.name] : ""
        }
        onFocus={() => {
          const scrollParent =
            document.querySelector(".Page") ||
            document.querySelector(".instruction-page-container");
          const y =
            newsRef.current.getBoundingClientRect().top +
            (scrollParent.scrollY || scrollParent.scrollTop) -
            (window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight) /
              2.5;
          const scrollToNews = () => {
            try {
              scrollParent.scrollTo({ top: y, behavior: "smooth" });
            } catch (err) {
              console.log(err);
              scrollParent.scrollTop = y;
            }
          };
          scrollToNews();
          // detect mobile keyboard popping up and then scroll
          (function listenToWindowHeight(originalWindowHeight, startTime) {
            if (
              originalWindowHeight !==
              (window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight)
            ) {
              scrollToNews();
            } else if (startTime + 2000 > Date.now()) {
              setTimeout(
                listenToWindowHeight,
                0,
                originalWindowHeight,
                startTime
              );
            }
          })(
            window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight,
            Date.now()
          );
        }}
        onChange={e => {
          const inputValue = Number(e.target.value);

          const getNewsFromIndex = index => [3, 2, 1, 0, 1, 2, 3][index];
          const NEWSscore = props.cells.reduce((score, cell, idx) => {
            if (score !== null) return score;
            if (cell) {
              if (Array.isArray(cell)) {
                if (inputValue >= cell[0] && inputValue <= cell[1]) {
                  return getNewsFromIndex(idx);
                }
              } else if (idx === 0) {
                if (inputValue <= cell) return getNewsFromIndex(idx);
              } else if (cell <= inputValue) return getNewsFromIndex(idx);
            }
            return score;
          }, null);

          const verensokeriscore = props.cells.reduce((score, cell, idx) => {
            if (score !== null) return score;
            if (cell) {
              if (Array.isArray(cell)) {
                if (inputValue >= cell[0] && inputValue <= cell[1]) {
                  return getNewsFromIndex(idx);
                }
              } else if (idx === 0) {
                if (inputValue <= cell) return getNewsFromIndex(idx);
              } else if (cell <= inputValue) return getNewsFromIndex(idx);
            }
            return score;
          }, null);

          //Update personData
          const keyvalue = `${props.name} - NEWSscore`;
          const sokerivalue = `${props.name} - verensokeriscore`;

          const tsname = `${props.name}_timestamp`;
          const ts = new Date().toLocaleTimeString(['en-GB'], {
            hour: "2-digit",
            minute: "2-digit"
          });

          const oldData = props.personData;
          const newData = {
            ...oldData,
            [props.name]: inputValue,
            [keyvalue]: NEWSscore,
            [sokerivalue]: verensokeriscore,
            [tsname]: ts
          };
          props.setPersonData(newData);

          //--Update personData
        }}
      />
      <div className="news-meter" ref={newsRef}>
        {renderCells()}
      </div>
    </div>
  );
}

export default NewsComponent;

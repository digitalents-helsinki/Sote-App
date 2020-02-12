import React, { useRef } from "react";

// When implementing a Newscomponent on any of the pages, pass in the State-Variables: "personData" and "setPersonData" to update the global variable as props. Also pass in a "name" prop to indicate what the key in the "personData" object should be.
function NewsComponent(props) {
  const newsRef = useRef(null);
  //  const keyvalue = `${props.name} - NEWSscore`;

  console.log(props);

  function renderCells() {
    function calculateActiveState(cell, idx) {
      if (props.personData[props.name] === 0 || cell === null) {
        return "";
      }
      if (Array.isArray(cell)) {
        if (
          props.personData[props.name] >= cell[0] &&
          props.personData[props.name] <= cell[1]
        ) {
          return "active";
        } else {
          return "";
        }
      } else {
        if (
          (idx < 3 && props.personData[props.name] <= cell) ||
          (idx >= 3 && props.personData[props.name] >= cell)
        ) {
          return "active";
        } else {
          return "";
        }
      }
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
          >{`${idx < 3 ? "≤ " : "≥ "}${cell}`}</div>
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
          window.scrollTo(
            0,
            newsRef.current.offsetTop -
              newsRef.current.offsetParent.clientHeight / 2
          );
          // detect mobile keyboard popping up and then scroll
          (function listenToWindowHeight(originalWindowHeight, startTime) {
            if (
              originalWindowHeight !==
              (window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight)
            ) {
              window.scrollTo(
                0,
                newsRef.current.offsetTop -
                  newsRef.current.offsetParent.clientHeight / 2
              );
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

          let NEWSscore;

          if (
            props.cells[3] &&
            (inputValue === props.cells[3] ||
              (inputValue >= props.cells[3][0] &&
                inputValue <= props.cells[3][1]))
          ) {
            NEWSscore = 0;
            console.log("NEWSscore = 0");
          } else if (
            props.cells[2] &&
            (inputValue === props.cells[2] ||
              (inputValue >= props.cells[2][0] &&
                inputValue <= props.cells[2][1]))
          ) {
            NEWSscore = 1;
            console.log("NEWSscore = 1");
          } else if (
            props.cells[4] &&
            (inputValue === props.cells[4] ||
              (inputValue >= props.cells[4][0] &&
                inputValue <= props.cells[4][1]))
          ) {
            NEWSscore = 1;
            console.log("NEWSscore = 1");
          } else if (
            props.cells[1] &&
            (inputValue === props.cells[1] ||
              (inputValue >= props.cells[1][0] &&
                inputValue <= props.cells[1][1]))
          ) {
            NEWSscore = 2;
            console.log("NEWSscore = 2");
          } else if (
            props.cells[5] &&
            (inputValue === props.cells[5] ||
              (inputValue >= props.cells[5][0] &&
                inputValue <= props.cells[5][1]))
          ) {
            NEWSscore = 2;
            console.log("NEWSscore = 2");
          } else {
            NEWSscore = 3;
            console.log("NEWSscore = 3");
          }
          //Update personData
          const keyvalue = `${props.name} - NEWSscore`;
          const oldData = props.personData;
          const newData = {
            ...oldData,
            [props.name]: Number(e.target.value),
            [keyvalue]: NEWSscore
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

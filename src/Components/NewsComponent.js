import React, { useState } from "react";

// When implementing a Newscomponent on any of the pages, pass in the State-Variables: "personData" and "setPersonData" to update the global variable as props. Also pass in a "name" prop to indicate what the key in the "personData" object should be.
function NewsComponent(props) {
  const [input, setInput] = useState(0);
  console.log(props);

  function renderCells() {
    function calculateActiveState(cell, idx) {
      if (input === 0 || cell === null) {
        return "";
      }
      if (Array.isArray(cell)) {
        if (input >= cell[0] && input <= cell[1]) {
          return "active";
        } else {
          return "";
        }
      } else {
        if ((idx < 3 && input <= cell) || (idx >= 3 && input >= cell)) {
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

  /*   useEffect(() => {
        const domCells = [...document.getElementsByClassName('news-meter-cell')]
        const addStyleBasedOnIndex = index => {
            const domCellIndex = domCells.findIndex(node => node.classList.contains(`n${index + 1}`))
            domCells[domCellIndex].classList.add('active')
            domCells.splice(domCellIndex, 1)
        }
        if (input || input === 0) {
            props.cells.forEach((cell, idx) => {
                if (Array.isArray(cell)) {
                    if (input >= cell[0] && input <= cell[1]) {
                        addStyleBasedOnIndex(idx)
                    } else {
                        domCells.forEach(cell => cell.classList.remove('active'))
                    }
                } else if (cell !== null) {
                    if ((input <= cell) ||( input >= cell)) {
                        addStyleBasedOnIndex(idx)
                    } else {
                        domCells.forEach(cell => cell.classList.remove('active'))
                    }
                }
            });
        } else {
            domCells.forEach(cell => cell.classList.remove('active'))
        }
    }, [input, props.cells])*/

  return (
    <div className="news-container">
      <input
        className="news-input"
        type="number"
        onChange={e => {
          const inputValue = Number(e.target.value);
          setInput(inputValue);

          let NEWSscore = undefined;

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
      <div className="news-meter">{renderCells()}</div>
    </div>
  );
}

export default NewsComponent;

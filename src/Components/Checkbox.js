import React from "react";

function Checkbox(props) {
  return (
    <div className="checkboxComponent">
      <form>
        <p>{props.checkboxlabel}</p>
        <input
          className="checkbox-input"
          type="checkbox"
          onInput={() => {
            if (props.personData[props.checkboxlabel] === true) {
              const oldData = props.personData;
              const newData = {
                ...oldData,
                [props.checkboxlabel]: false
              };
              props.setPersonData(newData);
            } else {
              const oldData = props.personData;
              const newData = {
                ...oldData,
                [props.checkboxlabel]: true
              };
              props.setPersonData(newData);
            }
          }}
        />
      </form>
    </div>
  );
}

export default Checkbox;

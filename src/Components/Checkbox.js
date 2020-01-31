import React from "react";

//to add a Checkbox component, pass in "personData" and "setPersonData" as props to allow access to the personData variable. Also pass in "checkboxlabel" for the checkbox name and a "Title" to indicate the subject in the personData variable

function Checkbox(props) {
  const keyvalue = `${props.subject} - ${props.checkboxlabel}`;
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
                [keyvalue]: false
              };
              props.setPersonData(newData);
            } else {
              const oldData = props.personData;
              const newData = {
                ...oldData,
                [keyvalue]: true
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

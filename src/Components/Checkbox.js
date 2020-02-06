import React from "react";

//to add a Checkbox component, pass in "personData" and "setPersonData" as props to allow access to the personData variable. Also pass in "checkboxlabel" for the checkbox name and a "subject to indicate the title in the personData variable

function Checkbox(props) {
  let keyvalue = `${props.subject} - ${props.checkboxlabel}`;
  let isChecked = false;
  if (props.personData[keyvalue]) {
    isChecked = true;
    console.log("Beep");
  }

  return (
    <div className="checkboxComponent">
      <form>
        <p>{props.checkboxlabel}</p>
        <input
          className="checkbox-input"
          type="checkbox"
          defaultChecked={isChecked}
          onInput={() => {
            let keyvalue = `${props.subject} - ${props.checkboxlabel}`;

            if (props.personData[keyvalue] === true) {
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

import React from "react";

//to add a Checkbox component, pass in "personData" and "setPersonData" as props to allow access to the personData variable. Also pass in "checkboxlabel" for the checkbox name and a "subject to indicate the title in the personData variable

function Checkbox(props) {
  const keyValue = `${props.subject} - ${props.checkboxlabel}`;

  return (
    <div className="checkboxComponent">
      <form>
        <p>{props.checkboxlabel}</p>
        <input
          className="checkbox-input"
          type="checkbox"
          checked={props.personData[keyValue] || false}
          onChange={e => {
            props.setPersonData({
              ...props.personData,
              [keyValue]: e.target.checked
            });
          }}
        />
      </form>
    </div>
  );
}

export default Checkbox;

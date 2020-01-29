import React from "react";

function Checkbox(props) {
  return (
    <div className="checkboxComponent">
      <form>
        <p>{props.checkboxlabel}</p>
        <input className="checkbox-input" type="checkbox" />
      </form>
    </div>
  );
}

export default Checkbox;

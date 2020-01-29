import React from "react";

const Textarea = props => {
  return (
    <div className="Textarea">
      <p>Poikkeavia löydöksiä löytyi.</p>
      <form>
        <textarea
          placeholder="Kirjoita tähän löydöksiäsi..."
          onChange={e => {
            console.log(e.target.value);
            const oldData = props.personData;
            const newData = {
              ...oldData,
              [props.name]: e.target.value
            };
            props.setPersonData(newData);
          }}
        />
      </form>
    </div>
  );
};

export default Textarea;

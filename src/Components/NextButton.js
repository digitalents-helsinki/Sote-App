import React from 'react';

const NextButton = ({onClick}) => {
    return(
        <div className="nextButtondiv" > 
            <button className="nextButtoninactive nextButtonactive" onClick={()=> onClick}> Seuraava </button> 
        </div>
    )
}

export default NextButton;


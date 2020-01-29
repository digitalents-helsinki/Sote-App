import React, { useState } from 'react'


function DoubleButon(props) {

    const [ buttonStyle_1, setButtonStyle_1 ] = useState({
        background: '#fff',
        textcolor: '#212121',
        bordercolor: '#8c8c8c'
    })

    const [ buttonStyle_2, setButtonStyle_2 ] = useState({
        background: '#fff',
        textcolor: '#212121',
        bordercolor: '#8c8c8c'
    })



    const colorChange_1 = () => {
        if (buttonStyle_1.background === '#fff') {
            setButtonStyle_1(prevButtonStyle_1 => prevButtonStyle_1 = {
                background: props.buttonColor_1,
                textcolor: '#fff',
                bordercolor: '#212121'
            })

            setButtonStyle_2(prevButtonStyle_2 => prevButtonStyle_2 = {
                background: '#fff',
                textcolor: '#212121',
                bordercolor: '#8c8c8c'
            })
        } else {
            setButtonStyle_1(prevButtonStyle_1 => prevButtonStyle_1 = {
                background: '#fff',
                textcolor: '#212121',
                bordercolor: '#8c8c8c'
            })
        }
    }

    const colorChange_2 = () => {
        if (buttonStyle_2.background === '#fff') {
            setButtonStyle_2(prevButtonStyle_2 => prevButtonStyle_2 = {
                background: props.buttonColor_2,
                textcolor: '#fff',
                bordercolor: '#212121'
            })

            setButtonStyle_1(prevButtonStyle_1 => prevButtonStyle_1 = {
                background: '#fff',
                textcolor: '#212121',
                bordercolor: '#8c8c8c'
            })
        } else {
            setButtonStyle_2(prevButtonStyle_2 => prevButtonStyle_2 = {
                background: '#fff',
                textcolor: '#212121',
                bordercolor: '#8c8c8c'
            })
        }
    }


    return (
        <div className="DoubleButton">
            <h2>{props.header}</h2>
            <p>{props.bodyText}</p>
            <form>
                <input type="button"
                    style={{
                        backgroundColor: buttonStyle_1.background,
                        color: buttonStyle_1.textcolor,
                        borderColor: buttonStyle_1.bordercolor 
                    }} 
                    onClick={(event) => { colorChange_1();
                        if (props.hoitoOhjeOn_YesNo === 'Kyllä') {
                            var [element] = document.getElementsByClassName(props.hoitoOhjeOn)
                            element.classList.remove('active')
                        } else {
                            props.eventHandler(props.hoitoOhjeOn);
                        };
                    }}
                    value={props.value1}>
                </input>

                <input type="button"
                    style={{
                        backgroundColor: buttonStyle_2.background,
                        color: buttonStyle_2.textcolor,
                        borderColor: buttonStyle_2.bordercolor 
                    }}   
                    onClick={(event) => { colorChange_2(); 
                        if (props.hoitoOhjeOn_YesNo === 'Ei') {
                            var [element] = document.getElementsByClassName(props.hoitoOhjeOn)
                            element.classList.remove('active')
                        } else {
                            props.eventHandler(props.hoitoOhjeOn);
                        }
                    }}
                    value={props.value2}>
                </input>
            </form>
            <div className={props.hoitoOhjeOn}>
                <h4>{props.hoitoOhje_header}</h4>
                <p>{props.hoito_ohje}</p>
            </div>
        </div>
    )
}

export default DoubleButon
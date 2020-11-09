import React, {forwardRef, useImperativeHandle} from 'react';
// import ReactDom from "react-dom";

const Modal = forwardRef((props, ref) => {

    const [display, setDisplay] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    });

    const open = () => {
        setDisplay(true)
    };

    const close = () => {
        setDisplay(false);
    }

    if (display) {

        return (
            <div className={"modal-wrapper"}>
                <div onClick={close} className={"modal-backdrop"} />
                <div className={"modal-box"}>
                    {props.children}
                </div>
            </div>
            )
    }

    return null;
    
});

export default Modal;
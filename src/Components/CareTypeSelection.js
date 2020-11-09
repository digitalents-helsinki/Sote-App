import React from "react";
import Page from "./Page";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "../Components/ModalComponent";

function CareTypeSelection({ setCareType }) {
  const history = useHistory();
  const location = useLocation();
  const clickHandler = value => {
    setCareType(value);
    if (location.state && !location.state.initial) history.goBack();
    else history.push("/"); // hack for animation
  };
  const modalRef = React.useRef();
  const modalRef2 = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };
  const openModal2 = () => {
    modalRef2.current.openModal()
  };
  // const closeTopArea = () => {
  //   document.querySelector('.TopArea').style.backgroundImage = "none";
  // };

  return (
    <Page>
      <h3 className="care-type-selection-title">Valitse hoitoyksikkö</h3>
      <button
        className="care-type-selection-button"
        // onClick={() => {openModal();closeTopArea();}}
        onClick={openModal}
      >
        Kotihoito
      </button>
      <button
        className="care-type-selection-button"
        onClick={openModal2}
      >
        Ympärivuorokautinen hoiva
      </button>

      <Modal ref={modalRef}>
        <h2 style={{fontWeight: 400, color: "#377d4f"}}>Kotihoito</h2>
        <p>
          Olet valinnut <span style={{fontWeight: 600}}>Kotihoitoyksikön</span><wbr />, haluatko jatkaa?
        </p>
        <button className="no" onClick={() => modalRef.current.close()}>Peruuta</button>
        <button className="yes" onClick={() => clickHandler("Kotihoito")}>Kyllä</button>
      </Modal>
      <Modal ref={modalRef2}>
        <h2 style={{fontWeight: 400, color: "#377d4f"}}>Ympärivuorokautinen hoiva</h2>
        <p>
          Olet valinnut <span style={{fontWeight: 600}}>Ympärivuorokautisen hoivayksikön</span><wbr />, haluatko jatkaa?
        </p>
        <button className="no" onClick={() => modalRef2.current.close()}>Peruuta</button>
        <button className="yes" onClick={() => clickHandler("Ympärivuorokautinen hoiva")}>Kyllä</button>
      </Modal>
    </Page>
  );
}

export default CareTypeSelection;

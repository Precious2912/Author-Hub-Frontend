import React, { useRef } from "react";
import "./Modal.css";
// import PropTypes from "prop-types";
import  ReactDOM  from "react-dom";
import { useNavigate } from "react-router-dom";

export const Modal = ({ title, setShowModal, children }) => {
  const modalRef = useRef();
  const navigate = useNavigate()
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal("false");
    }
  };

  return ReactDOM.createPortal (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-form">{children}</div>
        <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
      </div>
    </div>,

    document.getElementById('portal')
  );
};

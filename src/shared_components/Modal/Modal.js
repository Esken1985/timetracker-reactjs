import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(41, 41, 41, 0.2);
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  overflow-y: auto;
  z-index: 1010;
`;

const Modal = (props) => {
  const { modalIsOpen } = props;
  
  if (modalIsOpen) {
    return ReactDOM.createPortal(
      <ModalWrapper>
        <ModalBackdrop />
        <ModalBox>{props.children}</ModalBox>
      </ModalWrapper>,
      document.getElementById("modal-root")
    )
  } else {
    return null
  }
};

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default Modal;

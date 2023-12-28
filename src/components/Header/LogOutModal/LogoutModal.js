import React from 'react';
import Modal from 'react-modal';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const LogoutModal = ({ isOpen, onCloseLogoutModal }) => {
  return createPortal(
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseLogoutModal}
      // style={customStyles}
      contentLabel="Logout Modal"
    >
      <div className="Modal__content">
        Logout
        <button onClick={onCloseLogoutModal}>X</button>
      </div>
    </Modal>,
    modalRoot
  );
};

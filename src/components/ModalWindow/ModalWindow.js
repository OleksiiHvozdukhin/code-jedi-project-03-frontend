import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import sprite from '../../images/sprite.svg';

import {
  CloseBtn,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from './ModalWindow.styled';

Modal.setAppElement('#modal-root');

const modalRoot = document.querySelector('#modal-root');
const mediaQuery = '@media screen and (maxWidth: 320px)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    backgroundColor: '#fff',
    padding: '32px 24px',
    [mediaQuery]: '24px 12px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const ModalWindow = ({ isOpen, onRequestClose, title, children }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <CloseBtn onClick={onRequestClose}>
          <svg width="16" height="16" stroke="#407BFF" fill="none">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </CloseBtn>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>,
    modalRoot
  );
};

import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';
import {
  CloseBtn,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseIcon,
} from './ModalWindow.styled.jsx';

Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');
const mediaQuery = '@media screen and (maxWidth: 320px)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '10px',
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
          <CloseIcon width="24" height="24">
            <use href={`${sprite}#icon-close`}/>
          </CloseIcon>
        </CloseBtn>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

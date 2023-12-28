import Modal from 'react-modal';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
const mediaQuery = '@media screen and (max-width: 320px)';
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
      <div className="modal">
        <div className="Modal__header">
          <h2>{title}</h2>
          <button onClick={onRequestClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="Modal__body">{children}</div>
      </div>
    </Modal>,
    modalRoot
  );
};

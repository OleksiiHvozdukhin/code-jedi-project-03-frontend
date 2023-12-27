import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
Modal.setAppElement('#root');

export const UserLogoutModal = ({ onCloseLogoutModal, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseLogoutModal}
      style={customStyles}
    >
      <div>
        <button type="button" onClick={onCloseLogoutModal}>
          x
        </button>
        <h2>Log out</h2>
        <h3>Do you really want to leave?</h3>
        <button type="button" onClick={onCloseLogoutModal}>
          Cancel
        </button>
        <button type="button">Log out</button>
      </div>
    </Modal>
  );
};

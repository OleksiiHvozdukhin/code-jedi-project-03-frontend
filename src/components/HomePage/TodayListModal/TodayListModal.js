import Modal from 'react';
import { OnePortionForma } from './OnePortionForma';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '592px',
    height: '712px',
    zIndex: '1300',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};

Modal.setAppElement('#root');

export const TodayListModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>
        <button onClick={onRequestClose}>Close</button>
        <h2>Edit the entered amount of water</h2>
        <div class="current">
          <span>🥛</span>
          <span>250ml</span>
          <span>7:00 AM</span>
        </div>
        <p>Amount of water:</p>
        <button onClick="decrement">-</button>
        <span>250ml</span>
        <button onClick="increment">+</button>
        <OnePortionForma />
      </div>
    </Modal>
  );
};

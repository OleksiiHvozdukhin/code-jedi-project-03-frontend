// import { OnePortionForma } from './OnePortionForma';
import React, { useState } from 'react';
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

export const TodayListModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal}>Add water</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Setting Modal"
      >
        <h2>This is the setting modal</h2>
        <button onClick={closeModal}>close</button>
        <h2>Edit the entered amount of water</h2>

        <div>
          <span>🥛</span>
          <span>250ml</span>
          <span>7:00 AM</span>
        </div>
        <p>Amount of water:</p>
        <button onClick="decrement">-</button>
        <span>250ml</span>
        <button onClick="increment">+</button>
        {/* <OnePortionForma /> */}
      </Modal>
    </div>
  );
};

// export const TodayListModal = ({ isOpen, onRequestClose }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
//       <div>
//         <button onClick={onRequestClose}>Close</button>
//
//
//       </div>
//     </Modal>
//   );
// };

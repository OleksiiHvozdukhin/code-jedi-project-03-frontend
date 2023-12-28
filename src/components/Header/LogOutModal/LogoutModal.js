// import React from 'react';
// import Modal from 'react-modal';
// import { createPortal } from 'react-dom';

// const modalRoot = document.querySelector('#modal-root');

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: '1300',
//     padding: 0,
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.80)',
//   },
// };

// export const LogoutModal = ({ isOpen, onCloseLogoutModal }) => {
//   return createPortal(
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onCloseLogoutModal}
//       style={customStyles}
//       contentLabel="Logout Modal"
//     >
//       <div className="Modal__content">
//         Logout
//         <button onClick={onCloseLogoutModal}>X</button>
//       </div>
//     </Modal>,
//     modalRoot
//   );
// };

export const LogoutModal = () => {};

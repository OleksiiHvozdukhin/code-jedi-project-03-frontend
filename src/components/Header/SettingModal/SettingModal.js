import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SpriteIcons from '../../../images/sprite.svg';
import { HeaderModal, TitleModal } from './SettingModal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-flex',
    padding: '32px 24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '24px',
    borderRadius: ' 10px',
    background: 'var(--Primery-Color-White, #FFF)',
    width: '1008px',
    height: '592px',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    width: '100%',
    height: '100%',
  },
};

Modal.setAppElement('#root');

export const SettingModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Setting Modal"
      >
        <HeaderModal>
          <TitleModal>setting</TitleModal>
          <button onClick={closeModal}>
            <svg width="24" height="24">
              <use xlinkHref={`${SpriteIcons}#icon-close`} />
            </svg>
          </button>
        </HeaderModal>
        <div>
          <div>your photo</div>
          <div>
            <img src="" alt="user" />
            <p>
              <svg width="24" height="24">
                <use xlinkHref={`${SpriteIcons}#icon-arrow-up-tray`} />
              </svg>
              upload a photo
            </p>
          </div>
        </div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

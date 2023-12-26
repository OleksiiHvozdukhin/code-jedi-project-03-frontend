import Modal from 'react-modal';
import { SettingForma } from './SettingForma/SettingForma';
import { HeaderModal, ModalContainer, TitleModal } from './SettingModal.styled';

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

export const SettingModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      style={customStyles}
      contentLabel="Setting Modal"
    >
      <ModalContainer>
        <HeaderModal>
          <TitleModal>setting</TitleModal>
          <button onClick={onClose}></button>
        </HeaderModal>
        <div>
          <p>your photo</p>
          <div>
            <div>
              <img src="" alt="user" />
            </div>
            <p>upload a photo</p>
          </div>
        </div>
        <SettingForma />
      </ModalContainer>
    </Modal>
  );
};

// import Modal from 'react-modal';
import { SettingForma } from './SettingForma/SettingForma';

import sprite from '../../../images/sprite.svg';
import { Text } from './SettingModal.styled';
// import { useState } from 'react';

export const SettingModal = ({ isOpen, name, number, onClose, id }) => {
  return (
    <>
      <Text>Your photo</Text>
      <div>
        <div>
          <img src="" alt="user" />
        </div>
        <button type="button" onClick={() => {}}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-arrow-up-tray`} />
          </svg>
          <p>Upload a photo</p>
        </button>
      </div>

      <SettingForma />
    </>
  );
};

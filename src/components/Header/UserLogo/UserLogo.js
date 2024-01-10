import { useState } from 'react';
import SpriteIcons from '../../../images/sprite.svg';

import {
  UserBtn,
  MenuAvatarWrapper,
  UserIconBox,
  UserLogoWrapper,
} from './UserLogo.styled';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal.js';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

export const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { avatarURL, name } = useSelector(selectUser);

  // useEffect(() => {
  //   const handleFocus = () => {
  //     setIsOpen(true);
  //   };

  //   const handleBlur = () => {
  //     setIsOpen(false);
  //   };

  //   document.getElementById('dropdown').addEventListener('focus', handleFocus);
  //   document.getElementById('dropdown').addEventListener('blur', handleBlur);
  // }, []);
  useEffect(() => {
    const handleClickOutside = event => {
      const dropdown = document.getElementById('dropdown');
      const modal = document.getElementById('userLogoModal');
      const settingModal = document.getElementById('settingModal');

      if (settingModal && settingModal.contains(event.target)) {
        console.log('Это внутри сеттинг-модала');
      }

      // console.log(`Setting: ${settingModal}`);

      if (
        dropdown &&
        modal &&
        !dropdown.contains(event.target) &&
        !modal.contains(event.target)
      ) {
        // console.log('Modal close');
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <UserLogoWrapper>
      <UserBtn type="button" id="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{name}</span>

        <MenuAvatarWrapper>
          <UserIconBox>
            <img height="28" width="28" src={avatarURL} alt="User avatar" />
          </UserIconBox>

          <svg width="24" height="24">
            <use xlinkHref={SpriteIcons + '#icon-chevron-double-up'} />
          </svg>
        </MenuAvatarWrapper>
      </UserBtn>
      {isOpen && <UserLogoModal setIsOpen={setIsOpen} />}
    </UserLogoWrapper>
  );
};

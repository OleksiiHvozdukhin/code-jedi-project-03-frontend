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

export const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { avatarUrl, name } = useSelector(selectUser);
  return (
    <UserLogoWrapper>
      <UserBtn type="button" id="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{name}</span>

        <MenuAvatarWrapper>
          <UserIconBox>
            <img height="28" width="28" src={avatarUrl} alt="User avatar" />
          </UserIconBox>

          <svg width="24" height="24">
            <use xlinkHref={SpriteIcons + '#icon-chevron-double-up'} />
          </svg>
        </MenuAvatarWrapper>
      </UserBtn>
      {isOpen && <UserLogoModal />}
    </UserLogoWrapper>
  );
};

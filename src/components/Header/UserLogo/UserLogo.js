import { useState } from 'react';
import SpriteIcons from '../../../images/sprite.svg';

import {
  UserBtn,
  MenuAvatarWrapper,
  IconBox,
  UserIconBox,
} from './UserLogo.styled';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal.js';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/authSelectors';

export const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { avatar } = useSelector(selectUser);
  return (
    <div>
      <UserBtn type="button" id="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>name</span>

        <MenuAvatarWrapper>
          <UserIconBox>
            <img
              height="28"
              width="28"
              src={
                'avatar' ||
                'https://s.gravatar.com/avatar/8f175290e672fb87ec57c5e10a6e804e?s=250&r=g&d=retro'
              }
              alt="User avatar"
            />
          </UserIconBox>
          <IconBox>
            <svg width="24" height="24">
              <use xlinkHref={SpriteIcons + '#icon-chevron-double-up'} />
            </svg>
          </IconBox>
        </MenuAvatarWrapper>
      </UserBtn>
      {isOpen && <UserLogoModal />}
    </div>
  );
};

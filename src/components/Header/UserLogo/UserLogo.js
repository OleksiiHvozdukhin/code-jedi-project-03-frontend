import { useState } from 'react';
import { useClickOutside } from 'components/helpers/useClickOutside';
import { useRef } from 'react';
import {
  MenuBtn,
  MenuAvatarWrapper,
  ArrowDownIcon,
  IconBox,
} from './UserLogo.styled';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal.js';

export const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 50);
  });
  return (
    <>
      <MenuBtn type="button" onClick={() => setIsOpen(!isOpen)}>
        name
        <MenuAvatarWrapper>
          avatar
          <IconBox>
            <ArrowDownIcon aria-label="arrow down icon">
              <use href="../../../images/sprite.svg#icon-chevron-double-up"></use>
            </ArrowDownIcon>
          </IconBox>
        </MenuAvatarWrapper>
      </MenuBtn>
      <UserLogoModal />
    </>
  );
};

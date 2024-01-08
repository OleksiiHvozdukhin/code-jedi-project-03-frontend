import { useState } from 'react';
import {
  Dropdown,
  Icon,
  IconBox,
  MenuBtn,
  MenuItem,
  MenuList,
} from './UserLogoModal.styled';
import { SettingModal } from '../SettingModal/SettingModal';
import { ModalWindow } from 'components/ModalWindow/ModalWindow.js';

import SpriteIcons from '../../../images/sprite.svg';
import { logoutThunk } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutModal } from '../LogoutModal/LogoutModal';

export const UserLogoModal = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogoModalLogout = async () => {
    await dispatch(logoutThunk());
    navigate('/signin');
  };

  return (
    <>
      <Dropdown>
        <MenuList>
          <MenuItem>
            <MenuBtn type="button" onClick={() => setIsSettingOpen(true)}>
              <IconBox>
                <Icon width="16" height="16">
                  <use href={SpriteIcons + '#icon-cog-6-tooth'}></use>
                </Icon>
              </IconBox>
              Setting
            </MenuBtn>
          </MenuItem>

          <MenuItem>
            <MenuBtn type="button" onClick={() => setIsLogoutOpen(true)}>
              <IconBox>
                <Icon width="16" height="16">
                  <use
                    href={SpriteIcons + '#icon-arrow-right-on-rectangle'}
                  ></use>
                </Icon>
              </IconBox>
              Log out
            </MenuBtn>
          </MenuItem>
        </MenuList>
      </Dropdown>

      <ModalWindow
        title="Setting"
        isOpen={isSettingOpen}
        onRequestClose={() => {
          setIsSettingOpen(false);
        }}
      >
        <SettingModal
          title="Setting"
          isOpen={isSettingOpen}
          onRequestClose={() => {
            setIsSettingOpen(false);
          }}
        />
      </ModalWindow>

      <ModalWindow
        title="Log out"
        isOpen={isLogoutOpen}
        onRequestClose={() => {
          setIsLogoutOpen(false);
        }}
      >
        <LogoutModal
          title="Log out"
          isOpen={isLogoutOpen}
          onRequestClose={() => {
            setIsLogoutOpen(false);
          }}
        />
      </ModalWindow>
    </>
  );
};

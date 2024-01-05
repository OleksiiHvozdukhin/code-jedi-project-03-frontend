import { useDispatch } from 'react-redux';
import {
  ButtonGroup,
  CancelBtn,
  LogOutBody,
  LogOutBtn,
  LogOutText,
} from './LogOutModal.styled';
import { logoutThunk } from 'redux/auth/authOperations';

export const LogoutModal = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
    onRequestClose();
  };

  const handleCansel = () => onRequestClose();

  return (
    <LogOutBody>
      <LogOutText>Do you really want to leave?</LogOutText>
      <ButtonGroup>
        <LogOutBtn type="button" onClick={() => handleLogout()}>
          Log out
        </LogOutBtn>
        <CancelBtn type="button" onClick={() => handleCansel()}>
          Cancel
        </CancelBtn>
      </ButtonGroup>
    </LogOutBody>
  );
};

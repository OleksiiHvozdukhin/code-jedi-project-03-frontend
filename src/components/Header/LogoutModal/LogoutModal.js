import { useDispatch } from 'react-redux';
import {
  ButtonGroup,
  CancelBtn,
  LogOutBody,
  LogOutBtn,
  LogOutText,
} from './LogoutModal.styled';
import { logoutThunk } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export const LogoutModal = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/signin');
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

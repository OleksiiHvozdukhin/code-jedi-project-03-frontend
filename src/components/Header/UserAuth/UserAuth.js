import { NavLink } from 'react-router-dom';
import { UserAuthText } from './UserAuth.styled.jsx';
import sprite from '../../../images/sprite.svg';

export const UserAuth = () => {
  return (
    <NavLink to="/signin">
      <UserAuthText>Sign in</UserAuthText>

      <svg width="28" height="28" fill="none" stroke="#000">
        <use xlinkHref={`${sprite}#icon-user`} />
      </svg>
    </NavLink>
  );
};

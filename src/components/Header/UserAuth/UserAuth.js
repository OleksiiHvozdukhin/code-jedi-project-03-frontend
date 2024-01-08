import { StyledLink } from './UserAuth.styled';
import SpriteIcon from '../../../images/sprite.svg';

export const UserAuth = () => {
  return (
      <StyledLink to="/signin">
        Sign in
        <svg width="28" height="28" stroke="#2f2f2f" fill="none">
          <use xlinkHref={`${SpriteIcon}#icon-user`} />
        </svg>
      </StyledLink>
  );
};

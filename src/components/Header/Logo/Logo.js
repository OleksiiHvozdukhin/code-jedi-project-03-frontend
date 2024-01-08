import { LogoText, StyledNavLink, TextBox } from './Logo.styled';
import sprite from '../../../images/sprite.svg';
export const Logo = () => {
  return (
    <StyledNavLink to="/">
      <svg width="40" heigt="48">
        <use xlinkHref={`${sprite}#icon-Logo`} />
      </svg>
      <TextBox>
        <LogoText>tracker of water</LogoText>
      </TextBox>
    </StyledNavLink>
  );
};

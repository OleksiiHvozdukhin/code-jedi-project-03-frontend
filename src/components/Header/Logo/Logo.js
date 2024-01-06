import { IconBox, LogoText, StyledNavLink, TextBox } from './Logo.styled';
import sprite from '../../../images/sprite.svg';
export const Logo = () => {
  return (
    <>
      <StyledNavLink to="homepage">
        <IconBox>
          <svg width="40px" heigt="48px" fill="none" stroke="#407bff">
            <use xlinkHref={`${sprite}#icon-Logo`} />
          </svg>
        </IconBox>
        <TextBox>
          <LogoText>tracker of water</LogoText>
        </TextBox>
      </StyledNavLink>
    </>
  );
};

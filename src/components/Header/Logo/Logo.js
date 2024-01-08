import { IconBox, LogoText, StyledNavLink, TextBox } from './Logo.styled';
import sprite from '../../../images/sprite.svg';
export const Logo = () => {
  return (
    <>
      <StyledNavLink to="/">
        <IconBox>
          <svg width="40px" heigt="48px">
            <use xlinkHref={`${sprite} #icon-Logo`} />
          </svg>
        </IconBox>
        <TextBox>
          <LogoText>tracker of water</LogoText>
        </TextBox>
      </StyledNavLink>
    </>
  );
};

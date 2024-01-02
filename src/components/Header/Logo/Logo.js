import { IconBox, LogoText, StyledNavLink, TextBox } from './Logo.styled';
import SpriteIcons from '../../../images/sprite.svg';

export const Logo = () => {
  return (
    <>
      <StyledNavLink to="/">
        {/*
         */}
        <IconBox>
          <svg width="40px" heigt="48px">
            <use xlinkHref={SpriteIcons + '#icon-Logo'} />
          </svg>
        </IconBox>
        <TextBox>
          <LogoText>tracker of water</LogoText>
        </TextBox>
      </StyledNavLink>
    </>
  );
};

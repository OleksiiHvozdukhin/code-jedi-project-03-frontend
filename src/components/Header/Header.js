import { HeaderContainer, LogoBox } from './Header.styled.jsx';
import { Logo } from './Logo/Logo.js';
import { UserLogo } from './UserLogo/UserLogo.js';
import { useAuth } from '../../hooks/useAuth.jsx';
import { UserAuth } from './UserAuth/UserAuth.js';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <LogoBox>
        <Logo />
      </LogoBox>

      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </HeaderContainer>
  );
};

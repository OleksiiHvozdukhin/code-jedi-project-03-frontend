import { useAuth } from 'hooks/useAuth.jsx';
import { Container } from './Header.styled.jsx';
import { Logo } from './Logo/Logo.js';
import { SettingModal } from './SettingModal/SettingModal.js';
import { UserLogo } from './UserLogo/UserLogo.js';
// import { UserLogoutModal } from './UserLogoutModal/UserLogoutModal.js';
import { UserAuth } from './UserAuth/UserAuth.js';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Container>
        <Logo />
        {/* <UserLogo /> */}
        {/* <UserAuth /> */}
        {isLoggedIn ? <UserLogo /> : <UserAuth />}

        <SettingModal />
        {/* <UserLogoutModal /> */}
      </Container>
    </header>
  );
};

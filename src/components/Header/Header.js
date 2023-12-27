// import { useAuth } from 'hooks/useAuth.jsx';
import { Container } from './Header.styled.jsx';
import { Logo } from './Logo/Logo.js';
import { SettingModal } from './SettingModal/SettingModal.js';
import { UserLogo } from './UserLogo/UserLogo.js';
// import { UserAuth } from './UserAuth/UserAuth.js';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <UserLogo />

        {/* <UserAuth /> */}
        {/* {isLoggedIn ? <UserLogo /> : <UserAuth />} */}

        <SettingModal />
        {/* <UserLogoutModal /> */}
      </Container>
    </header>
  );
};

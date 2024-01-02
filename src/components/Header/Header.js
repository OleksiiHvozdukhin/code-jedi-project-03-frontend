// import { useAuth } from 'hooks/useAuth.jsx';
import { HeaderContainer } from './Header.styled.jsx';
import { Logo } from './Logo/Logo.js';
// import { SettingModal } from './SettingModal/SettingModal.js';
// import { SettingModal } from './SettingModal/SettingModal.js';
import { UserLogo } from './UserLogo/UserLogo.js';
// import { UserLogoutModal } from './UserLogoutModal/UserLogoutModal.js';
// import { UserAuth } from './UserAuth/UserAuth.js';
// import { UserAuth } from './UserAuth/UserAuth.js';

export const Header = () => {
  // const { isLoggedIn } = useAuth();
  // const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer>
      <Logo />
      <UserLogo />
      {/* <UserAuth /> */}
      {/* {isLoggedIn ? <UserLogo /> : <UserAuth />} */}

      {/* <SettingModal /> */}
      {/* <UserLogoutModal /> */}
    </HeaderContainer>
  );
};

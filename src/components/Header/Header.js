// import { useAuth } from 'hooks/useAuth.js';
import { Logo } from './Logo/Logo.js';
import { SettingModal } from './SettingModal/SettingModal.js';
import { UserLogo } from './UserLogo/UserLogo.js';
import { UserLogoModal } from './UserLogoModal/UserLogoModal.js';
import { UserLogoutModal } from './UserLogoutModal/UserLogoutModal.js';
import { UserAuth } from './UserAuth/UserAuth.js';

export const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <div>
      <Logo />
      <UserLogo />
      <UserAuth />
      {/* {isLoggedIn ? <UserLogo /> : <UserAuth />} */}

      <UserLogoModal />
      <SettingModal />
      <UserLogoutModal />
    </div>
  );
};

import { Logo } from './Logo/Logo';
import { SettingModal } from './SettingModal/SettingModal';
import { UserLogo } from './UserLogo/UserLogo';
import { UserLogoModal } from './UserLogoModal/UserLogoModal';
import { UserLogoutModal } from './UserLogoutModal/UserLogoutModal';

export const Header = () => {
  return (
    <div>
      <p>Header</p>
      <Logo />
      <UserLogo />
      <UserLogoModal />
      <SettingModal />
      <UserLogoutModal />
    </div>
  );
};

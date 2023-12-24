import { MenuBtn, MenuItem, MenuList, UserMenu } from './UserLogoModal.styled';

export const UserLogoModal = ({ isActive }) => {
  return (
    <>
      <p>This is UserLogoModal</p>
      <UserMenu className={isActive ? 'active' : ''}>
        <MenuList>
          <MenuItem>
            <MenuBtn type="button" className="setting_button">
              <svg
                className="setting_icon"
                aria-label="setting icon"
                width="16"
                height="16"
              >
                <use href="../../../images/sprite.svg#icon-cog-6-tooth"></use>
              </svg>
              setting
            </MenuBtn>
          </MenuItem>
          <MenuItem>
            <MenuBtn type="button">
              <svg
                className="logout_icon"
                aria-label="log out icon"
                width="16"
                height="16"
              >
                <use href="../../../images/sprite.svg#icon-arrow-right-on-rectangle"></use>
              </svg>
              logout
            </MenuBtn>
          </MenuItem>
        </MenuList>
      </UserMenu>
    </>
  );
};

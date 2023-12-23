export const UserLogoModal = () => {
  return (
    <div className="user_logo_modal_window">
      This is UserLogoModal
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <button type="button" className="setting_button">
              <svg
                className="setting_icon"
                aria-label="setting icon"
                width="16"
                height="16"
              >
                <use href="../../../images/sprite.svg#icon-cog-6-tooth"></use>
              </svg>
              setting
            </button>
          </li>
          <li className="menu__item">
            <button type="button" className="logout">
              <svg
                className="logout_icon"
                aria-label="log out icon"
                width="16"
                height="16"
              >
                <use href="../../../images/sprite.svg#icon-arrow-right-on-rectangle"></use>
              </svg>
              logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

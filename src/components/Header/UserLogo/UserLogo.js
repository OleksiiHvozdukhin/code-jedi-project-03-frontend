import { useState } from 'react';

export const UserLogo = () => {
  const [setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prev => !prev);
  return (
    <div>
      <button tupe="button" className="menu-btn" onClick={toggleModal}>
        name
        <div>
          avatar
          {/* <svg
            className="arrow_down_icon"
            aria-label="arrow down icon"
            width="16"
            height="16"
          > */}
          {/* <use href="../../../images/sprite.svg#icon-chevron-double-up"></use> */}
          {/* </svg> */}
        </div>
      </button>
    </div>
  );
};

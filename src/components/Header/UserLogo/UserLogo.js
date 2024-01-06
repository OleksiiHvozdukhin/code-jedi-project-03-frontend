import { useEffect, useState } from 'react';

import {
  UserBtn,
  MenuAvatarWrapper,
  IconBox,
  UserIconBox,
  UserName,
} from './UserLogo.styled';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal.js';

export const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   const handleFocus = () => {
  //     setIsOpen(true);
  //   };

  //   const handleBlur = () => {
  //     setIsOpen(false);
  //   };

  //   document.getElementById('dropdown').addEventListener('focus', handleFocus);
  //   document.getElementById('dropdown').addEventListener('blur', handleBlur);
  // }, []);
  useEffect(() => {
    const handleClickOutside = event => {
      const dropdown = document.getElementById('dropdown');
      const modal = document.getElementById('userLogoModal');
      const settingModal = document.getElementById('settingModal');

      if (settingModal && settingModal.contains(event.target)) {
        console.log('Это внутри сеттинг-модала');
      }

      // console.log(`Setting: ${settingModal}`);

      if (
        dropdown &&
        modal &&
        !dropdown.contains(event.target) &&
        !modal.contains(event.target)
      ) {
        // console.log('Modal close');
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <UserBtn type="button" id="dropdown" onClick={() => setIsOpen(true)}>
        <UserName>name</UserName>

        <MenuAvatarWrapper>
          <UserIconBox>v</UserIconBox>
          <IconBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5298 16.28C12.3892 16.4205 12.1986 16.4994 11.9998 16.4994C11.8011 16.4994 11.6105 16.4205 11.4698 16.28L3.96985 8.78003C3.83737 8.63786 3.76524 8.44981 3.76867 8.25551C3.7721 8.06121 3.85081 7.87582 3.98822 7.73841C4.12564 7.601 4.31102 7.52228 4.50532 7.51886C4.69963 7.51543 4.88767 7.58755 5.02985 7.72003L11.9998 14.69L18.9698 7.72003C19.0385 7.64634 19.1213 7.58724 19.2133 7.54625C19.3053 7.50526 19.4046 7.48322 19.5053 7.48144C19.606 7.47966 19.7061 7.49819 19.7994 7.53591C19.8928 7.57363 19.9777 7.62977 20.0489 7.70099C20.1201 7.77221 20.1762 7.85705 20.214 7.95043C20.2517 8.04382 20.2702 8.14385 20.2684 8.24455C20.2667 8.34526 20.2446 8.44457 20.2036 8.53657C20.1626 8.62857 20.1035 8.71137 20.0298 8.78003L12.5298 16.28Z"
                fill="#2F2F2F"
              />
            </svg>
          </IconBox>
        </MenuAvatarWrapper>
      </UserBtn>
      {isOpen && <UserLogoModal />}
      {/* <UserLogoModal /> */}
    </>
  );
};

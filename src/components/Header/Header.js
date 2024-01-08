import { HeaderContainer, LogoBox } from './Header.styled.jsx';
import { Logo } from './Logo/Logo.js';
import { UserLogo } from './UserLogo/UserLogo.js';
import { UserAuth } from './UserAuth/UserAuth.js';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors.js';
// import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const navigate = useNavigate();

  // const handleClickUserLogo = e => {
  //   if (e.currentTarget.classList.contains('open')) {
  //     setIsOpen(false);
  //     return;
  //   }
  //   setIsOpen(true);
  // };

  return (
    <HeaderContainer>
      <LogoBox>
        <Logo />
      </LogoBox>

      {isLoggedIn ? <UserLogo /> : <UserAuth />}
    </HeaderContainer>
  );
};

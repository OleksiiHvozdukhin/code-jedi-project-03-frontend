//! Это временный файл. Его необходимо будет удалить

import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav
      style={{
        textAlign: 'center',
        margin: '0px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '0 40px',
      }}
    >
      <NavLink to="/">Welcome Page</NavLink>
      <NavLink to="/homepage">Home Page</NavLink>
      <NavLink to="/signin">Signin Page</NavLink>
      <NavLink to="/signup">Signup Page</NavLink>
      <NavLink to="/forgot-password">Forgot Password Page</NavLink>
    </nav>
  );
};

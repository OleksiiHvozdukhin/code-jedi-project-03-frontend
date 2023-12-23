import { Link } from 'react-router-dom';

export const UserAuth = () => {
  return (
    <Link to="/signin">
      Sign in
      <svg className="user_pic">
        <use href="../../../images/sprite.svg#icon-user"></use>
      </svg>
    </Link>
  );
};

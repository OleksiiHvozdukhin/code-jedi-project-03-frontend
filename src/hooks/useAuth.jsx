import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserToken,
} from 'redux/auth/authSelectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectUserToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};

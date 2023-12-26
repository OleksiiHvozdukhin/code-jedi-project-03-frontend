import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
<<<<<<< HEAD
} from 'redux/auth/authSelectors.js';
=======
} from 'redux/auth/authSelectors';
>>>>>>> a4849c11bac75bfb3f61b82021a1986770d3fcc1

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

// import { useEffect, lazy } from 'react';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
// import { PrivateRoute } from './Route/PrivateRoute';
// import { RestrictedRoute } from './Route/RestrictedRoute';
// import { refreshUser } from 'redux/auth/authOperations';
// import { useAuth } from 'hooks/useAuth';
// import { Loader } from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const MainPage = lazy(() => import('../pages/WelcomePage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <Loader />
  // ) : (
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          {/* //! Это временное решение, пока не сделана проверка на аутентификацию пользователя */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

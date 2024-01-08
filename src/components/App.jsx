import { useEffect, lazy } from 'react';
// import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import { PrivateRoute } from './Route/PrivateRoute';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { refreshUserThunk } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const MainPage = lazy(() => import('../pages/WelcomePage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const { isRefreshing, isLoggedIn, user } = useAuth();

  // console.log('Is refreshing: ', isRefreshing);
  // console.log('Is logged in: ', isLoggedIn);
  // console.log('User: ', user);
  // console.log(
  //   '________________________________________________________________'
  // );

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<MainPage />} redirectTo="/home" />
            }
          />
          <Route
            path="home"
            element={<PrivateRoute component={<HomePage />} redirectTo={'/'} />}
          />
          <Route
            path="signup"
            element={
              //! Это временное решение, потом изменю на /home
              // <RestrictedRoute component={<SignupPage />} redirectTo="/home" />
              // <RestrictedRoute component={<SignupPage />} />
              <SignupPage />
            }
          />
          <Route
            path="signin"
            element={
              //! Это временное решение, потом изменю на /home
              // <RestrictedRoute component={<SigninPage />} redirectTo="/home" />
              <SigninPage />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RestrictedRoute
                component={<ForgotPasswordPage />}
                redirectTo="/signin"
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

import { AuthForm } from './AuthForm/AuthForm';
import {
  SignInContainer,
  SignLink,
  TitleForm,
} from 'components/SignInForm/AuthForm/SignIn.styled';

export const SignUpPage = () => {
  return (
    <SignInContainer>
      <TitleForm>Sign Up</TitleForm>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        repeatPasswordLabel="Repeat password"
        buttonLabel="Sign Up"
      />
      <SignLink to="/signin">Sign In</SignLink>
    </SignInContainer>
  );
};

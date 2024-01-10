import { AuthForm } from './AuthForm/AuthForm';
import {
  SignUpContainer,
  SignLink,
  TitleForm,
} from 'components/SignInForm/AuthForm/SignIn.styled';

export const SignUpPage = () => {
  return (
    <SignUpContainer>
      <TitleForm>Sign Up</TitleForm>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        repeatPasswordLabel="Repeat password"
        buttonLabel="Sign Up"
      />
      <SignLink to="/signin">Sign In</SignLink>
    </SignUpContainer>
  );
};

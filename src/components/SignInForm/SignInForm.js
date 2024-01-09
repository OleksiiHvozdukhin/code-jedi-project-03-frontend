import { AuthForm } from './AuthForm/AuthForm';
import { SignInContainer, SignLink, TitleForm } from './AuthForm/SignIn.styled';

export const SignInForm = () => {
  return (
    <SignInContainer>
      <TitleForm>Sign In</TitleForm>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        buttonLabel="Sign In"
      />
      <SignLink to="/forgot-password">Forgot your password?</SignLink>
      <SignLink to="/signup">Sign Up</SignLink>
    </SignInContainer>
  );
};

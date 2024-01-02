import { AuthForm } from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'components/theme';

export const SignUpContainer = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  min-width: 280px;

  @media screen and (min-width: 768px) {
    min-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const SignInLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.blue};
  text-decoration: none;
`;

export const SignUpPage = () => {
  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        repeatPasswordLabel="Repeat password"
        buttonLabel="Sign Up"
        onSuccess={() => {
          console.log('Registration successful.');
        }}
      />
      <p>
      <SignInLink to="/signin">Sign In</SignInLink>
      </p>
    </SignUpContainer>
  );
};

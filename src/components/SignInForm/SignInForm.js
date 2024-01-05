import React from 'react';
import { AuthForm } from './AuthForm/AuthForm';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'components/theme';

export const SignInContainer = styled.div`
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

export const ForgotPasswordLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.blue};
  text-decoration: none;
`;

export const SignUpLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.blue};
  text-decoration: none;
`;

export const SignInForm = () => {
  const navigate = useNavigate();
  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        buttonLabel="Sign In"
        onSuccess={() => {
          navigate('/homepage');
          console.log('Login successful.');
        }}
      />
      <p>
        <ForgotPasswordLink to="/forgot-password">
          Forgot your password?
        </ForgotPasswordLink>
      </p>
      <p>
        <SignUpLink to="/signup">Sign Up</SignUpLink>
      </p>
    </SignInContainer>
  );
};

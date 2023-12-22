import React from 'react';
import { AuthForm } from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';

export const SignInForm = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm
        emailLabel="Enter your email"
        passwordLabel="Enter your password"
        buttonLabel="Sign In"
        onSuccess={() => {
          console.log('Login successful.');
        }}
      />
      <p>
      <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
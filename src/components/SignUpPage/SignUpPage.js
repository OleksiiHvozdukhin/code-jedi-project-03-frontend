import { AuthForm } from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <div>
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
      <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

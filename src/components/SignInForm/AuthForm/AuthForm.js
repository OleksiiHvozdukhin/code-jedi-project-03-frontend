import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthFormLabel, AuthFormButton, AuthFormInput } from './SignIn.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .required('Password is required'),
});

export const AuthForm = ({
  emailLabel,
  passwordLabel,
  buttonLabel,
  onSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [emailWrong, setEmailWrong] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const eyeIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5C4 1.5 1 8 1 8s3 6.5 7 6.5 7-6.5 7-6.5-3-6.5-7-6.5zM8 12C9.6 12 11 10.7 11 9s-1.4-3-3-3-3 1.3-3 3 1.4 3 3 3z"
        fill="#666666"
      />
    </svg>
  );
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const data = await dispatch(loginThunk({ email, password }));
    if (!!data.payload.token) {
      navigate('/home');
    }
    if (data.payload.response.data.message === 'Email or password is wrong') {
      setEmailWrong(true);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <AuthFormLabel htmlFor="email">{emailLabel}</AuthFormLabel>
          <Field
            as={AuthFormInput}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div>
          <AuthFormLabel htmlFor="password">{passwordLabel}</AuthFormLabel>
          <div>
            <Field
              as={AuthFormInput}
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
            />
            <span onClick={handleTogglePassword}>{eyeIcon}</span>
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        {emailWrong && <p>Email of password is wrong</p>}
        <AuthFormButton type="submit">{buttonLabel}</AuthFormButton>
      </Form>
    </Formik>
  );
};

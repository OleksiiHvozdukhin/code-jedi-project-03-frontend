import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  AuthFormButton,
  AuthFormInput,
  AuthFormLabel,
  EyeBtn,
  InputWrapper,
  StyledErrorMessage,
} from 'components/SignInForm/AuthForm/SignIn.styled';
import sprite from '../../../images/sprite.svg';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Repeat password is required'),
});

export const AuthForm = ({
  emailLabel,
  passwordLabel,
  buttonLabel,
  repeatPasswordLabel,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailUsed, setEmailUsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (emailUsed) {
      toast.error('Email is already in use');
      setEmailUsed(false);
    }
  }, [emailUsed]);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const data = await dispatch(
        registerThunk({ name: 'V', email, password })
      );

      if (data.payload === 'Email already in use') {
        setEmailUsed(true);
      }
      if (!!data.payload.user) navigate('/signin');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, handleChange }) => {
        return (
          <Form>
            <div>
              <AuthFormLabel htmlFor="email">{emailLabel}</AuthFormLabel>
              <Field
                as={AuthFormInput}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
                className={`special ${
                  errors.email && touched.email ? 'error' : ''
                }`}
              />
              <StyledErrorMessage name="email" component="div" />
            </div>
            <div>
              <AuthFormLabel htmlFor="password">{passwordLabel}</AuthFormLabel>
              <InputWrapper>
                <Field
                  as={AuthFormInput}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className={`special ${
                    errors.password && touched.password ? 'error' : ''
                  }`}
                />
                <EyeBtn onClick={() => handleTogglePassword()} type="button">
                  <svg width="16" height="16" stroke="#407BFF" fill="none">
                    <use
                      xlinkHref={
                        showPassword
                          ? `${sprite}#icon-eye`
                          : `${sprite}#icon-eye-slash`
                      }
                    />
                  </svg>
                </EyeBtn>
              </InputWrapper>
              <ErrorMessage name="password" component="div" />
            </div>
            {repeatPasswordLabel && (
              <div>
                <AuthFormLabel htmlFor="repeatPassword">
                  {repeatPasswordLabel}
                </AuthFormLabel>
                <InputWrapper>
                  <Field
                    as={AuthFormInput}
                    type={showPassword ? 'text' : 'password'}
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    required
                    className={`special ${
                      errors.repeatPassword && touched.repeatPassword
                        ? 'error'
                        : ''
                    }`}
                  />
                  <EyeBtn onClick={() => handleTogglePassword()} type="button">
                    <svg width="16" height="16" stroke="#407BFF" fill="none">
                      <use
                        xlinkHref={
                          showPassword
                            ? `${sprite}#icon-eye`
                            : `${sprite}#icon-eye-slash`
                        }
                      />
                    </svg>
                  </EyeBtn>
                </InputWrapper>
                <ErrorMessage name="repeatPassword" component="div" />
              </div>
            )}
            <div>
              <AuthFormButton type="submit">{buttonLabel}</AuthFormButton>
            </div>
            {isLoading && <Loader />}
          </Form>
        );
      }}
    </Formik>
  );
};

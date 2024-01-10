import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  AuthFormLabel,
  AuthFormButton,
  AuthFormInput,
  StyledErrorMessage,
  EyeBtn,
  InputWrapper,
} from './SignIn.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
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
});

export const AuthForm = ({ emailLabel, passwordLabel, buttonLabel }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (emailWrong) {
      toast.error('Email or password is wrong');
      setEmailWrong(false);
    }
  }, [emailWrong]);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const data = await dispatch(loginThunk({ email, password }));

      if (!!data.payload.token) {
        navigate('/home');
      }

      if (data.payload.message === 'Request failed with status code 401') {
        setEmailWrong(true);
      }
      if (data.payload.message === 'Network Error')
        toast.error('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <div>
              <AuthFormLabel htmlFor="email">{emailLabel}</AuthFormLabel>
              <AuthFormInput
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className={`special ${
                  errors.email && touched.email ? 'error' : ''
                }`}
              />
              <StyledErrorMessage name="email" component="div" />
            </div>
            <div>
              <AuthFormLabel htmlFor="password">{passwordLabel}</AuthFormLabel>
              <InputWrapper>
                <AuthFormInput
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
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
              <StyledErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <AuthFormButton type="submit">{buttonLabel}</AuthFormButton>
            {isLoading && <Loader />}
          </Form>
        );
      }}
    </Formik>
  );
};

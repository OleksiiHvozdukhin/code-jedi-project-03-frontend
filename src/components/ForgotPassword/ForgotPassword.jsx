import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SignInLink } from 'components/ForgotPassword/ForgotPassword.styled';
import axios from 'axios';
import toast from 'react-hot-toast';

import * as Yup from 'yup';
import {
  Input,
  Label,
  SendBtn,
  StyledErrorMessage,
  Title,
} from './ForgotPassword.styled';
import { useNavigate } from 'react-router';
import { SignInContainer } from 'components/SignInForm/AuthForm/SignIn.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ email }) => {
    try {
      await axios.post('http://localhost:8000/users/forgot-password', {
        email,
      });
      toast.success('Password has been sent');
      navigate('/signin');
    } catch (error) {
      toast.error('Error sending email');
    }
  };

  return (
    <SignInContainer>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Title>Restore password</Title>
              <Label htmlFor="email">Enter your email</Label>
              <Field
                as={Input}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className={`special ${
                  errors.email && touched.email ? 'error' : ''
                }`}
              />
              <StyledErrorMessage name="email" component="div" />
              <SendBtn type="submit">Send</SendBtn>
              <SignInLink to="/signin">Sign In</SignInLink>
            </Form>
          );
        }}
      </Formik>
    </SignInContainer>
  );
};

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { SignInLink } from 'components/ForgotPassword/ForgotPassword.styled';
import { Loader } from 'components/Loader';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  SendBtn,
  StyledErrorMessage,
  Subcontainer,
  Title,
} from './ForgotPassword.styled';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email }) => {
    try {
      setIsLoading(true);
      setIsError(false);
      await axios.post('http://localhost:8000/users/forgot-password', {
        email,
      });
      toast.success('Password has been sent');
      navigate('/signin');
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Subcontainer>
        <Container>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Title>Restore password</Title>
              <Label htmlFor="email">Enter your email</Label>
              <Field
                as={Input}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
              <StyledErrorMessage name="email" component="div" />
              <SendBtn type="submit">Send</SendBtn>
              <SignInLink to="/signin">Sign In</SignInLink>
            </Form>
          </Formik>
        </Container>
      </Subcontainer>
      <Toaster />
      {isLoading && <Loader />}
      {isError && !isLoading && toast.error('Error send email')}
    </>
  );
};

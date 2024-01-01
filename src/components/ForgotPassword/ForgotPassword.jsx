import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { SignInLink } from 'components/ForgotPassword/ForgotPassword.styled';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import bottle from '../../images/Desktop/Desktop Bottle for Sign in-1x.png';
import axios from 'axios';

import * as Yup from 'yup';
import {
  BottleImage,
  Container,
  Input,
  Label,
  SendBtn,
  StyledErrorMessage,
  Subcontainer,
  Title,
} from './ForgotPassword.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoading] = useState(false);

  const handleSubmit = async (e) => {
    setEmail(e.target.value);
    if (!isError) {
      try {
        await axios.post('http://localhost:3000/users/forgotPassword',{email} );
        console.log('Password has been sent to', email);
        return <Link to="/signin" />;
      } catch (error) {
        console.error('Error send email:', error);
        setIsError('Error send email');
      }
    }
  };

  return (
    <Subcontainer>
      <BottleImage width="600" src={bottle} />
      <Container>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onChange={handleSubmit}
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
            <SendBtn type="submit">
              Submit
            </SendBtn>
            <SignInLink to="/signin">Sign In</SignInLink>
          </Form>
        </Formik>
        {isLoading && <Loader />}
        {/* {!isError && <p>Password has been sent to your mailbox</p>} */}
        {isError && !isLoading && <p>Some errors</p>}
      </Container>
    </Subcontainer>
  );
};

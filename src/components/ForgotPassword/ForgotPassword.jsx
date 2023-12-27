import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  SendBtn,
  StyledErrorMessage,
  Title,
} from './ForgotPassword.styled';
import { SignInLink } from 'components/ForgotPassword/ForgotPassword.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { forgotPasswordRequest, forgotPasswordError  } from '../../redux/auth/authOperation';

export const ForgotPassword = () => {
  // const dispatch = useDispatch();
  // const forgotPassword = useSelector((state) => state.forgotPassword);

  const handleSubmit = async e => {
    // e.preventDefault();
    // const email = e.target.email.value;
    // e.target.email.value = '';
    // dispatch(forgotPasswordRequest(email));
  };

  // if (forgotPassword) {
  //   return <Link to="/signin" />;
  // }

  return (
    <Container>
      <Title>Restore password</Title>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
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
        </Form>
      </Formik>
        <SignInLink to="/signin">Sign In</SignInLink>
      {/* {forgotPassword && <p>Password has been sent to your mailbox</p>} */}
      {/* {forgotPasswordError && <p>{forgotPasswordError}</p>} */}
    </Container>
  );
};

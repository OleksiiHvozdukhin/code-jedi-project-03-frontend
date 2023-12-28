import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  BackImage,
  BottleImage,
  Container,
  Input,
  Label,
  SendBtn,
  StyledErrorMessage,
  Subcontainer,
  Title,
} from './ForgotPassword.styled';
import { SignInLink } from 'components/ForgotPassword/ForgotPassword.styled';
import bottle from '../../images/Desktop/Desktop Bottle for Sign in-1x.png';
import bgscreen from '../../images/Desktop/Desktop Background element Main Page-1x.png';

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
    <Subcontainer>
      <BackImage width="1404" height="582" src={bgscreen} alt="" />
      <BottleImage width="600" src={bottle} alt="" />
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
        {/* {forgotPassword && <p>Password has been sent to your mailbox</p>} */}
        {/* {forgotPasswordError && <p>{forgotPasswordError}</p>} */}
      </Container>
    </Subcontainer>
  );
};

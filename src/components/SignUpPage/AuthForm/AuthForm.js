import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export  const AuthForm = ({ emailLabel, passwordLabel, repeatPasswordLabel, buttonLabel, onSuccess }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = 'Required';
    } else if (values.password !== values.repeatPassword) {
      errors.repeatPassword = 'Passwords must match';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    // Логика для отправки данных на сервер и обработки результата регистрации
    if (onSuccess) {
      onSuccess();
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">{emailLabel}</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">{passwordLabel}</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <ErrorMessage name="password" component="div" />
        </div>
        <div>
          <label htmlFor="repeatPassword">{repeatPasswordLabel}</label>
          <Field
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat password"
            required
          />
          <ErrorMessage name="repeatPassword" component="div" />
        </div>
        <div>
          <button type="submit">{buttonLabel}</button>
        </div>
      </Form>
    </Formik>
  );
};


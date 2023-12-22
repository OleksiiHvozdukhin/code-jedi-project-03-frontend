import React from 'react';
import { Formik, Form, Field } from 'formik';

export const AuthForm = ({ emailLabel, passwordLabel, buttonLabel, onSuccess }) => {
  const handleSubmit = (values, { resetForm }) => {
    // Логика для обработки входа
    if (onSuccess) {
      onSuccess();
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        </div>
        <button type="submit">{buttonLabel}</button>
      </Form>
    </Formik>
  );
};


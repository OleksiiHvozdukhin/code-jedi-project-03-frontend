import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const OnePortionForma = () => {
  return (
    <Formik initialValues={{}}>
      <Form>
        <label htmlFor="time">Recording time:</label>
        <Field type="text" id="time" name="time" value="0:00" />
        <ErrorMessage name="time" component="div" />
        <label htmlFor="portion">Recording time:</label>
        <Field type="number" id="portion" name="portion" value="0" />
        <ErrorMessage name="portion" component="div" />
        <span>250ml</span>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

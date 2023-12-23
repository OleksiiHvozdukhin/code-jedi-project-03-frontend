import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const DailyNormaForma = () => {
  const formValidationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select a gender'),
    weight: Yup.number()
      .required('Enter weight')
      .min(0, 'Weight must be greater than 0'),
    activityTime: Yup.number()
      .required('Enter activity time')
      .min(0, 'Activity time must be greater than 0'),
    dailyNorma: Yup.number()
      .required('Enter water intake')
      .min(0, 'Daily norma must be greater than 0')
      .max(15000, 'Daily norma must be less than 15000'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // saveDailyNorma(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        gender: '',
        weight: 0,
        activityTime: 0,
        dailyNorma: 0,
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="woman">For woman</label>
        <Field type="radio" id="woman" name="gender" value="woman" />
        <label htmlFor="man">For man</label>
        <Field type="radio" id="man" name="gender" value="man" />
        <ErrorMessage name="gender" component="div" />
        <label htmlFor="weight">Your weight in kilograms:</label>
        <Field type="number" name="weight"></Field>
        <ErrorMessage name="weight" component="div" />
        <label htmlFor="activityTime">
          The time of active participation in sports or other activities with a
          high physical. load:
        </label>
        <Field type="number" name="activityTime"></Field>
        <ErrorMessage name="activityTime" component="div" />
        <p>
          The required amount of water in liters per day: <span>1.8 L</span>
        </p>
        <label htmlFor="dailyNorma">
          The time of active participation in sports or other activities with a
          high physical. load:
        </label>
        <Field type="number" name="dailyNorma"></Field>
        <ErrorMessage name="dailyNorma" component="div" />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  BtnSave,
  Input,
  Label,
  LabelRadio,
  RadioGroup,
  Span,
  StyledErrorMessage,
  StyledForm,
} from './DailyNormaForma.styled';

export const DailyNormaForma = () => {
  const formValidationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select a gender'),
    weight: Yup.number()
      .required('Enter weight')
      .min(10, 'Weight must be greater than 0'),
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
        gender: 'woman',
        weight: 0,
        activityTime: 0,
        dailyNorma: 0,
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <RadioGroup>
            <Input
              type="radio"
              id="woman"
              name="gender"
              value="woman"
              checked
              className={errors.gender && touched.gender ? 'error' : ''}
            />
            <LabelRadio htmlFor="woman">For woman</LabelRadio>
            <Field type="radio" id="man" name="gender" value="man" />
            <LabelRadio htmlFor="man">For man</LabelRadio>
          </RadioGroup>
          <StyledErrorMessage name="gender" component="div" />
          <Label htmlFor="weight">Your weight in kilograms:</Label>
          <Input
            type="number"
            name="weight"
            className={`special ${
              errors.weight && touched.weight ? 'error' : ''
            }`}
          />
          <StyledErrorMessage name="weight" component="div" />
          <Label htmlFor="activityTime">
            The time of active participation in sports or other activities with
            a high physical. load:
          </Label>
          <Input
            type="number"
            name="activityTime"
            className={`special ${
              errors.activityTime && touched.activityTime ? 'error' : ''
            }`}
          />
          <StyledErrorMessage name="activityTime" component="div" />
          <Label className="special">
            The required amount of water in liters per day: <Span>1.8 L</Span>
          </Label>
          <Label htmlFor="dailyNorma" className="special last">
            Write down how much water you will drink:
          </Label>
          <Input
            type="number"
            name="dailyNorma"
            className={errors.dailyNorma && touched.dailyNorma ? 'error' : ''}
          />
          <StyledErrorMessage name="dailyNorma" component="div" />
          <BtnSave type="submit">Save</BtnSave>
        </StyledForm>
      )}
    </Formik>
  );
};

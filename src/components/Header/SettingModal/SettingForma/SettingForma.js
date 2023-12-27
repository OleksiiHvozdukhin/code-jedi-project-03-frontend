// import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema.js';
import { Field, Formik } from 'formik';
import { LabelRadio, RadioGroup, StyledForm } from './SettingForma.styled';

export const SettingForma = () => {
  return (
    <Formik>
      {({ errors, touched }) => (
        <StyledForm>
          <RadioGroup>
            <Field
              type="radio"
              id="woman"
              name="gender"
              checked
              className={errors.gender && touched.gender ? 'error' : ''}
            />
            <LabelRadio htmlFor="woman">For woman</LabelRadio>
            <Field type="radio" id="man" name="gender" />
            <LabelRadio htmlFor="man">For man</LabelRadio>
          </RadioGroup>
        </StyledForm>
      )}
    </Formik>
  );
};

// import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema.js';
import { Field, Formik } from 'formik';
import {
  Input,
  LabelRadio,
  RadioGroup,
  StyledForm,
} from './SettingForma.styled';

export const SettingForma = () => {
  return (
    <Formik>
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
        </StyledForm>
      )}
    </Formik>
  );
};

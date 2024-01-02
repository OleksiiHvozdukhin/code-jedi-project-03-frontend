// import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  Label,
  StyledForm,
  BtnSave,
  StyledErrorMessage,
} from './OnePortionForma.styled';
export const OnePortionForma = () => {
  return (
    <Formik initialValues={{ time: '', portion: '' }}>
      <StyledForm>
        <Label htmlFor="time">Recording time:</Label>
        <Field type="text" id="time" name="time" />
        <StyledErrorMessage name="time" component="div" />
        <Label htmlFor="portion">Enter the value of the water used:</Label>
        <Field type="number" id="portion" name="portion" />
        <StyledErrorMessage name="portion" component="div" />
        <span>50ml</span>
        <BtnSave type="submit">Save</BtnSave>
      </StyledForm>
    </Formik>
  );
};

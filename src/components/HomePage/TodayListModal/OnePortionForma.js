import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  Label,
  StyledForm,
  BtnSave,
  StyledErrorMessage,
} from './OnePortionForma.styled';

// import { useDispatch } from 'react-redux';
// import { addWater } from 'redux/user/waterOperations';
// import { selectError, selectIsLoading } from 'redux/waterRate/selectors';
export const OnePortionForma = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const formValidationSchema = Yup.object().shape({
    time: Yup.string().required('Please enter the time'),
    portion: Yup.string().required('Please enter the value of the water used'),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log('Запрос');
      // dispatch(addWater(values));
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      initialValues={{
        time: '00:00',
        portion: '0',
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
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

import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
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
import { useDispatch, useSelector } from 'react-redux';
import { saveWaterRateAsync } from 'redux/waterRate/waterRateOperations';
import { selectError, selectIsLoading } from 'redux/waterRate/selectors';
import { Loader } from 'components/Loader';
import { saveWaterRate } from 'redux/waterRate/waterRateSlice';

export const DailyNormaForma = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const formValidationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select a gender'),
    weight: Yup.number()
      .required('Enter weight')
      .min(4, 'Weight must be greater'),
    activityTime: Yup.number()
      .required('Enter activity time')
      .min(0, 'Activity time must be greater than 0'),
    dailyNorma: Yup.number()
      .required('Enter water rate')
      .min(0, 'Daily norma must be greater than 0')
      .max(15000, 'Daily norma must be less than 15000'),
  });

  const calculateWaterRate = ({ weight, activityTime, gender }) => {
    if (weight > 0) {
      const weightMultiplier = gender === 'woman' ? 0.03 : 0.04;
      const activityMultiplier = gender === 'woman' ? 0.4 : 0.6;
      const calculatedWaterRate = (
        +weight * weightMultiplier +
        +activityTime * activityMultiplier
      ).toFixed(1);
      return calculatedWaterRate;
    } else {
      return 0;
    }
  };

  const handleSubmit = async (values) => {
    const dailyNormaValue = values.dailyNorma;
    dispatch(saveWaterRate(dailyNormaValue));
    try {
      await dispatch(saveWaterRateAsync(dailyNormaValue));
      toast.success('Daily norma saved');
      onRequestClose();
    } catch (error) {
      toast.error(isError.message || 'An error occurred');
    }
  };

  return (
    <>
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
        {({ errors, touched, values, handleChange }) => {
          return (
            <StyledForm>
              <RadioGroup>
                <Input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                  checked={values.gender === 'woman'}
                  onChange={handleChange}
                  className={errors.gender && touched.gender ? 'error' : ''}
                />
                <LabelRadio htmlFor="woman">For woman</LabelRadio>
                <Field
                  type="radio"
                  id="man"
                  name="gender"
                  value="man"
                  checked={values.gender === 'man'}
                  onChange={handleChange}
                />
                <LabelRadio htmlFor="man">For man</LabelRadio>
              </RadioGroup>
              <StyledErrorMessage name="gender" component="div" />
              <Label htmlFor="weight">Your weight in kilograms:</Label>
              <Input
                type="number"
                name="weight"
                value={values.weight}
                onChange={handleChange}
                className={`special ${
                  errors.weight && touched.weight ? 'error' : ''
                }`}
              />
              <StyledErrorMessage name="weight" component="div" />
              <Label htmlFor="activityTime">
                The time of active participation in sports or other activities
                with a high physical. load:
              </Label>
              <Input
                type="number"
                name="activityTime"
                value={values.activityTime}
                className={`special ${
                  errors.activityTime && touched.activityTime ? 'error' : ''
                }`}
              />
              <StyledErrorMessage name="activityTime" component="div" />
              <Label className="special">
                The required amount of water in liters per day:{' '}
                <Span>{calculateWaterRate(values)} L</Span>
              </Label>
              <Label htmlFor="dailyNorma" className="special last">
                Write down how much water you will drink:
              </Label>
              <Input
                type="number"
                name="dailyNorma"
                className={
                  errors.dailyNorma && touched.dailyNorma ? 'error' : ''
                }
              />
              <StyledErrorMessage name="dailyNorma" component="div" />
              <BtnSave type="submit">Save</BtnSave>
              {isLoading && <Loader />}
              {/* {error && !isLoading && <p>{error}</p>} */}
              {/* {isError && !isLoading && toast.error('Network error')} */}
            </StyledForm>
          );
        }}
      </Formik>
      <Toaster />
    </>
  );
};

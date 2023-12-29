// import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema.js';
import { ErrorMessage, Formik } from 'formik';
import {
  LabelRadio,
  RadioGroup,
  StyledForm,
  Input,
  FieldWrapper,
  PasswordLabel,
  UserLabel,
  SubmitBtn,
  PasswordBox,
  PasswordBoxTitle,
} from './SettingForma.styled';
import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/authOperations';

export const SettingForma = ({ onClose, id, name, email }) => {
  // const dispatch = useDispatch();

  // const handleRefresh = (editedContact, actions) => {
  //   dispatch(refreshUser({ ...editedContact, id })).then(() => {
  //     onClose();
  //   });
  //   actions.resetForm();
  // };
  return (
    <Formik
      initialValues={{
        name,
        email,
      }}
      validationSchema={validateUserInfoSchema}
      // onSubmit={handleRefresh}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <RadioGroup>
            <LabelRadio>Your gender identity</LabelRadio>
            <Input
              type="radio"
              id="woman"
              name="gender"
              checked
              className={errors.gender && touched.gender ? 'error' : ''}
            />
            <LabelRadio htmlFor="woman">Girl</LabelRadio>
            <Input type="radio" id="man" name="gender" />
            <LabelRadio htmlFor="man">Man</LabelRadio>
          </RadioGroup>

          <FieldWrapper>
            <UserLabel htmlFor="name">Your name</UserLabel>
            <Input id="name" name="name" placeholder="David" />
            <ErrorMessage component="div" name="name" />
          </FieldWrapper>

          <FieldWrapper>
            <UserLabel htmlFor="email">Your email</UserLabel>
            <Input id="email" name="email" placeholder="test@mail.com" />
            <ErrorMessage component="div" name="email" />
          </FieldWrapper>

          <PasswordBox>
            <PasswordBoxTitle>Password</PasswordBoxTitle>

            <FieldWrapper>
              <PasswordLabel htmlFor="oldPassword">
                Outdated password:
              </PasswordLabel>
              <Input
                id="oldPassword"
                name="oldPassword"
                placeholder="Password"
              />
              <ErrorMessage component="div" name="oldPassword" />
            </FieldWrapper>

            <FieldWrapper>
              <PasswordLabel htmlFor="newPassword">New password:</PasswordLabel>
              <Input id="newPassword" name="email" placeholder="Password" />
              <ErrorMessage component="div" name="newPassword" />
            </FieldWrapper>

            <FieldWrapper>
              <PasswordLabel htmlFor="doubleNewPassword">
                Repeat new password:
              </PasswordLabel>
              <Input
                id="doubleNewPassword"
                name="doubleNewPassword"
                placeholder="Password
                "
              />
              <ErrorMessage component="div" name="doubleNewPassword" />
            </FieldWrapper>
          </PasswordBox>

          <SubmitBtn
            type="submit"
            onClick={() => {
              onClose();
            }}
          >
            Save
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema.js';
import { Formik } from 'formik';
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
  ErrorMessage,
} from './SettingForma.styled';

import { editUserInfoThunk } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../hooks/useAuth.jsx';
import { useState } from 'react';

export const SettingForma = ({ id }) => {
  const { name, email, gender } = useAuth();

  const [isPassword, setIsPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const initialValues = {
    name,
    email,
    gender,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch();

  const handleEditUserInfo = async (editedUser, actions) => {
    dispatch(editUserInfoThunk({ ...editedUser, id }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateUserInfoSchema}
      onSubmit={handleEditUserInfo}
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
              handleEditUserInfo();
            }}
          >
            Save
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

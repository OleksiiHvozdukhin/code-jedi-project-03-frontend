import { validateUserInfoSchema } from 'schemas/validateUserInfoSchema.js';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import {
  AvatarBox,
  AvatarBtn,
  AvatarBtnText,
  AvatarImg,
  AvatarWrapper,
  EyeBtn,
  FieldWrapper,
  FileInput,
  FlexBox,
  Input,
  InputWrapper,
  LabelRadio,
  LabelRadioGender,
  PasswordBox,
  PasswordBoxTitle,
  PasswordLabel,
  RadioBox,
  StyledErrorMessage,
  StyledForm,
  SubmitBtn,
  Text,
  UserBox,
  UserLabel,
} from './SettingModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import {
  editUserInfoThunk,
  updateAvatarThunk,
} from '../../../redux/auth/authOperations';
import { Formik } from 'formik';
import toast from 'react-hot-toast';

export const SettingModal = ({ isOpen, onRequestClose }) => {
  const { avatarURL } = useSelector(selectUser);
  const [selectedFile, setSelectedFile] = useState(null);

  // console.log(avatarURL);
  const [emailNotCorrect, setemailNotCorrect] = useState(false);
  const [newPasswordIsOld, setNewPasswordIsOld] = useState(false);
  const [passwordMismatch, setaPasswordMismatch] = useState(false);

  const dispatch = useDispatch();

  const [isPassword, setIsPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // const handleUploadPhoto = () => {
  //   console.log('File to upload:', selectedFile);
  // };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    await dispatch(updateAvatarThunk({ avatarURL: file }));
    // setSelectedFile(file);
  };

  const { email, gender, name } = useSelector(selectUser);
  const initialValues = {
    name: name,
    email: '',
    gender: gender,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const handleTogglePassword = passwordKey => {
    setIsPassword(prev => ({
      ...prev,
      [passwordKey]: !prev[passwordKey],
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formElements = e.target.elements;

    const formValues = {
      nameValue: formElements.name.value,
      emailValue: formElements.email.value,
      genderValue: formElements.gender.value,
      oldPassword: formElements.oldPassword.value,
      newPassword: formElements.newPassword.value,
      confirmPassword: formElements.confirmPassword.value,
    };
    const {
      nameValue,
      emailValue,
      genderValue,
      oldPassword,
      newPassword,
      confirmPassword,
    } = formValues;

    const [emailNotCorrectValue, passwordMismatchValue, newPasswordIsOldValue] =
      await Promise.all([
        email !== emailValue,
        newPassword !== confirmPassword,
        oldPassword === newPassword,
      ]);

    setemailNotCorrect(emailNotCorrectValue);
    setaPasswordMismatch(passwordMismatchValue);
    setNewPasswordIsOld(newPasswordIsOldValue);

    // Составляем полный объект запроса на изменение данных о юзере. Ничего тут не меняйте, т.к. тут чёрт ногу сломит
    const userObject = {};

    // toast.error('Email is not correct')
    // Смена имени, можно без пароля
    if (!!nameValue && nameValue !== name) userObject.name = nameValue;

    // Смена гендера, можно без пароля
    if (genderValue !== gender) userObject.gender = genderValue;

    // Смена имеила. Можно, но только с подтверждением пароля
    if (!!emailValue && emailValue !== email && !!oldPassword) {
      userObject.email = emailValue;
      userObject.oldPassword = oldPassword;
    }

    if (!!emailValue && emailValue !== email && !oldPassword)
      toast.error('You must confirm your password to change your email');

    if (emailValue === email)
      toast.error('You want to switch to the same e-mail address.');

    // Смена пароля. Можно, но только с подтверждением старого пароля и currentPassword
    if (
      !!oldPassword &&
      !passwordMismatchValue &&
      !newPasswordIsOldValue &&
      !!newPassword &&
      !!confirmPassword &&
      newPassword === confirmPassword
    ) {
      userObject.oldPassword = oldPassword;
      userObject.newPassword = newPassword;
    }

    if (
      !!oldPassword &&
      !!newPassword &&
      !!confirmPassword &&
      oldPassword === confirmPassword
    )
      toast.error('The new password must be different from the old password!');

    if (!oldPassword && !!newPassword)
      toast.error('Old password must be confirmed!');

    if ((!!newPassword && !confirmPassword) || newPassword !== confirmPassword)
      toast.error('The new password must be repeated!');

    if (!newPassword && !!confirmPassword)
      toast.error('Did you repeat a non-existent password? Seriously?');
    // if (!!oldPassword && !newPassword && !passwordMismatch && newPasswordIsOld)

    if (
      // !nameValue &&
      // !emailValue &&
      // !oldPassword &&
      // !newPassword &&
      // !confirmPassword &&
      // genderValue === gender
      Object.keys(userObject).length === 0
    )
      toast.error('You havent changed anything');
    //       nameValue: formElements.name.value,
    //       emailValue: formElements.email.value,
    //       genderValue: formElements.gender.value,
    //       oldPassword: formElements.oldPassword.value,
    //       newPassword: formElements.newPassword.value,
    //       confirmPassword: formElements.confirmPassword.value,
    else {
      await dispatch(editUserInfoThunk(userObject));
      toast.success(`You changed ${Object.keys(userObject)}`);
      // console.log(data);
      // onRequestClose();
    }

    // if (
    //   !emailNotCorrectValue &&
    //   !passwordMismatchValue &&
    //   !newPasswordIsOldValue
    //   ) {
    //     const data = await dispatch();
    //     // console.log(name, email, gender, oldPassword, newPassword)
    //     // editUserInfoThunk({ name, email, gender, oldPassword, newPassword })
    //     console.log('Data: ', data);
    //   }
    // if(!!)
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validateUserInfoSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Text>Your photo</Text>
            <AvatarWrapper>
              <AvatarBox>
                <AvatarImg src={avatarURL} alt="user avatar" />
              </AvatarBox>

              <FileInput
                name="avatarUrl"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                id="uploadInput"
              />
              <AvatarBtn
                type="button"
                htmlFor="uploadInput"
                // onClick={handleUploadPhoto}
              >
                <svg width="16" height="16" stroke="#407BFF" fill="none">
                  <use xlinkHref={`${sprite}#icon-arrow-up-tray`} />
                </svg>
                <AvatarBtnText>Upload a photo</AvatarBtnText>
              </AvatarBtn>
            </AvatarWrapper>
            <FlexBox>
              <UserBox>
                <LabelRadioGender>Your gender identity</LabelRadioGender>
                <RadioBox>
                  <Input
                    type="radio"
                    id="woman"
                    value="woman"
                    name="gender"
                    checked={values.gender === 'woman'}
                    onChange={handleChange}
                    className={errors.gender && touched.gender ? 'error' : ''}
                  />
                  <LabelRadio htmlFor="woman">Woman</LabelRadio>
                  <Input
                    type="radio"
                    id="man"
                    value="man"
                    name="gender"
                    checked={values.gender === 'man'}
                    onChange={handleChange}
                  />
                  <LabelRadio htmlFor="man">Man</LabelRadio>
                </RadioBox>

                <FieldWrapper>
                  <UserLabel htmlFor="name">Your name</UserLabel>
                  <InputWrapper>
                    <Input id="name" name="name" />
                    <StyledErrorMessage component="div" name="name" />
                  </InputWrapper>
                </FieldWrapper>

                <FieldWrapper>
                  <UserLabel htmlFor="email">Your email</UserLabel>
                  <InputWrapper>
                    <Input id="email" name="email" />
                    <StyledErrorMessage
                      component="div"
                      name="email"
                      autoComplete="new-password"
                    />
                  </InputWrapper>
                </FieldWrapper>
                {/* {emailNotCorrect === true &&
                  toast.error('Email is not correct')} */}
              </UserBox>

              <PasswordBox>
                <PasswordBoxTitle>Password</PasswordBoxTitle>

                <FieldWrapper>
                  <PasswordLabel htmlFor="oldPassword">
                    Outdated password:
                  </PasswordLabel>
                  <InputWrapper>
                    <Input
                      id="oldPassword"
                      name="oldPassword"
                      placeholder="Password"
                      type={isPassword.oldPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                    />

                    <EyeBtn
                      onClick={() => handleTogglePassword('oldPassword')}
                      type="button"
                    >
                      <svg width="16" height="16" stroke="#407BFF" fill="none">
                        <use
                          xlinkHref={
                            isPassword.oldPassword
                              ? `${sprite}#icon-eye`
                              : `${sprite}#icon-eye-slash`
                          }
                        />
                      </svg>
                    </EyeBtn>
                    <StyledErrorMessage component="div" name="oldPassword" />
                  </InputWrapper>
                </FieldWrapper>

                <FieldWrapper>
                  <PasswordLabel htmlFor="newPassword">
                    New password:
                  </PasswordLabel>

                  <InputWrapper>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      placeholder="Password"
                      type={isPassword.newPassword ? 'text' : 'password'}
                    />

                    <EyeBtn
                      onClick={() => handleTogglePassword('newPassword')}
                      type="button"
                    >
                      <svg width="16" height="16" stroke="#407BFF" fill="none">
                        <use
                          xlinkHref={
                            isPassword.newPassword
                              ? `${sprite}#icon-eye`
                              : `${sprite}#icon-eye-slash`
                          }
                        />
                      </svg>
                    </EyeBtn>
                    <StyledErrorMessage component="div" name="newPassword" />
                  </InputWrapper>
                  {/* {newPasswordIsOld === true &&
                    toast.error('!!!New password is old!!!')} */}
                </FieldWrapper>

                <FieldWrapper>
                  <PasswordLabel htmlFor="confirmPassword">
                    Repeat new password:
                  </PasswordLabel>
                  <InputWrapper>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Password"
                      type={isPassword.confirmPassword ? 'text' : 'password'}
                    />

                    <EyeBtn
                      onClick={() => handleTogglePassword('confirmPassword')}
                      type="button"
                    >
                      <svg width="16" height="16" stroke="#407BFF" fill="none">
                        <use
                          xlinkHref={
                            isPassword.confirmPassword
                              ? `${sprite}#icon-eye`
                              : `${sprite}#icon-eye-slash`
                          }
                        />
                      </svg>
                    </EyeBtn>
                    <StyledErrorMessage
                      component="div"
                      name="confirmPassword"
                    />
                  </InputWrapper>
                  {/* {passwordMismatch === true &&
                    toast.error('!!!Password mismatch!!!')} */}
                </FieldWrapper>
              </PasswordBox>
            </FlexBox>

            <SubmitBtn type="submit">Save</SubmitBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

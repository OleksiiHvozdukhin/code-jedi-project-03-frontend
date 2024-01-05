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
  IconEye,
  Input,
  InputWrapper,
  LabelRadio,
  PasswordBox,
  PasswordBoxTitle,
  PasswordLabel,
  RadioBox,
  RadioGroup,
  StyledForm,
  SubmitBtn,
  Text,
  UserLabel,
} from './SettingModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { updateAvatarThunk } from '../../../redux/auth/authOperations';
import { ErrorMessage, Formik } from 'formik';

export const SettingModal = ({ isOpen, onRequestClose }) => {
  const { avatarUrl } = useSelector(selectUser);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const [isPassword, setIsPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadPhoto = () => {
    // Ваша логика для загрузки фотографии.
    // Тут можно использовать выбранный файл (selectedFile)
    console.log('File to upload:', selectedFile);

    // Здесь можно вызвать соответствующий action для загрузки фотографии
    dispatch(updateAvatarThunk(selectedFile));
  };

  const initialValues = {
    name: '',
    email: '',
    gender: 'woman',
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

  const handleSubmit = async values => {
    console.log('data has been saved');
    onRequestClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateUserInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <StyledForm>
          <Text>Your photo</Text>
          <AvatarWrapper>
            <AvatarBox>
              <AvatarImg src={avatarUrl} alt="user avatar" />
            </AvatarBox>

            <FileInput
              name="avatarUrl"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="uploadInput"
            />
            <AvatarBtn type="button" onClick={handleUploadPhoto}>
              <svg width="16" height="16" stroke="#407BFF" fill="none">
                <use xlinkHref={`${sprite}#icon-arrow-up-tray`} />
              </svg>
              <AvatarBtnText>Upload a photo</AvatarBtnText>
            </AvatarBtn>
          </AvatarWrapper>

          <RadioGroup>
            <LabelRadio>Your gender identity</LabelRadio>
            <RadioBox>
              <Input
                type="radio"
                id="woman"
                name="gender"
                checked={values.gender === 'woman'}
                onChange={handleChange}
                className={errors.gender && touched.gender ? 'error' : ''}
              />
              <LabelRadio htmlFor="woman">Girl</LabelRadio>
              <Input
                type="radio"
                id="man"
                name="gender"
                checked={values.gender === 'man'}
                onChange={handleChange}
              />
              <LabelRadio htmlFor="man">Man</LabelRadio>
            </RadioBox>
          </RadioGroup>

          <FieldWrapper>
            <UserLabel htmlFor="name">Your name</UserLabel>
            <InputWrapper>
              <Input id="name" name="name" />
              <ErrorMessage component="div" name="name" />
            </InputWrapper>
          </FieldWrapper>

          <FieldWrapper>
            <UserLabel htmlFor="email">Your email</UserLabel>
            <InputWrapper>
              <Input id="email" name="email" />
              <ErrorMessage component="div" name="email" />
            </InputWrapper>
          </FieldWrapper>

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
                />

                <EyeBtn
                  onClick={() => handleTogglePassword('oldPassword')}
                  type="button"
                >
                  <IconEye width="16" height="16" stroke="#407BFF" fill="none">
                    <use
                      xlinkHref={
                        isPassword.oldPassword
                          ? `${sprite}#icon-eye-slash`
                          : `${sprite}#icon-eye`
                      }
                    />
                  </IconEye>
                </EyeBtn>
                <ErrorMessage component="div" name="oldPassword" />
              </InputWrapper>
            </FieldWrapper>

            <FieldWrapper>
              <PasswordLabel htmlFor="newPassword">New password:</PasswordLabel>

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
                  <IconEye width="16" height="16" stroke="#407BFF" fill="none">
                    <use
                      xlinkHref={
                        isPassword.newPassword
                          ? `${sprite}#icon-eye-slash`
                          : `${sprite}#icon-eye`
                      }
                    />
                  </IconEye>
                </EyeBtn>
                <ErrorMessage component="div" name="newPassword" />
              </InputWrapper>
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
                  <IconEye width="16" height="16" stroke="#407BFF" fill="none">
                    <use
                      xlinkHref={
                        isPassword.confirmPassword
                          ? `${sprite}#icon-eye-slash`
                          : `${sprite}#icon-eye`
                      }
                    />
                  </IconEye>
                </EyeBtn>
                <ErrorMessage component="div" name="confirmPassword" />
              </InputWrapper>
            </FieldWrapper>
          </PasswordBox>

          <SubmitBtn type="submit" onClick={handleSubmit}>
            Save
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

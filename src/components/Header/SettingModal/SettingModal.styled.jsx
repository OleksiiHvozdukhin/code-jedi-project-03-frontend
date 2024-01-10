import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { theme } from 'components/theme';

export const FlexBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: ${theme.spacing(12)};
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: ${theme.spacing(4)};
`;
export const AvatarWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(12)};
`;

export const AvatarBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
`;

export const AvatarBtn = styled.label`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: ${theme.spacing(4)};
  border: none;
  background: none;
`;

export const AvatarBtnText = styled.span`
  display: block;
  font-weight: 500;
  line-height: 1.28;
  font-size: 14px;
  color: ${theme.colors.blue};
  cursor: pointer;
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const FileInput = styled.input`
  display: none;
`;
export const StyledForm = styled(Form)`
  width: 256px;
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    width: 960px;
  }
`;

export const RadioBox = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing(26)};
  &:hover input {
    cursor: pointer;
  }
`;

export const Input = styled(Field)`
  outline: none;
  border: none;
  &::placeholder {
    color: ${theme.colors.skyblue};
    line-height: 1.25;
  }
  &:focus {
    caret-color: ${theme.colors.dark};
  }
  &:invalid {
    color: ${theme.colors.red};
    border-color: ${theme.colors.red};
  }
`;

export const LabelRadioGender = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: ${theme.spacing(6)};
`;

export const LabelRadio = styled.label`
  padding-left: ${theme.spacing(4)};
  margin-right: ${theme.spacing(12)};
  line-height: 1.25;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: ${theme.spacing(4)};
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
`;

export const PasswordBoxTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const PasswordLabel = styled.label`
  line-height: 1.25;
  margin-bottom: ${theme.spacing(4)};
`;

export const InputWrapper = styled.div`
  margin-bottom: ${theme.spacing(12)};
  width: 256px;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.skyblue};

  & input {
    color: ${theme.colors.blue};
    line-height: 1.25;
    width: 210px;
    &:invalid {
      color: ${theme.colors.red};
      border-color: ${theme.colors.red};
    }
  }
  @media screen and (min-width: 768px) {
    width: 392px;
    & input {
      width: 346px;
    }
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.white};
  cursor: pointer;
  transition: box-shadow ${theme.transition};

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-left: auto;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${theme.colors.red};
  line-height: 1.28;
  margin-top: ${theme.spacing(8)};
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:hover svg{
    stroke: ${theme.colors.orange};
  }
`;

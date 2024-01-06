import styled from 'styled-components';
import { Field, Form } from 'formik';

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
  margin-bottom: 8px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const AvatarBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  border: none;
`;

export const AvatarBtnText = styled.span`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 128.571%;
  color: var(--Primery-Color-Blue, #407bff);
`;
export const FileInput = styled.input`
  display: none;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

export const RadioGroup = styled.div``;
export const RadioBox = styled.div`
  display: flex;
`;

export const Input = styled(Field)`
  border: none;
`;

export const LabelRadio = styled.label``;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLabel = styled.label``;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PasswordBoxTitle = styled.h3`
  display: block;
`;

export const PasswordLabel = styled.label``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 10px;
  background: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
`;

export const ErrorMessage = styled.div``;

export const EyeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const IconEye = styled.svg``;

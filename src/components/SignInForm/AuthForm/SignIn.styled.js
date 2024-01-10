import styled from 'styled-components';
import { theme } from 'components/theme';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field } from 'formik';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: ${theme.spacing(12)};

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-top: ${theme.spacing(20)};
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-top: ${theme.spacing(0)};
    position: absolute;
    top: 222px;
    right: 211px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: ${theme.spacing(12)};

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-top: ${theme.spacing(20)};
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-top: ${theme.spacing(0)};
    position: absolute;
    top: 200px;
    right: 211px;
  }
`;


export const TitleForm = styled.h2`
  margin-bottom: ${theme.spacing(8)};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const AuthFormLabel = styled.label`
  display: flex;
  font-size: 18px;
  line-height: 1.33;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing(4)};
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 26px;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const AuthFormInput = styled(Field)`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.skyblue};
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.lightblue};
  line-height: 1.25;
  outline: none;
  width: 280px;
  &::placeholder {
    color: ${theme.colors.skyblue};
  }

  &:focus {
    caret-color: ${theme.colors.dark};
    color: ${theme.colors.blue};
    border-color: ${theme.colors.skyblue};
  }

  &:active {
    color: ${theme.colors.blue};
    border-color: ${theme.colors.skyblue};
  }

  &.error {
    border-color: ${theme.colors.red};
    color: ${theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const AuthFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.white};
  font-weight: 500;
  line-height: 1.25;
  border: 1px solid transparent;
  transition: box-shadow ${theme.transition};
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.red};
`;

export const SignLink = styled(Link)`
  margin-top: ${theme.spacing(8)};
  line-height: 1.25;
  color: ${theme.colors.blue};
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.orange};
  }
`;

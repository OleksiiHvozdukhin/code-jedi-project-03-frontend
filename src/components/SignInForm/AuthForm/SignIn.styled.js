import styled from 'styled-components';
import { theme } from 'components/theme';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 280px;

  @media screen and (min-width: 768px) {
    min-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const AuthFormLabel = styled.label`
display: flex;
  line-height: 1.25;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing(4)};
  &.special {
    margin-bottom: ${theme.spacing(13)};
  }
  &.last {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.11;
  }
`;

export const AuthFormInput = styled.input`
padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.skyblue};
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.lightblue};
  line-height: 1.25;
  outline: none;
  min-width: 280px;

  @media screen and (min-width: 768px) {
    min-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }

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
  
`;


export const AuthFormButton = styled.button`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border: 1px solid transparent;
  transition: box-shadow ${theme.transition};
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }


`;
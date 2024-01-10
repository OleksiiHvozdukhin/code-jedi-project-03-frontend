import { ErrorMessage, Field, Form } from 'formik';
import { theme } from 'components/theme';
import styled from 'styled-components';

export const BtnSave = styled.button`
  display: flex;
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
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
    min-width: 160px;
  }
`;

export const LabelRadio = styled.label`
  line-height: 1.25;
  color: ${theme.colors.dark};
  margin-left: ${theme.spacing(4)};
  &:not(:last-child) {
    margin-right: ${theme.spacing(5)};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const RadioGroup = styled.div`
  margin-bottom: ${theme.spacing(8)};
`;

export const Label = styled.label`
  line-height: 1.25;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing(4)};
  &.special {
    margin-bottom: ${theme.spacing(13)};
  }
  &.last {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const Input = styled(Field)`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.skyblue};
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.lightblue};
  line-height: 1.25;
  outline: none;

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

export const Span = styled.span`
  color: ${theme.colors.blue};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 14px;
  color: ${theme.colors.red};
  margin-bottom: ${theme.spacing(2)};
`;

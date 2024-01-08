import styled from 'styled-components';
import { TimePicker } from 'antd';
import { theme } from 'components/theme';

export const StyledDatePicker = styled(TimePicker)`
  width: 100%;
  margin-bottom: 24px;
  border: 1px solid ${theme.colors.skyblue};
  border-radius: 8px;
  padding: 10px;
  outline: none;
`;

export const TitleForm = styled.p`
  margin-bottom: 16px;
  font-family: 'Roboto-Medium';
`;

export const TextForm = styled.p`
  font-size: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 10px;
  border: 1px solid ${theme.colors.skyblue};
  outline: none;
  color: ${theme.colors.blue};
  font-size: 16px;
`;

export const AmountWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    justify-content: end;
  }
`;

export const ButtonSvg = styled.button`
  font-family: 'Roboto-Bold';
  width: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${theme.colors.white};
  border-radius: 30px;
  border: 1px solid ${theme.colors.lightblue};
`;

export const CounterWrap = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 24px;
  align-items: center;
  gap: 7px;
`;
export const SvgIcon = styled.svg`
  stroke: ${theme.colors.blue};
  fill: none;
  width: 24px;
  height: 24px;
`;
export const CounterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.blue};
  font-family: 'Roboto-Bold';
  width: 92px;
  height: 36px;
  border-radius: 40px;
  background-color: ${theme.colors.skyblue};
`;
export const TitleInputTime = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;
export const TitleInputText = styled.p`
  margin-bottom: 16px;
  font-family: 'Roboto-Medium';
`;
export const ButtonSubmit = styled.button`
  background-color: ${theme.colors.blue};
  border: none;
  width: 100%;
  height: 36px;
  color: ${theme.colors.white};
  font-size: 16px;
  font-family: 'Roboto-Medium';
  line-height: 1.3;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
  }
`;
export const AmountWater = styled.p`
  color: ${theme.colors.blue};
  border-radius: 40px;
  font-family: 'Roboto-Bold';
`;

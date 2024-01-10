import { theme } from 'components/theme';
import styled from 'styled-components';

export const LogOutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(12)};
  @media screen and (min-width: 768px) {
    width: 544px;
  }
`;

export const LogOutText = styled.p`
  /* display: block; */
  color: ${theme.colors.dark};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background: ${theme.colors.red};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.white};
  text-align: center;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  transition: box-shadow ${theme.transition};
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    font-size: 18px;
    line-height: 1.33;
    padding: 10px 30px;
  }
`;

export const CancelBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background: ${theme.colors.skyblue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.blue};
  text-align: center;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  transition: box-shadow ${theme.transition};
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    font-size: 18px;
    line-height: 1.33;
    padding: 10px 30px;
  }
`;

import styled from "styled-components";
import {theme} from "../../theme.jsx";

export const MonthTableWrap = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background-color: ${theme.colors.light};
  padding: 24px 8px;
  max-width: 264px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    max-width: 656px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 544px;
  }
`;

export const DaysList = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 264px;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(8)} ${theme.spacing(13)};

  @media screen and (min-width: 768px) {
    gap: ${theme.spacing(10)} ${theme.spacing(17)};
    max-width: 656px;
  }
  @media screen and (min-width: 1440px) {
    gap: ${theme.spacing(10)} ${theme.spacing(11)};
    max-width: 538px;
  }
`;

export const DayItem = styled.li`
  width: 20px;
  padding: 7px 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(2)};
  @media screen and (min-width: 768px) {
    padding: 7px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayNumber = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
  text-align: center;
  border-radius: 50%;
  border: transparent;
  background-color: ${theme.colors.white};
  font-size: 14px;
  line-height: 1.29;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.3);
  }
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 16px;
    line-height: 1.25;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayPercentage = styled.p`
  font-size: 10px;
  line-height: 1.6;
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  color: ${theme.colors.lightblue};

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 1.54;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const MonthsHead = styled.p`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${theme.colors.dark};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
  @media screen and (min-width: 1440px) {

  }
`;

export const MonthSelector = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(6)};

  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1440px) {
  }
`;

export const MonthAndYear = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  text-align: center;
  line-height: 1.25;
  color: ${theme.colors.blue};

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const MonthBackButton = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  background: transparent;
  border: none;
  color: ${theme.colors.blue};
  /* transform: rotate(90deg), */
  cursor: pointer;
&:hover,
  &:focus {
    color: ${theme.colors.orange}
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const MonthNextButton = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.colors.blue};
  /* transform: rotate(-90deg); */
  &:hover,
  &:focus {
    color: ${theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;


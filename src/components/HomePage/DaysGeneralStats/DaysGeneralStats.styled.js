import Modal from "react-modal";
import styled from "styled-components";
import { theme } from '../../theme.jsx';

export const DayStatsWrap = styled(Modal)`
width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
  position: absolute;
  max-width: 280px;
  padding: 24px 13px;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    max-width: 292px;
    padding: 24px 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const Date = styled.p`
  color: ${theme.colors.blue};
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DaysCloseButton = styled.button`
  color: ${theme.colors.blue};
  width: 16px;
  height: 16px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayStatsHead = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayStats = styled.p`
  color: ${theme.colors.blue};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

import { theme } from 'components/theme';
import styled from 'styled-components';

export const WaterTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  margin-bottom: ${theme.spacing(8)};

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.17;
  }
`;

export const SecondTitle = styled.h3`
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: ${theme.spacing(12)};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const TrackerHeading = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: ${theme.spacing(6)};
`;

export const TrackerList = styled.ul`
  margin-bottom: ${theme.spacing(12)};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const TrackerListElement = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${theme.spacing(8)};
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }

  & svg {
    width: 32px;
    height: 32px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ElementText = styled.p`
  margin-left: ${theme.spacing(4)};
  line-height: 1.25;
`;

export const TryTrackerButton = styled.button`
  margin-bottom: ${theme.spacing(20)};
  padding: 10px 30px;
  border-radius: 10px;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${theme.colors.white};
  transition: box-shadow ${theme.transition};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:focus {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: ${theme.spacing(30)};
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    margin: 0;
  }
`;

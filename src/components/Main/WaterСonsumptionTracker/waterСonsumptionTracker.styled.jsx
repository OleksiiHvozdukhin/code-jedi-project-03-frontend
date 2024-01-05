import { theme } from 'components/theme';
import styled from 'styled-components';

const WaterTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.17;
  }
`;

const SecondTitle = styled.h3`
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

const TrackerHeading = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 12px;
`;

const TrackerList = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    justify-content: space-between;
  }
`;

const TrackerListElement = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const ElementText = styled.p`
  margin-left: 8px;
  line-height: 1.25;
`;

const TryTrackerButton = styled.button`
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
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export {
  WaterTrackerContainer,
  Title,
  SecondTitle,
  TrackerHeading,
  TrackerList,
  ElementText,
  TryTrackerButton,
  TrackerListElement,
};

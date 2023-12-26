import styled from 'styled-components';


const WaterTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  letter-spacing: 0em;
  text-align: left;

  padding: 32px, 24px, 32px, 24px
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 16px;
`;

const SecondTitle = styled.span`
  font-size: 26px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 24px;
`;

const TrackerHeading = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

const TrackerList = styled.div`
  margin-bottom: 24px;
`;

const TrackerListElement = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  height: 40px;
`;

const ElementText = styled.div`
  height: 20px;
  text-align: center;
  margin-left: 8px;
`;

const TryTrackerButton = styled.button`
  width: 384px;
  height: 44px;
  padding: 10px 30px;
  border-radius: 10px;
  gap: 10px;
  background: #407BFF;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #FFFFFF;
`;

export {
  WaterTrackerContainer, Title, SecondTitle, TrackerHeading, TrackerList, ElementText,
  TryTrackerButton, TrackerListElement
};

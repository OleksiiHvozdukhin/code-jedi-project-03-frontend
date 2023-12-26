import styled from 'styled-components';
import { WaterOnsumptionTracker } from './WaterСonsumptionTracker/WaterСonsumptionTracker.jsx';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.jsx';


const FullScreenBackground = styled.div`
  max-width: 100%;
  min-height: 75vh;

  background: url(${require('../../images/Desktop/Desktop-Background-Main-Page-1x.png')}) center center / cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;

/
`;


export const Main = () => {
  return (
    <FullScreenBackground>
      <MainContainer>
        <WaterOnsumptionTracker />
        <WhyDrinkWater />
      </MainContainer>
      <h1></h1>
    </FullScreenBackground>
  );
};

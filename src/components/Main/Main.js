import { Container } from './Main.styled.js';
import { WaterConsumptionTracker } from './WaterСonsumptionTracker/WaterСonsumptionTracker.js';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.js';

export const Main = () => {
  return (
    <Container>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </Container>
  );
};

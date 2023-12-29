import { WaterСonsumptionTracker } from './WaterСonsumptionTracker/WaterСonsumptionTracker.js';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.js';

export const Main = () => {
  return (
    <div>
      <p>Это главная страничка для НЕавторизованного пользователя</p>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </div>
  );
};

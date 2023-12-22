import { DailyNorma } from './DailyNorma/DailyNorma';
import { DailyNormaModal } from './DailyNormaModal/DailyNormaModal';
import { DaysGeneralStats } from './DaysGeneralStats/DaysGeneralStats';
import { MonthStatsTable } from './MonthStatsTable/MonthStatsTable';
import { TodayListModal } from './TodayListModal/TodayListModal';
import { TodayWaterList } from './TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from './WaterRatioPanel/WaterRatioPanel';

export const HomePageComponent = () => {
  return (
    <div>
      <p>Это главная страничка для авторизованного пользователя!</p>
      <DailyNorma />
      <DailyNormaModal />
      <WaterRatioPanel />
      <TodayWaterList />
      <TodayListModal />
      <MonthStatsTable />
      <DaysGeneralStats/>
    </div>
  );
};

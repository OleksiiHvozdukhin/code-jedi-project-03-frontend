import { useState } from 'react';
import { DailyNorma } from './DailyNorma/DailyNorma';
import { DailyNormaModal } from './DailyNormaModal/DailyNormaModal';
import { MonthStatsTable } from './MonthStatsTable/MonthStatsTable';
import { TodayListModal } from './TodayListModal/TodayListModal';
import { TodayWaterList } from './TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from './WaterRatioPanel/WaterRatioPanel';

export const HomePageComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <p>Это главная страничка для авторизованного пользователя!</p>
      <DailyNorma openModal={openModal} />
      <DailyNormaModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <WaterRatioPanel />
      <TodayWaterList />
      <TodayListModal />
      <MonthStatsTable />
    </div>
  );
};

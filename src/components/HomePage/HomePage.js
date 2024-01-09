import { useState } from 'react';
import { DailyNorma } from './DailyNorma/DailyNorma';
import { DailyNormaModal } from './DailyNormaModal/DailyNormaModal';
import { MonthStatsTable } from './MonthStatsTable/MonthStatsTable';
import { TodayListModal } from './TodayListModal/TodayListModal';
import { TodayWaterList } from './TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from './WaterRatioPanel/WaterRatioPanel';
import { HomeContainer } from './HomePage.styled';
import { MonthTableWrap } from './MonthStatsTable/MonthsStatsTable.styled';

export const HomePageComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <HomeContainer>
      <div>
        <DailyNorma openModal={openModal} />
        <DailyNormaModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        <WaterRatioPanel />
      </div>
      <MonthTableWrap>
        <TodayWaterList />
        <TodayListModal />
        <MonthStatsTable />
      </MonthTableWrap>
    </HomeContainer>
  );
};

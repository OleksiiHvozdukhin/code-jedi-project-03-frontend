import { getDateInfo } from "../MonthStatsTable/MonthStatsTable";
import { Date, DaysCloseButton, DayStats, DayStatsHead, DayStatsWrap } from "./DaysGeneralStats.styled";

const overlayStyle = {
backgroundColor: "transparent",
};
export const DaysGeneralStats = ({ isModalOpen, closeModal, selectedDay }) => {
  if (!selectedDay) {
    return;
  }
  return (
    <DayStatsWrap
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{ overlay: overlayStyle }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <Date>
          {getDateInfo(selectedDay.date).day}, {getDateInfo(selectedDay.date).month}
        </Date>
        <DaysCloseButton onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M4 12L12 4M4 4L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DaysCloseButton>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        <DayStatsHead>Daily Norma:</DayStatsHead>
        <DayStats>{selectedDay.norm}</DayStats>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        <DayStatsHead>Fulfillment of the daily norm:</DayStatsHead>
        <DayStats>{selectedDay.percentage}</DayStats>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}
      >
        <DayStatsHead>How many servings of water:</DayStatsHead>
        <DayStats>{selectedDay.servings}</DayStats>
      </div>
    </DayStatsWrap>
  );
};

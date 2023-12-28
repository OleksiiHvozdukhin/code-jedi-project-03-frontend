import { getDateInfo } from "../MonthStatsTable/MonthStatsTable";
import { Date, DaysCloseButton, DayStats, DayStatsHead, DayStatsWrap } from "./DaysGeneralStats.styled";
import SpriteIcons from '../../../images/sprite.svg';

const overlayStyle = {
  backgroundColor: "transparent",
  zIndex: 0,
};
export const DaysGeneralStats = ({
  isModalOpen,
  closeModal,
  selectedDay,
  modalPosition,
}) => {
  if (!selectedDay) {
    return null;
  }
  const { top, left } = modalPosition;
  const modalStyle = {
    top: `${top}px`,
    left: window.innerWidth >= 768 ? `${left}px` : '50%',
    transform:
      window.innerWidth >= 768
        ? 'translate(-100%, -100%)'
        : 'translate(-50%, -100%)',
    position: 'absolute',
  };

  return (
    <DayStatsWrap
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{ overlay: overlayStyle, content: modalStyle }}
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
          {getDateInfo(selectedDay.date).day},{' '}
          {getDateInfo(selectedDay.date).month}
        </Date>
        <DaysCloseButton onClick={closeModal}>
          <svg
            width="16px"
            height="16px"
            stroke="currentColor"
            fill="currentColor"
          >
            <use xlinkHref={`${SpriteIcons}#icon-close`} />
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
        <DayStats>{selectedDay.norm} L</DayStats>
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
        <DayStats>{selectedDay.percentage}%</DayStats>
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

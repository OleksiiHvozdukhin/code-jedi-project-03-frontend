import { Date, DaysCloseButton, DayStats, DayStatsHead, DayStatsWrap } from "./DaysGeneralStats.styled";

export const DaysGeneralStats = () => {
  return (
    <DayStatsWrap>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <Date>5, April</Date>
        <DaysCloseButton>
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
        <DayStats>1.5 L</DayStats>
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
        <DayStats>100%</DayStats>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}
      >
        <DayStatsHead>How many servings of water:</DayStatsHead>
        <DayStats>6</DayStats>
      </div>
    </DayStatsWrap>
  );
};

import {
  DayItem,
  DayNumber,
  DayPercentage,
  DaysList,
  MonthAndYear,
  MonthSelector,
  MonthsHead,
  MonthBackButton,
  MonthNextButton,
  MonthTableWrap,
} from './MonthsStatsTable.styled';

export const MonthStatsTable = () => {
  return (
    <MonthTableWrap>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <MonthsHead>Month</MonthsHead>
        <MonthSelector>
          <MonthBackButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.50344 7.30915C4.42151 7.22712 4.37549 7.11593 4.37549 6.99999C4.37549 6.88405 4.42151 6.77285 4.50344 6.69082L8.87844 2.31582C8.91849 2.27284 8.96679 2.23836 9.02046 2.21445C9.07412 2.19054 9.13206 2.17768 9.1908 2.17664C9.24954 2.17561 9.30789 2.18641 9.36237 2.20842C9.41684 2.23042 9.46633 2.26317 9.50788 2.30472C9.54942 2.34626 9.58217 2.39575 9.60417 2.45022C9.62618 2.5047 9.63698 2.56305 9.63595 2.62179C9.63491 2.68054 9.62205 2.73847 9.59814 2.79214C9.57423 2.8458 9.53975 2.8941 9.49677 2.93415L5.43094 6.99999L9.49677 11.0658C9.53975 11.1059 9.57423 11.1542 9.59814 11.2078C9.62205 11.2615 9.63491 11.3194 9.63595 11.3782C9.63698 11.4369 9.62618 11.4953 9.60417 11.5498C9.58217 11.6042 9.54942 11.6537 9.50788 11.6953C9.46633 11.7368 9.41684 11.7696 9.36237 11.7916C9.30789 11.8136 9.24954 11.8244 9.1908 11.8233C9.13206 11.8223 9.07412 11.8094 9.02046 11.7855C8.96679 11.7616 8.91849 11.7271 8.87844 11.6842L4.50344 7.30915Z"
              />
            </svg>
          </MonthBackButton>
          <MonthAndYear>April, 2023</MonthAndYear>
          <MonthNextButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.49656 7.30915C9.57849 7.22712 9.62451 7.11593 9.62451 6.99999C9.62451 6.88405 9.57849 6.77285 9.49656 6.69082L5.12156 2.31582C5.08151 2.27284 5.03321 2.23836 4.97954 2.21445C4.92588 2.19054 4.86794 2.17768 4.8092 2.17664C4.75046 2.17561 4.69211 2.18641 4.63763 2.20842C4.58316 2.23042 4.53367 2.26317 4.49212 2.30472C4.45058 2.34626 4.41783 2.39575 4.39583 2.45022C4.37382 2.5047 4.36302 2.56305 4.36405 2.62179C4.36509 2.68054 4.37795 2.73847 4.40186 2.79214C4.42577 2.8458 4.46025 2.8941 4.50323 2.93415L8.56906 6.99999L4.50323 11.0658C4.46025 11.1059 4.42577 11.1542 4.40186 11.2078C4.37795 11.2615 4.36509 11.3194 4.36405 11.3782C4.36302 11.4369 4.37382 11.4953 4.39583 11.5498C4.41783 11.6042 4.45058 11.6537 4.49212 11.6953C4.53367 11.7368 4.58316 11.7696 4.63763 11.7916C4.69211 11.8136 4.75046 11.8244 4.8092 11.8233C4.86794 11.8223 4.92588 11.8094 4.97954 11.7855C5.03321 11.7616 5.08151 11.7271 5.12156 11.6842L9.49656 7.30915Z"
              />
            </svg>
          </MonthNextButton>
        </MonthSelector>
      </div>
      <DaysList>
        <DayItem>
          <DayNumber>1</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>2</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>3</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>4</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>5</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>6</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>7</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>8</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>9</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>10</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
        <DayItem>
          <DayNumber>11</DayNumber>
          <DayPercentage>100%</DayPercentage>
        </DayItem>
      </DaysList>
    </MonthTableWrap>
  );
};

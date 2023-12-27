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
import { useState } from 'react';
import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';
import SpriteIcons from "../../../images/sprite.svg";

export const getDateInfo = date => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateObject = new Date(date);
  const monthName = months[dateObject.getMonth()];
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();

  return {
    month: monthName,
    day: dayOfMonth,
    year: year,
  };
};

const daysArray = () => {
  return Array.from({ length: 31 }, (_, index) => {
    const dayNumber = index + 1;
    const date = `2023-12-${dayNumber < 10 ? '0' : ''}${dayNumber}`;
    const norm = 1.8;
    const shouldHave100Percent = Math.random() < 0.32;
    const percentage = shouldHave100Percent
      ? 100
      : Math.floor(Math.random() * 51) + 50;
    const servings = Math.floor(Math.random() * 4) + 5;
    return {
      date,
      norm,
      percentage,
      servings,
    };
  });
};
const initialDaysArray = daysArray();


export const MonthStatsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
const [daysArray] = useState(initialDaysArray);

const handleOpenModal = selectedDay => {
  setIsModalOpen(true);
  setSelectedDay(selectedDay);
};
const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedDay(null);
  };

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
            <svg width='14px' height='14px'>
              <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
            </svg>
          </MonthBackButton>
          <MonthAndYear>
            {getDateInfo(daysArray[0].date).month},{' '}
            {getDateInfo(daysArray[0].date).year}
          </MonthAndYear>
          <MonthNextButton>
            <svg width='14px' height='14px'>
              <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
            </svg>
          </MonthNextButton>
        </MonthSelector>
      </div>
      <DaysList>
        {daysArray.map((day, i) => {
          return (
            <DayItem key={day.date}>
              <DayNumber
                onClick={() => handleOpenModal(day)}
                style={{
                  border:
                    day.percentage < 100 ? '1px solid #FF9D43' : 'transparent',
                }}
              >
                {getDateInfo(day.date).day}
              </DayNumber>
              <DayPercentage>{day.percentage}%</DayPercentage>
            </DayItem>
          );
        })}
      </DaysList>
      <DaysGeneralStats
        closeModal={handleCloseModal}
        isModalOpen={isModalOpen}
        selectedDay={selectedDay}
      />
    </MonthTableWrap>
  );
};

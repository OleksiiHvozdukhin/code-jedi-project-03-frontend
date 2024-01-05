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
  PaginationWrap,
} from './MonthsStatsTable.styled';
import { useEffect, useState } from 'react';
import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';
import SpriteIcons from '../../../images/sprite.svg';

export const getDateInfo = date => {
import SpriteIcons from '../../../images/sprite.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUserToken } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader';

const getMonthName = monthIndex => {
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
  return months[monthIndex];
};

export const MonthStatsTable = () => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [daysArray] = useState(initialDaysArray);

  const handleOpenModal = selectedDay => {
    setIsModalOpen(true);
    setSelectedDay(selectedDay);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  const [daysArray, setDaysArray] = useState([]);
  const userToken = useSelector(selectUserToken);
  const [isLoading, setIsLoading] = useState(false);
  const [statsPosition, setStatsPosition] = useState({ top: 0, right: 0 });
  const [currentMonthIndex] = useState(new Date().getMonth());
  const [currentYear] = useState(new Date().getFullYear());
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonthIndex);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const initialDaysArray = (month, year) => {
    const fullDaysArray = Array.from(
      { length: new Date(year, month + 1, 0).getDate() },
      (_, index) => {
        return {
          month: getMonthName(month),
          date: index + 1,
          totalProcent: '0',
          numOfWaterRecords: '0',
        };
      }
    );
    return fullDaysArray;
  };

  const fetchDaysArray = async (monthName, initialArray) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/consumedWater/month/${monthName}`,
        config
      );
      const data = response.data;
      const fetchedArray = initialArray.map((day, i) => {
        const fetchedDay = data.find(item => item.date === day.date);
        return fetchedDay || day;
      });

      setDaysArray(fetchedArray);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      setDaysArray(initialArray);
    }
  };

  const handleMonthChange = direction => {
    const totalMonths = 12;
    const newMonthIndex =
      (selectedMonthIndex + direction + totalMonths) % totalMonths;
    if (direction === -1 && newMonthIndex === 11) {
      setSelectedYear(selectedYear - 1);
    } else if (direction === 1 && newMonthIndex === 0) {
      setSelectedYear(selectedYear + 1);
    }
    setSelectedMonthIndex(newMonthIndex);
    if (
      direction === 1 &&
      newMonthIndex > currentMonthIndex &&
      currentYear === selectedYear
    ) {
      setSelectedYear(currentYear);
      setSelectedMonthIndex(currentMonthIndex);
      return;
    }
    const newMonthName = getMonthName(newMonthIndex);
    fetchDaysArray(newMonthName);
  };

  useEffect(() => {
    const selectedMonthName = getMonthName(selectedMonthIndex);
    const initialArray = initialDaysArray(selectedMonthIndex, currentYear);
    const fetchData = async () => {
      await fetchDaysArray(selectedMonthName, initialArray);
    };
    fetchData();
  }, [selectedMonthIndex]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isStatsOpen &&
        event.target.id !== 'day-stats' &&
        event.target.id !== 'day-number'
      ) {
        handleCloseStats();
      }
    };
    if (isStatsOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isStatsOpen]);

  const handleOpenStats = (clickedDay, event) => {
    if (selectedDay && clickedDay.date === selectedDay.date) {
      setIsStatsOpen(false);
      setSelectedDay(null);
    } else {
      handleCloseStats();
      setSelectedDay(clickedDay);
      calculateStatsPosition(event);
      setIsStatsOpen(true);
    }
  };

  const handleCloseStats = () => {
    setIsStatsOpen(false);
    setSelectedDay(null);
  };

  const calculateStatsPosition = event => {
    const dayElement = event.currentTarget;
    const dayRect = dayElement.getBoundingClientRect();
    const top = dayRect.top + window.scrollY - 1;
    const left =
      dayRect.left > 292
        ? dayRect.left + dayRect.width / 2
        : dayRect.left + 292 + dayRect.width / 2;
    setStatsPosition({ top, left });
  };

  return (
    <MonthTableWrap>
      <PaginationWrap>
        <MonthsHead>Month</MonthsHead>
        <MonthSelector>
          <MonthBackButton>
            <svg width="14px" height="14px">
          <MonthBackButton
            onClick={() => {
              handleMonthChange(-1);
            }}
          >
            <svg width="14px" height="14px">
              <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
            </svg>
          </MonthBackButton>
          <MonthAndYear>
            {getMonthName(selectedMonthIndex)}, {selectedYear}
          </MonthAndYear>
          <MonthNextButton>
            <svg width="14px" height="14px">
          <MonthNextButton
            onClick={() => {
              handleMonthChange(1);
            }}
          >
            <svg width="14px" height="14px">
              <use xlinkHref={`${SpriteIcons}#icon-chevron-double-up`} />
            </svg>
          </MonthNextButton>
        </MonthSelector>
      </PaginationWrap>
      {isLoading ? (
        <Loader />
      ) : (
        <DaysList>
          {daysArray &&
            daysArray.map(day => {
              return (
                <DayItem key={day.date}>
                  <DayNumber
                    id="day-number"
                    onClick={event => handleOpenStats(day, event)}
                    style={{
                      border:
                        day.totalProcent < 100
                          ? '1px solid #FF9D43'
                          : 'transparent',
                    }}
                  >
                    {day.date}
                  </DayNumber>
                  <DayPercentage>{day.totalProcent}%</DayPercentage>
                </DayItem>
              );
            })}
        </DaysList>
      )}
      {isStatsOpen && (
        <DaysGeneralStats
          closeStats={handleCloseStats}
          isOpen={isStatsOpen}
          selectedDay={selectedDay}
          statsPosition={statsPosition}
        />
      )}
    </MonthTableWrap>
  );
};

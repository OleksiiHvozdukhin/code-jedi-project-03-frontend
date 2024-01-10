import { OnePortionWater } from './OnePortionWater';
import React, { useEffect, useState } from 'react';
// import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import { OnePortionForma } from '../TodayListModal/OnePortionForma';
// import { useDispatch } from 'react-redux';
// import { selectWater } from 'redux/user/selectors';
// import { deleteWater } from 'redux/user/waterOperations';
import SpriteIcons from '../../../images/sprite.svg';
import { ButtonAddWater, List, TodayHead } from './TodayWaterList.styled';
import { TodayListModal } from '../TodayListModal/TodayListModal';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayWaterThunk } from 'redux/consumedwaters/consumedwatersOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { selectWaterToday } from 'redux/consumedwaters/consumedwatersSelectors';

export const TodayWaterList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getTodayWaterThunk());
        console.log(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const { dailyWaterList } = useSelector(selectWaterToday);

  const sortedDailyWaterList = dailyWaterList.slice().sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1];
  });

  // const sortedDailyWaterList = dailyWaterList;

  return (
    <>
      <TodayHead>Today</TodayHead>
      <List>
        {sortedDailyWaterList.map(portion => (
          <OnePortionWater
            key={portion._id}
            _id={portion._id}
            waterVolume={portion.waterVolume}
            time={portion.time}
          />
        ))}
        <ButtonAddWater type="button" onClick={OpenModal}>
          <svg width="24" height="24" stroke="#407BFF" fill="none">
            <use xlinkHref={`${SpriteIcons}#icon-plus-small`} />
          </svg>
          Add water
        </ButtonAddWater>
        <TodayListModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </List>
    </>
  );
};

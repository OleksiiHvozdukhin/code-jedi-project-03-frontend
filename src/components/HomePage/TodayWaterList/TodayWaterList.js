import { OnePortionWater } from './OnePortionWater';
import React, { useState } from 'react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { OnePortionForma } from '../TodayListModal/OnePortionForma';
// import { useDispatch } from 'react-redux';
// import { selectWater } from 'redux/user/selectors';
// import { deleteWater } from 'redux/user/waterOperations';
import SpriteIcons from '../../../images/sprite.svg';
import { ButtonAddWater, List } from './TodayWaterList.styled';
import { TodayListModal } from '../TodayListModal/TodayListModal';

export const TodayWaterList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  // const dispatch = useDispatch();
  // const handleDelete = portionId => {
  //   dispatch(deleteWater(portionId));
  // };

  return (
    <List>
      <h2>Today</h2>
      <OnePortionWater />
      <ButtonAddWater type="button" onClick={OpenModal}>
        <svg width="24" height="24" stroke="#407BFF" fill="none">
          <use xlinkHref={`${SpriteIcons}#icon-plus-small`} />
        </svg>
        Add water
      </ButtonAddWater>
      <TodayListModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </List>
  );
};

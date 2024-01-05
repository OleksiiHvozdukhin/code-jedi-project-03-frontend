import { OnePortionWater } from './OnePortionWater';
import React, { useState } from 'react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { OnePortionForma } from '../TodayListModal/OnePortionForma';
import { useDispatch } from 'react-redux';
// import { selectWater } from 'redux/user/selectors';
import { deleteWater } from 'redux/user/waterOperations';
import SpriteIcons from '../../../images/sprite.svg';
import { ButtonAddWater, List } from './TodayWaterList.styled';

export const TodayWaterList = () => {
  // const portions = useSelector(selectWater);
  const [isAddWaterOpen, setIsAddWaterOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = portionId => {
    dispatch(deleteWater(portionId));
  };

  return (
    <List>
      <h2>Today</h2>
      <OnePortionWater onDelete={handleDelete} />
      <ButtonAddWater onClick={() => setIsAddWaterOpen(true)}>
        <svg width="24" height="24" stroke="#407BFF" fill="none">
          <use xlinkHref={`${SpriteIcons}#icon-plus-small`} />
        </svg>
        <span>Add water</span>
      </ButtonAddWater>
      <ModalWindow
        title="Add water"
        onShow={isAddWaterOpen}
        isOpen={isAddWaterOpen}
        onRequestClose={() => {
          setIsAddWaterOpen(false);
        }}
      >
        <p>Amount of water:</p>
        <button onClick="decrement">-</button>
        <span>50ml</span>
        <button onClick="increment">+</button>
        <OnePortionForma />
      </ModalWindow>
    </List>
  );
};

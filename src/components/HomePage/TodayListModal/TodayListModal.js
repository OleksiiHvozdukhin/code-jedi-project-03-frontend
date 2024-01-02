import { OnePortionForma } from './OnePortionForma';
import React, { useState } from 'react';
// import SpriteIcons from '../../../images/sprite.svg';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const TodayListModal = () => {
  const [isAddWaterOpen, setIsAddWaterOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsAddWaterOpen(true)}>Add water</button>
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
    </div>
  );
};

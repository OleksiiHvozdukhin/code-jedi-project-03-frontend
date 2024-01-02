import React, { useState } from 'react';
import {
  BtnAddWater,
  PercentageValue,
  PercentageWrapper,
  WaterLabel,
  WaterPanel,
  WaterRangeField,
  WaterWrapper,
} from './WaterRatioPanelstyled';
// import SpriteIcons from '../../../images/sprite.svg';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { OnePortionForma } from '../TodayListModal/OnePortionForma';

export const WaterRatioPanel = () => {
  const [isAddWaterOpen, setIsAddWaterOpen] = useState(false);
  // const openM = () => setIsAddWaterOpen(true);
  // const closeModal = () => setIsAddWaterOpen(false);

  return (
    <WaterWrapper>
      <WaterPanel>
        <WaterLabel htmlFor="water-ratio">Today</WaterLabel>
        <WaterRangeField
          type="range"
          name="water-ratio"
          id="water-ratio"
          value="50"
          min="0"
          max="100"
        />
        <PercentageWrapper>
          <PercentageValue className="water-range-value-min">
            0%
          </PercentageValue>
          <PercentageValue className="water-range-value">50%</PercentageValue>
          <PercentageValue className="water-range-value-max">
            100%
          </PercentageValue>
        </PercentageWrapper>
      </WaterPanel>
      <BtnAddWater type="button" onClick={() => setIsAddWaterOpen(true)}>
        Add water
      </BtnAddWater>
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
    </WaterWrapper>
  );
};

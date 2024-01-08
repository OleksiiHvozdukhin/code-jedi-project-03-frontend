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
// import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import { OnePortionForma } from '../TodayListModal/OnePortionForma';
import { TodayListModal } from '../TodayListModal/TodayListModal';

export const WaterRatioPanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
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
      <BtnAddWater type="button" onClick={OpenModal}>
        Add water
      </BtnAddWater>
      <TodayListModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </WaterWrapper>
  );
};

import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  BtnAddWater,
  PercentageValue,
  PercentageWrapper,
  WaterLabel,
  WaterPanel,
  WaterRangeField,
  WaterWrapper,
} from './WaterRatioPanelstyled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
export const WaterRatioPanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
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
      <BtnAddWater type="button" onClick={openModal}>
        Add water
      </BtnAddWater>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Setting Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </WaterWrapper>
  );
};

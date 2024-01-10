import React, { useState } from 'react';
import SpriteIcons from '../../../images/sprite.svg';

// import { useDispatch } from 'react-redux';

import {
  AmountWater,
  AmountWrap,
  ButtonSubmit,
  ButtonSvg,
  CounterContent,
  CounterWrap,
  FormWrapper,
  StyledDatePicker,
  StyledInput,
  SvgIcon,
  TextForm,
  TitleForm,
  TitleInputText,
  TitleInputTime,
} from '../TodayListModal/TodayListModal.styled';
import { GlassIcon, PortionText, TimeText } from './OnePortionWater.styled';
import { EditBody, ItemWrapper } from './EditModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterRate } from 'redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { editWaterThunk } from 'redux/consumedwaters/consumedwatersOperations';

export const EditModal = ({ onRequestClose, params }) => {
  const [waterVolume, setWaterVolume] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  // const dispatch = useDispatch();

  const hours = startDate.getHours().toString().padStart(2, '0');
  const minutes = startDate.getMinutes().toString().padStart(2, '0');
  const increment = () => {
    // console.log(setWaterVolume(state => state + 50));
    setWaterVolume(state => state + 50);
  };

  const decrement = () => {
    setWaterVolume(state => state - 50);
  };

  const handleChange = async evt => {
    if (evt.target.value.length > 4) {
      return;
    }
    const result = Math.floor(evt.target.value);
    if (result || result === 0) {
      setWaterVolume(result);
    }
  };

  const onChange = timeValue => {
    setStartDate(timeValue.$d);
  };

  const handleCloseModal = () => {
    //  closeModal();
    setWaterVolume(0);
    setStartDate(new Date());
  };

  const dispatch = useDispatch();
  const waterNorma = useSelector(selectWaterRate);

  const handleSubmit = async e => {
    e.preventDefault();

    const time = startDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const date = startDate.getDate();
    const month = startDate.toLocaleString('en-US', { month: 'long' });
    const percent = Math.round((waterVolume / waterNorma) * 100);

    if (waterVolume < 0 || waterVolume > 1500) {
      return toast.error('You can enter value from 0 to 1500');
    } else if (waterVolume > 0) {
      const { _id } = params;
      await dispatch(
        editWaterThunk({
          _id,
          body: { waterVolume, time, date, month, percent },
        })
      );
      handleCloseModal();
      return toast.success(`${waterVolume} water added`);
    }
  };

  const disabledTime = now => {
    const currentHour = now.hour();
    const disabledHours = () => {
      return Array.from({ length: 24 }, (_, index) =>
        index > currentHour ? index : -1
      ).filter(hour => hour !== -1);
    };

    const disabledMinutes = selectedHour => {
      return selectedHour === currentHour
        ? Array.from({ length: 60 }, (_, index) =>
            index > now.minute() ? index : -1
          ).filter(minute => minute !== -1)
        : [];
    };

    return { disabledHours, disabledMinutes };
  };
  return (
    <EditBody>
      <ItemWrapper>
        <GlassIcon>
          <use xlinkHref={`${SpriteIcons}#icon-glass`} />
        </GlassIcon>
        <PortionText>{params.waterVolume} ml</PortionText>
        <TimeText>{params.time} AM</TimeText>
      </ItemWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <TitleForm>Correct entered data:</TitleForm>
        <TextForm>Amount of water:</TextForm>
        <CounterWrap>
          <ButtonSvg
            onClick={decrement}
            disabled={waterVolume <= 49 ? true : false}
          >
            <SvgIcon>
              <use xlinkHref={`${SpriteIcons}#icon-minus-small`} />
            </SvgIcon>
          </ButtonSvg>
          <CounterContent>{waterVolume} ml</CounterContent>
          <ButtonSvg
            onClick={increment}
            disabled={waterVolume >= 1451 ? true : false}
          >
            <SvgIcon>
              <use xlinkHref={`${SpriteIcons}#icon-plus-small`} />
            </SvgIcon>
          </ButtonSvg>
        </CounterWrap>
        <label>
          <TitleInputTime>Recording time:</TitleInputTime>
          <StyledDatePicker
            placeholder={`${params.time}`}
            format="HH:mm"
            onChange={onChange}
            disabledTime={disabledTime}
          />
        </label>
        <label>
          <TitleInputText>Enter the value of the water used:</TitleInputText>
          <StyledInput
            name="amount"
            type="text"
            value={params.waterVolume}
            onChange={handleChange}
          />
        </label>
        <AmountWrap>
          <AmountWater>{waterVolume} ml</AmountWater>
          <ButtonSubmit type="submit">Save</ButtonSubmit>
        </AmountWrap>
      </FormWrapper>
    </EditBody>
  );
};

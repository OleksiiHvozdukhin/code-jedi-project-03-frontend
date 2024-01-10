// import { OnePortionForma } from './OnePortionForma';
import React, { useState } from 'react';
import SpriteIcons from '../../../images/sprite.svg';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

// import { addWater } from 'redux/user/waterOperations';
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
} from './TodayListModal_1.styled';
import { selectWaterRate } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addWaterThunk } from 'redux/consumedwaters/consumedwatersOperations';
// import { toast } from 'react-hot-toast';

export const TodayListModal = ({ modalIsOpen, closeModal }) => {
  const [waterVolume, setWaterVolume] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  const hours = startDate.getHours().toString().padStart(2, '0');
  const minutes = startDate.getMinutes().toString().padStart(2, '0');
  const increment = () => {
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
    closeModal();
    setWaterVolume(0);
    setStartDate(new Date());
  };

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
      const data = await dispatch(
        addWaterThunk({ waterVolume, time, date, month, percent })
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
    <div>
      <ModalWindow
        title="Add water"
        onShow={modalIsOpen}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <FormWrapper onSubmit={handleSubmit}>
          <TitleForm>Choose a value:</TitleForm>
          <TextForm>Amount of water:</TextForm>
          <CounterWrap>
            <ButtonSvg
              type="button"
              onClick={decrement}
              disabled={waterVolume <= 49 ? true : false}
            >
              <SvgIcon>
                <use xlinkHref={`${SpriteIcons}#icon-minus-small`} />
              </SvgIcon>
            </ButtonSvg>
            <CounterContent>{waterVolume} ml</CounterContent>
            <ButtonSvg
              type="button"
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
              placeholder={`${hours}:${minutes}`}
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
              value={waterVolume}
              onChange={handleChange}
            />
          </label>
          <AmountWrap>
            <AmountWater>{waterVolume} ml</AmountWater>
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </AmountWrap>
        </FormWrapper>
      </ModalWindow>
    </div>
  );
};

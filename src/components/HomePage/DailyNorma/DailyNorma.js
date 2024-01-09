import { useSelector } from 'react-redux';
import {
  EditBtn,
  InfoBox,
  NormaTitle,
  NormaValue,
  NormaWrapper,
} from './DailyNorma.styled';
import { selectWaterRate } from 'redux/auth/authSelectors';
// import { selectUser } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

export const DailyNorma = ({ openModal }) => {
  // const { waterRate } = useSelector(selectUser);
  // console.log(waterRate);
  const waterRate = useSelector(selectWaterRate);
  const [waterRateValue, setWaterRateValue] = useState(0);

  useEffect(() => {
    setWaterRateValue(waterRate);
  }, [waterRate]);

  return (
    <NormaWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <InfoBox>
        <NormaValue>{waterRateValue / 1000} L</NormaValue>
        <EditBtn type="button" onClick={openModal}>
          Edit
        </EditBtn>
      </InfoBox>
    </NormaWrapper>
  );
};

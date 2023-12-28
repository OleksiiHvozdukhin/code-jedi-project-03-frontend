import { useSelector } from 'react-redux';
import {
  BottleImg,
  EditBtn,
  InfoBox,
  NormaTitle,
  NormaValue,
  NormaWrapper,
} from './DailyNorma.styled';
import { selectWaterRate } from 'redux/waterRate/selectors';
import { bottleImage } from './DailyNorma.styled';

export const DailyNorma = ({ openModal }) => {
  const dailyNormaValue = useSelector(selectWaterRate);
  return (
    <section>
      <BottleImg src={`${bottleImage.desktop.bottle}`} />
      <NormaWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <InfoBox>
          <NormaValue>{dailyNormaValue} L</NormaValue>
          <EditBtn type="button" onClick={openModal}>
            Edit
          </EditBtn>
        </InfoBox>
      </NormaWrapper>
    </section>
  );
};

import { useSelector } from 'react-redux';
import {
  BottleImage,
  EditBtn,
  InfoBox,
  NormaTitle,
  NormaValue,
  NormaWrapper,
  Section,
} from './DailyNorma.styled';
import { selectWaterRate } from 'redux/waterRate/selectors';
import bottle from '../../../images/Desktop/Desktop Botle Home screen-1x.png';

export const DailyNorma = ({ openModal }) => {
  const dailyNormaValue = useSelector(selectWaterRate);
  return (
    <Section>
      <NormaWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <InfoBox>
          <NormaValue>{dailyNormaValue} L</NormaValue>
          <EditBtn type="button" onClick={openModal}>
            Edit
          </EditBtn>
        </InfoBox>
      </NormaWrapper>
      <BottleImage src={bottle} />
    </Section>
  );
};

import { useSelector } from 'react-redux';
import {
  EditBtn,
  InfoBox,
  NormaTitle,
  NormaValue,
  NormaWrapper,
  Section,
} from './DailyNorma.styled';
import { selectWaterRate } from 'redux/waterRate/selectors';

export const DailyNorma = ({ openModal }) => {
  const dailyNormaValue = useSelector(selectWaterRate);
  console.log(dailyNormaValue);
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
    </Section>
  );
};

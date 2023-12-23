import {
  EditBtn,
  InfoBox,
  NormaTitle,
  NormaValue,
  NormaWrapper,
} from './DailyNorma.styled';

export const DailyNorma = ({ openModal }) => {
  return (
    <section>
      <NormaWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <InfoBox>
          <NormaValue>1.5 L</NormaValue>
          <EditBtn type="button" onClick={openModal}>
            Edit
          </EditBtn>
        </InfoBox>
      </NormaWrapper>
    </section>
  );
};

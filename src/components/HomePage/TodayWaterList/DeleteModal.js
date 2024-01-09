import {
  ButtonGroup,
  CancelBtn,
  DeleteBody,
  DeleteBtn,
  DeleteText,
} from './DeleteModal.styled';

export const DeleteModal = ({ onRequestClose }) => {
  const handleCansel = () => onRequestClose();
  const handleDelete = () => onRequestClose();

  return (
    <DeleteBody>
      <DeleteText>Are you sure you want to delete the entry?</DeleteText>
      <ButtonGroup>
        <DeleteBtn type="button" onClick={() => handleDelete()}>
          Delete
        </DeleteBtn>
        <CancelBtn type="button" onClick={() => handleCansel()}>
          Cancel
        </CancelBtn>
      </ButtonGroup>
    </DeleteBody>
  );
};

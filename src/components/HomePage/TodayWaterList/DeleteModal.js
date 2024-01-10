import { deleteWaterThunk } from 'redux/consumedwaters/consumedwatersOperations';
import {
  ButtonGroup,
  CancelBtn,
  DeleteBody,
  DeleteBtn,
  DeleteText,
} from './DeleteModal.styled';
import { useDispatch } from 'react-redux';

export const DeleteModal = ({ onRequestClose, idForDelete }) => {
  const dispatch = useDispatch();
  const handleCansel = () => onRequestClose();

  const handleDelete = async () => {
    await dispatch(deleteWaterThunk(idForDelete));
    onRequestClose();
  };

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

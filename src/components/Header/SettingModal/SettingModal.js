import { useState } from 'react';
import { SettingForma } from './SettingForma/SettingForma';
import sprite from '../../../images/sprite.svg';
import {
  AvatarBox,
  AvatarBtn,
  AvatarBtnText,
  AvatarImg,
  AvatarWrapper,
  FileInput,
  Text,
} from './SettingModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { updateAvatarThunk } from '../../../redux/auth/authOperations';

export const SettingModal = ({ isOpen, onRequestClose }) => {
  const { avatarUrl } = useSelector(selectUser);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadPhoto = () => {
    // Ваша логика для загрузки фотографии.
    // Тут можно использовать выбранный файл (selectedFile)
    console.log('File to upload:', selectedFile);

    // Здесь можно вызвать соответствующий action для загрузки фотографии
    dispatch(updateAvatarThunk(selectedFile));
  };

  return (
    <>
      <Text>Your photo</Text>
      <AvatarWrapper>
        <AvatarBox>
          <AvatarImg src={avatarUrl} alt="user avatar" />
        </AvatarBox>

        <FileInput
          name="avatarUrl"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="uploadInput"
        />
        <AvatarBtn type="button" onClick={handleUploadPhoto}>
          <svg width="16" height="16" stroke="#407BFF" fill="none">
            <use xlinkHref={`${sprite}#icon-arrow-up-tray`} />
          </svg>
          <AvatarBtnText>Upload a photo</AvatarBtnText>
        </AvatarBtn>
      </AvatarWrapper>

      <SettingForma onSubmit={() => onRequestClose()} />
    </>
  );
};

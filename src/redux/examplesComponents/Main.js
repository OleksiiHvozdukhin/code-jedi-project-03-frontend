import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from 'redux/auth/authOperations';
import React, { useState } from 'react';

export const Main = () => {
  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  };
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);

    console.log(file);
    // // Сбросить предыдущий временный URL перед установкой нового
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Выберите файл!');
        return;
      }

      // Создание временного URL для выбранного файла
      const imageUrl = URL.createObjectURL(selectedFile);

      // Обновление состояния для отображения картинки
      setImageUrl(imageUrl);

      // Отправка файла на сервер
      const formData = new FormData();
      formData.append('file', selectedFile);
      const data = await dispatch(updateAvatarThunk(formData));
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  };

  return (
    <div style={mainStyle}>
      <form>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="button" onClick={handleUpload}>
          Загрузить аватар
        </button>
      </form>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Avatar"
          style={{ marginTop: '10px', maxWidth: '100%' }}
        />
      )}
    </div>
  );
};

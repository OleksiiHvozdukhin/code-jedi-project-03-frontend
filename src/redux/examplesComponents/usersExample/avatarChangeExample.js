import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from 'redux/auth/authOperations';
import React, { useState } from 'react';

export const Main = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Выберите файл!');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const data = await dispatch(updateAvatarThunk(formData));
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div style={mainStyle}>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>updateAvatar</button>
      </form>
    </div>
  );
};

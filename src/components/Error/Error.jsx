import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoListElement, PhotoList } from './Error.styled';

export const ErrorPageComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Твой код обработки клика
    navigate('/signin');
    // console.log('CLICK');
  };

  return (
    <div>
      <p>
        I haven't figured out what to put in the homepage, sooooooo.....{' '}
        <br></br>
        Hold the kitties!
      </p>
      <PhotoList>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
        <PhotoListElement onClick={handleClick}>
          <div></div>
        </PhotoListElement>
      </PhotoList>
    </div>
  );
};

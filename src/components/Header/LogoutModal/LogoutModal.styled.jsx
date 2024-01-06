import styled from 'styled-components';

export const LogOutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogOutText = styled.p`
  display: block;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogOutBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--Secondary-color-3, #ef5050);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: #fff;

  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
`;

export const CancelBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--Secondary-color-5, #d7e3ff);

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

 color: var(--Primery-Color-Blue, #407BFF);
text-align: center;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 125% */
Cancel


  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
`;

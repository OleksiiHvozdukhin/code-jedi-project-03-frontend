import styled from 'styled-components';

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
  margin-bottom: 8px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
`;

export const AvatarBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  border: none;
`;

export const AvatarBtnText = styled.span`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 128.571%;
  color: var(--Primery-Color-Blue, #407bff);
`;
export const FileInput = styled.input`
  display: none;
`;

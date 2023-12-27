import styled from 'styled-components';

export const UserBtn = styled.button`
  position: relative;
  margin-left: auto;
  width: 122px;
  height: 28px;
  padding: 0;
  border: none;
  display: flex;
  gap: 8px;
  text-transform: capitalize;
  text-align: center;
`;

export const UserName = styled.span`
  width: 66px;
  color: var(--Primery-Color-Blue, #407bff)
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  text-align: right;
  
`;

export const MenuAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const UserIconBox = styled.div`
  border-radius: 28px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const IconBox = styled.div`
  width: 24pxpx;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowDownIcon = styled.svg`
  display: block;
  color: #000;
`;

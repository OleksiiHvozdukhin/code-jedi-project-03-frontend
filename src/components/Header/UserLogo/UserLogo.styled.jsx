import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: calc(100% - 102px);
  height: 28px;
  width: auto;
  flex-shrink: 2;
`;

export const UserBtn = styled.button`
  border: none;
  display: flex;
  gap: 8px;
  text-transform: capitalize;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 10px 0;

  & span {
    flex-shrink: 2;
    margin-right: 8px;
    font-family: 'Roboto-regular';
    font-size: 16px;
    color: var(--primaryBlack);
    text-overflow: ellipsis;
    overflow: hidden;
    width: auto;
  }

  & img {
    flex-shrink: 0;
    border-radius: 50%;
    margin-right: 4px;
  }

  & svg {
    flex-shrink: 0;
  }

  &.open {
    & svg {
      transform: rotateX(180deg);
    }
  }
`;

export const UserName = styled.span`
  /* width: 66px;
  color: var(--Primery-Color-Blue, #407bff)
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  text-align: right; */
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

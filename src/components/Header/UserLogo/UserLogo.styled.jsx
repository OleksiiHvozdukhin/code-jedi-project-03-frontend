import { theme } from 'components/theme';
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
  gap: ${theme.spacing(4)};
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
    margin-right: ${theme.spacing(4)};
    font-size: 16px;
    color: ${theme.colors.dark};
    text-overflow: ellipsis;
    overflow: hidden;
    width: auto;
  }

  & img {
    flex-shrink: 0;
    border-radius: 50%;
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
  color: ${theme.colors.blue};)
  font-size: 18px;
  line-height: 24px; 
  text-align: right; */
`;

export const MenuAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  & svg {
    cursor: pointer;
    color: ${theme.colors.blue};
    transition: color ${theme.transition};
    &:hover {
      color: ${theme.colors.orange};
    }
  }
`;

export const UserIconBox = styled.div`
  border-radius: 28px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowDownIcon = styled.svg`
  display: block;
  color: ${theme.colors.dark};
`;

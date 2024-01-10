import styled from 'styled-components';
import { theme } from 'components/theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  & h2 {
    color: ${theme.colors.dark};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;

export const ButtonAddWater = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${theme.colors.blue};
  margin-top: ${theme.spacing(6)};
  margin-bottom: ${theme.spacing(12)};
  line-height: 1.25;
  cursor: pointer;
  transition: color ${theme.transition};
  & svg {
    transition: stroke ${theme.transition};
  }
  &:hover {
    color: ${theme.colors.orange};
  }
  &:hover svg {
    stroke: ${theme.colors.orange};
  }
`;

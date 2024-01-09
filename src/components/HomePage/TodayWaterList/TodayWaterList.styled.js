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
  @media screen and (min-width: 768px) {
    
  }
`;

export const ButtonAddWater = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${theme.colors.blue};
  margin-top: 12px;
  margin-bottom: 24px;
  line-height: 1.25;
`;

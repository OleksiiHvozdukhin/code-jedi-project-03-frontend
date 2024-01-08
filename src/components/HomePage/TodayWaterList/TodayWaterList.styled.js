import styled from 'styled-components';
import { theme } from 'components/theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ButtonAddWater = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${theme.colors.blue};
  margin-left: 8px;
  margin-top: 12px;
`;

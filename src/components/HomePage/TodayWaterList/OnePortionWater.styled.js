import styled from 'styled-components';
import { theme } from 'components/theme';

export const OnePortionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
`;
export const PortionData = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const PortionText = styled.span`
  &:nth-child(2) {
    font-size: 18px;
    line-height: 24px;
    color: ${theme.colors.blue};
  }
  &:last-child {
    font-size: 12px;
    line-height: 24px;
    color: ${theme.colors.dark};
  }
`;
export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const TodoBtn = styled.button`
  border: none;
  background-color: transparent;
`;

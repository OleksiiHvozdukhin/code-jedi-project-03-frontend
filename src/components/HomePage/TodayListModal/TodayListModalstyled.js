import { theme } from 'components/theme';
import styled from 'styled-components';

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color ${theme.transition};
  &:hover > svg {
    stroke: ${theme.colors.orange};
  }
`;
export const ModalContainer = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 592px;
  }
`;
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h2`
  margin-bottom: ${theme.spacing(12)};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: ${theme.colors.dark};
`;

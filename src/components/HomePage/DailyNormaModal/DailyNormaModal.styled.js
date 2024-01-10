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

export const TitleWrapper = styled.div`
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
export const Text = styled.li`
  line-height: 1.25;
  color: ${theme.colors.dark};
  min-width: 256px;
`;

export const Span = styled.span`
  color: ${theme.colors.blue};

  @media screen and (min-width: 778px) {
    font-size: 18px;
    line-height: 1.33;
    max-width: 592px;
  }
`;

export const TextWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(6)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing(12)};
  }
`;

export const SmallTextWrapper = styled.div`
  padding: ${theme.spacing(5)};
  border-radius: 10px;
  border: 1px solid ${theme.colors.skyblue};
  margin-bottom: ${theme.spacing(12)};
`;

export const SmallText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: #8f8f8f;
`;

export const Symbol = styled.span`
  color: ${theme.colors.blue};
`;

export const CalculateTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing(8)};
`;

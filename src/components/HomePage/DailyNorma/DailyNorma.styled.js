import { theme } from 'components/theme';
import styled from 'styled-components';

export const NormaWrapper = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  margin-top: ${theme.spacing(12)};
  margin-bottom: ${theme.spacing(116)};
  flex-direction: column;
  gap: ${theme.spacing(6)};
  border-radius: 10px;
  border: 1px solid ${theme.colors.light};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    margin-top: ${theme.spacing(20)};
    margin-bottom: ${theme.spacing(150)};
  }

  @media screen and (min-width: 1440px) {
    margin-top: ${theme.spacing(26)};
    margin-bottom: 0;
    position: relative;
  }
`;

export const NormaTitle = styled.h3`
  color: ${theme.colors.dark};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: ${theme.spacing(6)};
`;

export const NormaValue = styled.p`
  color: ${theme.colors.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EditBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  color: ${theme.colors.lightblue};
  line-height: 1.25;
  cursor: pointer;
  transition: color ${theme.transition};

  &:hover,
  &:focus {
    color: ${theme.colors.orange};
    outline: none;
  }
`;

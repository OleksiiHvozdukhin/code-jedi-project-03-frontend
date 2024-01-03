import { theme } from 'components/theme';
import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${theme.spacing(8)};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${theme.spacing(12)};
  }
`;

export const NormaWrapper = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  margin-bottom: ${theme.spacing(4)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing(6)};
  border-radius: 10px;
  border: 1px solid ${theme.colors.light};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    position: absolute;
    z-index: 50;
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
  color: #8baeff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  cursor: pointer;
  transition: color ${theme.transition};
  &:hover,
  &:focus {
    color: ${theme.colors.orange};
    outline: none;
  }
`;

export const BottleImage = styled.img`
  @media screen and (max-width: 767px) {
    background-image: url('../../../images/Mobile/Mobile Bottle home screen-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../../images/Mobile/Mobile Bottle home screen-2x.png');
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url('../../../images/Tablet/Tablet Bottle Home Screen-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../../images/Tablet/Tablet Bottle Home Screen-2x.png');
    }
  }

  @media screen and (min-width: 1400px) {
    background-image: url('../../../images/Desktop/Desktop Botle Home screen-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../../images/Desktop/Desktop Botle Home screen-2x.png');
    }
  }
`;

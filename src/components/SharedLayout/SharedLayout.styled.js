import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 280px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1216px;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  top: 108px;
  z-index: -1;
  background-size: cover;
  @media screen and (max-width: 767px) {
    background-image: url('../../images/Mobile/Mobile Background element Home screen-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Mobile/Mobile Background element Home screen-2x.png');
    }
  }

  @media screen and (min-width: 768px) {
    top: 104px;
    background-image: url('../../images/Tablet/Tablet Background element Home Screen-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Tablet/Tablet Background element Home Screen-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    top: 82px;
    background-image: url('../../images/Desktop/Desktop Background element Main Page-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Desktop/Desktop Background element Main Page-2x.png');
    }
  }
`;

import styled from 'styled-components';
// import wave from '../../images/Mobile/Mobile-Background-Main-Page-1x.png';

export const Tracker = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  top: 112px;
  background-image: url('../../images/Mobile/Mobile-Background-element-Home-screen-1x.png');
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url('../../images/Mobile/Mobile-Background-element-Home-screen-2x.png');
  }

  @media screen and (min-width: 768px) {
    top: 64px;
    background-image: url('../../images/Tablet/Tablet-Background-element-Home-Screen-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Tablet/Tablet-Background-element-Home-Screen-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    top: 109px;
    background-image: url('../../images/Desktop/Desktop-Background-element-Main-Page-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Desktop/Desktop-Background-element-Main-Page-2x.png');
    }
  }
`;

export const BgWave = styled.img`
  position: absolute;
  /* bottom: 0; */
  z-index: -1;
  transform: translateX(-112px);

  @media screen and (max-width: 767px) {
    background-image: url('../../images/Mobile/Mobile-Background-Main-Page-1x.png');
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Mobile/Mobile-Background-Main-Page-2x.png');
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url('../../images/Tablet/Tablet-Background-Main-Page-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Tablet/Tablet-Background-Main-Page-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    top: 458px;
    background-image: url('../../images/Desktop/Desktop-Background-Main-Page-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Desktop/Desktop-Background-Main-Page-2x.png');
    }
  }
`;

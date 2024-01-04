import styled from 'styled-components';

export const BgImage = styled.img`
  position: absolute;
  top: 112px;

  background: url('../../images/Mobile/Mobile Background element Home screen-1x.png');

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: url('../../images/Mobile/Mobile Background element Home screen-2x.png')
      no-repeat;
  }

  @media screen and (min-width: 768px) {
    top: 64px;
    background-image: url('../../images/Tablet/Tablet Background element Home Screen-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background: url('../../images/Tablet/Tablet Background element Home Screen-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    top: 109px;
    background: url('../../images/Desktop/Desktop Background element Main Page-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background: url('../../images/Desktop/Desktop Background element Main Page-2x.png')
        no-repeat;
    }
  }
`;

export const BgWave = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -1;

  background: center / no-repeat
    url('../../images/Mobile/Mobile Background Main Page-1x.png');

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: url('../../images/Mobile/Mobile Background Main Page-2x.png');
  }

  @media screen and (min-width: 768px) {
    background: center / no-repeat
      url('../../images/Tablet/Tablet Background Main Page-1x.png') no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background: url('../../images/Tablet/Tablet Background Main Page-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    background: center / no-repeat
      url('../../images/Desktop/Desktop-Background-Main-Page-1x.png') no-repeat
      cover;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background: url('../../images/Desktop/DesktopBackground Main Page-2x.png');
    }
  }
`;

export const MainContainer = styled.div`
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1216px;
  }
`;

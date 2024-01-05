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
  z-index: -2;
  top: 112px;

  background: center / cover no-repeat
    url('../../images/Mobile/Mobile Background element Home screen-1x.png');

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: url('../../images/Mobile/Mobile-Background-element-Home-screen-2x.png')
      no-repeat;
  }

  @media screen and (min-width: 768px) {
    top: 64px;
    background-image: url('../../images/Tablet/Tablet-Background-element-Home-Screen-1x.png');

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background: url('../../images/Tablet/Tablet-Background-element-Home-Screen-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    top: 109px;
    background-image: url(${require('../../images/Desktop/Desktop-Background-element-Main-Page-1x.png')});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${require('../../images/Desktop/Desktop-Background-element-Main-Page-2x.png')});
    }
  }
`;

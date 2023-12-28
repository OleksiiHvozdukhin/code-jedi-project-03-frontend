import bgMobile from '../../images/Mobile/Mobile Background element Home screen-1x.png';
import bgMobileRetina from '../../images/Mobile/Mobile Background element Home screen-2x.png';
import bgMobileBottle from '../../images/Mobile/Mobile Bottle home screen-1x.png';
import bgMobileBottleRetina from '../../images/Mobile/Mobile Bottle home screen-2x.png';

import bgTablet from '../../images/Tablet/Tablet Background element Home Screen-1x.png';
import bgTabletRetina from '../../images/Tablet/Tablet Background element Home Screen-2x.png';
import bgTabletBottle from '../../images/Tablet/Tablet Bottle Home Screen-1x.png';
import bgTabletBottleRetina from '../../images/Tablet/Tablet Bottle Home Screen-2x.png';

import bgDesktop from '../../images/Desktop/Desktop Background element Main Page-1x.png';
import bgDesktopRetina from '../../images/Desktop/Desktop Background element Main Page-2x.png';
import bgDesktopBottle from '../../images/Desktop/Desktop Botle Home screen-1x.png';
import bgDesktopBottleRetina from '../../images/Desktop/Desktop Botle Home screen-1x.png';
import styled from 'styled-components';

export const bg = {
  mobile: {
    bg: bgMobile,
    bgRetina: bgMobileRetina,
    bottle: bgMobileBottle,
    bottleRetina: bgMobileBottleRetina,
  },
  tablet: {
    bg: bgTablet,
    bgRetina: bgTabletRetina,
    bottle: bgTabletBottle,
    bottleRetina: bgTabletBottleRetina,
  },
  desktop: {
    bg: bgDesktop,
    bgRetina: bgDesktopRetina,
    bottle: bgDesktopBottle,
    bottleRetina: bgDesktopBottleRetina,
  },
};

export const HomeContainer = styled.section`
  background-image: url(${bg.mobile.bg}), url(${bg.mobile.bottle});
  background-size: cover, 280px 208px;
  background-position: top left, top 80px center;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg.mobile.bgRetina}), url(${bg.mobile.bottleRetina});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bg.tablet.bg}), url(${bg.tablet.bottle});
    background-size: cover, 518px 386px;
    background-position: top left, top 16px center;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg.tablet.bgRetina}),
        url(${bg.tablet.bottleRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
    background-image: url(${bg.desktop.bg});
    background-size: cover, 738px 548px;
    background-position: top left, top left 36px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg.desktop.bgRetina}),
        url(${bg.desktop.bottleRetina});
    }
  }
`;

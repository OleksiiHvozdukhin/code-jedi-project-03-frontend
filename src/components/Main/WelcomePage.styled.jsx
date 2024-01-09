import styled from 'styled-components';
import d1 from '../../images/Desktop/Desktop-Background-Main-Page-1x.png';
import d2 from '../../images/Desktop/Desktop-Background-Main-Page-2x.png';
import de1 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import de2 from '../../images/Desktop/Desktop-Background-element-Main-Page-2x.png';
import t1 from '../../images/Tablet/Tablet-Background-Main-Page-1x.png';
import t2 from '../../images/Tablet/Tablet-Background-Main-Page-2x.png';
import m1 from '../../images/Mobile/Mobile-Background-Main-Page-1x.png';
import m2 from '../../images/Mobile/Mobile-Background-Main-Page-2x.png';

export const MainWrapper = styled.div`
  height: 100vh;
  background: top -70px center no-repeat url(${m1});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${m2});
  }

  @media screen and (min-width: 768px) {
    height: 150vh;
    background: top -91px center no-repeat url(${t1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${t2});
    }
  }

  @media screen and (min-width: 1440px) {
    height: 95vh;
    background: bottom no-repeat url(${d1}),
      left -10% / contain no-repeat url(${de1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d2}), url(${de2});
    }
  }
`;
